import Image from "next/image";
import { getLegalDocument, type LegalDocumentType } from "@/lib/api";

/**
 * Every legal page is this page. The heading and the document type change; the
 * layout, the brush separators and the prose styling do not — so a new policy
 * is a route file and an entry in LEGAL_PAGES, never a copy of the markup.
 *
 * The body is published from the admin dashboard, so a correction goes live
 * without a deploy.
 */
export default async function LegalDocumentPage({
  type,
  heading,
}: {
  type: LegalDocumentType;
  heading: string;
}) {
  const document = await getLegalDocument(type);

  const lastUpdated = document?.lastUpdatedAt
    ? new Date(document.lastUpdatedAt).toLocaleDateString("en-GB", {
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <div>
      <section className="min-h-70 md:min-h-90 bg-reddamask pt-43 px-3 md:px-14">
        <h1 className="font-rubik font-bold text-4xl md:text-6xl uppercase">
          {heading}
        </h1>
        {lastUpdated && (
          <p className="mt-3 md:mt-5 text-gray-600">
            Last updated: {lastUpdated}
          </p>
        )}
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

      <div className="mx-3 md:mx-14 text-sm mb-15">
        {document?.content ? (
          /**
           * The document is HTML written in the dashboard's editor by an admin
           * holding settings.legal.manage — a trusted author, not visitor
           * input. The selectors below mirror the styles that editor shows
           * while writing, so what was composed is what publishes.
           */
          <div
            className="[&_p]:mb-3 [&_h1]:font-rubik [&_h1]:font-bold [&_h1]:text-xl [&_h1]:mb-1 [&_h1]:mt-4 [&_h2]:font-rubik [&_h2]:font-bold [&_h2]:text-lg [&_h2]:mb-1 [&_h2]:mt-4 [&_h3]:font-rubik [&_h3]:font-bold [&_h3]:text-base [&_h3]:mb-1 [&_h3]:mt-3 [&_ul]:list-disc [&_ul]:ms-6 [&_ul]:md:ms-8 [&_ul]:my-2 [&_ol]:list-decimal [&_ol]:ms-6 [&_ol]:md:ms-8 [&_ol]:my-2 [&_li]:pl-1 [&_a]:underline [&_a]:text-munchprimary [&_blockquote]:border-l-4 [&_blockquote]:border-slate-300 [&_blockquote]:ps-4 [&_blockquote]:py-1 [&_blockquote]:italic [&_blockquote]:my-4 [&_pre]:bg-slate-100 [&_pre]:p-4 [&_pre]:rounded [&_pre]:my-4 [&_pre]:font-mono [&_pre]:text-sm [&_pre]:overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: document.content }}
          />
        ) : (
          <p className="text-gray-600">
            This document has not been published yet. Please check back
            shortly, or{" "}
            <a href="/contact" className="text-munchorange underline">
              get in touch
            </a>
            .
          </p>
        )}
      </div>
    </div>
  );
}
