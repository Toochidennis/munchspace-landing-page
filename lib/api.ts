/**
 * Client for the platform's public API.
 *
 * The vendor and admin apps each grew their own copy of this, and both had to
 * carry token refresh and session handling. Nothing here is authenticated —
 * these are the details the platform publishes about itself — so this keeps the
 * parts worth sharing and drops the rest:
 *
 *   - one place that knows the base URL, the API key and the response envelope
 *   - a typed apiGet, so a caller declares what it expects and gets that or null
 *   - fetched on the server and revalidated, so pages ship already filled in:
 *     no request from the visitor's browser, no empty flash, and the values are
 *     in the HTML search engines read
 *   - never throws. A public page should lose a section when the API is down,
 *     not the whole render.
 */

const API_BASE = process.env.NEXT_PUBLIC_BASE_URL ?? "";
const API_KEY = process.env.NEXT_PUBLIC_MUNCHSPACE_API_KEY ?? "";

/** Long enough not to refetch constantly, short enough that a correction shows up the same day. */
export const DEFAULT_REVALIDATE_SECONDS = 300;

/**
 * Every response is wrapped the same way. Success carries `data`; failure
 * carries `error`, which is a string or an array of them for validation
 * failures — there is no `message` field anywhere on it.
 */
type ApiEnvelope<T> = {
  success?: boolean;
  statusCode?: number;
  data?: T;
  error?: string | string[];
};

export type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; status: number; error: string };

/**
 * Pulls the human-readable reason out of a failure envelope, falling back to
 * copy for the statuses that read the same everywhere.
 */
export function getApiErrorMessage(
  body: unknown,
  fallback = "Something went wrong. Please try again.",
  status?: number,
): string {
  const envelope = body as ApiEnvelope<unknown> | null;
  const error = envelope?.error;
  const code = status ?? envelope?.statusCode;

  if (typeof error === "string" && error.trim()) return error.trim();

  if (Array.isArray(error)) {
    const parts = error.filter(
      (entry): entry is string => typeof entry === "string" && !!entry.trim(),
    );
    if (parts.length) return parts.join(" ");
  }

  switch (code) {
    case 404:
      return "Not found.";
    case 429:
      return "Too many requests. Please try again shortly.";
    case 500:
      return "The server ran into a problem. Please try again.";
    default:
      return fallback;
  }
}

/**
 * GET a public endpoint and unwrap the envelope.
 *
 * `revalidate: false` opts a call out of caching for something that must be
 * read fresh; everything else is cached for DEFAULT_REVALIDATE_SECONDS.
 */
export async function apiGet<T>(
  path: string,
  options: { revalidate?: number | false } = {},
): Promise<ApiResult<T>> {
  if (!API_BASE) {
    return { ok: false, status: 0, error: "API base URL is not configured." };
  }

  const revalidate = options.revalidate ?? DEFAULT_REVALIDATE_SECONDS;

  try {
    const res = await fetch(`${API_BASE}${path}`, {
      headers: { "x-api-key": API_KEY },
      ...(revalidate === false
        ? { cache: "no-store" as const }
        : { next: { revalidate } }),
    });

    const body = (await res.json().catch(() => null)) as ApiEnvelope<T> | null;

    if (!res.ok || body?.success === false || body?.data === undefined) {
      return {
        ok: false,
        status: res.status,
        error: getApiErrorMessage(body, "Request failed.", res.status),
      };
    }

    return { ok: true, data: body.data };
  } catch {
    // Network failure, DNS, timeout — indistinguishable from here and handled
    // the same way by every caller.
    return { ok: false, status: 0, error: "Could not reach the server." };
  }
}

/**
 * POST to a public endpoint. Safe to call from the browser: it reads only the
 * NEXT_PUBLIC values and carries no session.
 *
 * Returns the same discriminated result as apiGet, so a caller shows the
 * server's own reason rather than inventing one.
 */
export async function apiPost<T>(
  path: string,
  body: unknown,
): Promise<ApiResult<T>> {
  if (!API_BASE) {
    return { ok: false, status: 0, error: "API base URL is not configured." };
  }

  try {
    const res = await fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
      },
      body: JSON.stringify(body),
    });

    const payload = (await res.json().catch(() => null)) as ApiEnvelope<T> | null;

    if (!res.ok || payload?.success === false || payload?.data === undefined) {
      return {
        ok: false,
        status: res.status,
        error: getApiErrorMessage(payload, "Request failed.", res.status),
      };
    }

    return { ok: true, data: payload.data };
  } catch {
    return { ok: false, status: 0, error: "Could not reach the server." };
  }
}

// ---------------------------------------------------------------------------
// Contact details
// ---------------------------------------------------------------------------

export type ContactChannel =
  | "email"
  | "phone"
  | "whatsapp"
  | "address"
  | "website"
  | "facebook"
  | "instagram"
  | "twitter"
  | "tiktok"
  | "linkedin"
  | "youtube"
  | "app_store"
  | "play_store";

export type ContactDetail = {
  type: ContactChannel;
  value: string;
  label: string | null;
};

/** Active channels, in the order the admin arranged them. Empty when unreachable. */
export async function getContactDetails(): Promise<ContactDetail[]> {
  const result = await apiGet<{ data: ContactDetail[]; total: number }>(
    "/contact-details",
  );

  return result.ok && Array.isArray(result.data?.data) ? result.data.data : [];
}

/** All values for one channel, in display order. */
export function channelValues(
  details: ContactDetail[],
  type: ContactChannel,
): ContactDetail[] {
  return details.filter((detail) => detail.type === type);
}

export type AppLinks = {
  appStore: string | null;
  playStore: string | null;
};

/**
 * Where to download each app, as published in the dashboard.
 *
 * A store listing moves — a relaunched listing, a new bundle id — which is why
 * these are data rather than constants baked into the markup.
 */
export async function getAppLinks(): Promise<AppLinks> {
  const details = await getContactDetails();

  return {
    appStore: firstChannel(details, "app_store")?.value ?? null,
    playStore: firstChannel(details, "play_store")?.value ?? null,
  };
}

/** The first value for one channel, or null when the admin has not set it. */
export function firstChannel(
  details: ContactDetail[],
  type: ContactChannel,
): ContactDetail | null {
  return details.find((detail) => detail.type === type) ?? null;
}

// ---------------------------------------------------------------------------
// Legal documents
// ---------------------------------------------------------------------------

export const LEGAL_DOCUMENT_TYPES = [
  "terms_of_service",
  "privacy_policy",
  "cookie_policy",
  "compliance",
  "refund_policy",
  "safety_guidelines",
] as const;

export type LegalDocumentType = (typeof LEGAL_DOCUMENT_TYPES)[number];

export type LegalDocument = {
  id: string;
  type: LegalDocumentType;
  content: string;
  version: number;
  isActive: boolean;
  lastUpdatedAt: string;
  createdAt: string;
};

/**
 * The published version of one document, or null when none has been published.
 * The API answers 404 in that case, which is a normal state rather than a fault.
 */
export async function getLegalDocument(
  type: LegalDocumentType,
): Promise<LegalDocument | null> {
  const result = await apiGet<LegalDocument>(`/legal/${type}`);
  return result.ok ? result.data : null;
}

// ---------------------------------------------------------------------------
// Service locations
// ---------------------------------------------------------------------------

export type ServiceLocation = {
  id: string;
  name: string;
  code: string;
};

export type ServiceCountry = {
  id: string;
  name: string;
  code: string;
  states: ServiceLocation[];
};

/**
 * Where the platform operates, grouped by country.
 *
 * Derived server-side from the delivery settings an admin maintains, so this
 * can never advertise somewhere delivery cannot be priced — a country is listed
 * only because at least one of its states is.
 */
export async function getServiceLocations(): Promise<ServiceCountry[]> {
  const result = await apiGet<{
    data: ServiceCountry[];
    totalCountries: number;
    totalStates: number;
  }>("/locations");

  if (!result.ok || !Array.isArray(result.data?.data)) return [];

  // An API that has not been deployed yet still returns a flat list of states.
  // Normalise it rather than letting the page fail through the changeover.
  return result.data.data.map((entry) => ({
    ...entry,
    states: Array.isArray(entry.states) ? entry.states : [],
  }));
}

// ---------------------------------------------------------------------------
// Support
// ---------------------------------------------------------------------------

export type SupportTopic = {
  id: string;
  key: string;
  label: string;
  description: string | null;
};

/** The topics a report can be filed under, in display order. */
export async function getSupportTopics(): Promise<SupportTopic[]> {
  const result = await apiGet<{ data: SupportTopic[]; total: number }>(
    "/support/topics",
  );

  return result.ok && Array.isArray(result.data?.data) ? result.data.data : [];
}

export type CreateTicketInput = {
  topicKey: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  /** Honeypot. Left empty by people, filled by bots. */
  website?: string;
};

export function submitSupportTicket(input: CreateTicketInput) {
  return apiPost<{ code: string; message: string }>("/support/tickets", input);
}
