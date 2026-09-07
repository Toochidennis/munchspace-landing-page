import Image from "next/image";
import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import {
  channelValues,
  getContactDetails,
  getSupportTopics,
  type ContactChannel,
} from "@/lib/api";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Report a problem with an order, ask about selling or riding with Munchspace, or reach our team directly by phone, email or WhatsApp.",
  openGraph: {
    title: "Contact Munchspace",
    description:
      "Report a problem or reach the Munchspace team. We reply to every report.",
    type: "website",
  },
  alternates: {
    canonical: "/contact",
  },
  robots: "index, follow",
};

/** Channels worth showing beside the form, in the order someone would try them. */
const DIRECT_CHANNELS: Array<{
  type: ContactChannel;
  heading: string;
  icon: typeof Phone;
  href: (value: string) => string | undefined;
}> = [
  {
    type: "phone",
    heading: "Call us",
    icon: Phone,
    href: (value) => `tel:${value.replace(/\s+/g, "")}`,
  },
  {
    type: "whatsapp",
    heading: "WhatsApp",
    icon: MessageCircle,
    href: (value) => `https://wa.me/${value.replace(/[^\d]/g, "")}`,
  },
  {
    type: "email",
    heading: "Email",
    icon: Mail,
    href: (value) => `mailto:${value}`,
  },
  { type: "address", heading: "Visit us", icon: MapPin, href: () => undefined },
];

export default async function ContactPage() {
  const [topics, contactDetails] = await Promise.all([
    getSupportTopics(),
    getContactDetails(),
  ]);

  const channels = DIRECT_CHANNELS.flatMap((channel) =>
    channelValues(contactDetails, channel.type).map((detail) => ({
      ...channel,
      detail,
    })),
  );

  return (
    <div>
      <section className="relative min-h-70 md:min-h-90 overflow-hidden bg-reddamask pt-43 px-3 md:px-14">
        {/* The soft shapes the rest of the site uses to break up a flat block. */}
        <div className="pointer-events-none absolute -right-16 top-20 h-56 w-56 rounded-full bg-white/40" />
        <div className="pointer-events-none absolute right-40 top-56 hidden h-24 w-24 rounded-full bg-white/30 md:block" />

        <div className="relative">
          <h1 className="font-rubik text-4xl font-bold md:text-6xl">
            TALK TO US
          </h1>
          <p className="mt-3 max-w-xl text-gray-600 md:mt-5">
            Tell us what happened and we will look into it. Every report gets a
            reference and a reply.
          </p>
        </div>
      </section>

      <div className="overflow-y-hidden">
        <Image
          src={
            "https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767351802/brush_vuufi6.png"
          }
          width={2000}
          height={200}
          alt="brush seperator"
          className="mb-10 w-screen h-20 md:h-fit hidden md:block -mt-10"
        />
        <Image
          src={
            "https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767351802/brushmobile1_d7wruv.png"
          }
          width={2000}
          height={200}
          alt="brush seperator"
          className="mb-10 w-screen h-20 md:h-fit md:hidden -mt-10"
        />
      </div>

      <div className="mx-3 mb-20 grid gap-10 md:mx-7 lg:mx-14 lg:grid-cols-5 lg:gap-14">
        <div className="lg:col-span-2">
          <h2 className="font-rubik text-2xl font-bold md:text-3xl">
            Reach us directly
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            Already ordered and something went wrong? The fastest route is the
            order screen in the app — it carries your order details with it. For
            everything else, the form is read by our team.
          </p>

          {channels.length > 0 && (
            <ul className="mt-8 space-y-5">
              {channels.map(({ detail, heading, icon: Icon, href }) => {
                const link = href(detail.value);

                return (
                  <li
                    key={`${detail.type}-${detail.value}`}
                    className="flex gap-4"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-reddamask text-munchorange">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm text-gray-500">
                        {detail.label ?? heading}
                      </p>
                      {link ? (
                        <a
                          href={link}
                          target={link.startsWith("http") ? "_blank" : undefined}
                          rel={
                            link.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="font-medium transition-colors hover:text-munchorange"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="font-medium">{detail.value}</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="lg:col-span-3">
          {topics.length > 0 ? (
            <ContactForm topics={topics} />
          ) : (
            /* No topics means the API is unreachable or unseeded. Offering a
               form that cannot be submitted would waste someone's time. */
            <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
              <h2 className="font-rubik text-xl font-bold">
                The form is unavailable right now
              </h2>
              <p className="mt-3 text-sm text-gray-600">
                Please use the phone number or email address beside this, and we
                will pick it up from there.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
