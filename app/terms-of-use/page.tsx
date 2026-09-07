import type { Metadata } from "next";
import LegalDocumentPage from "@/components/legal/LegalDocumentPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Read the Terms of Use for Munchspace, outlining the rules, responsibilities, and conditions for using our fast food and grocery delivery service.",
  openGraph: {
    title: "Munchspace Terms of Use",
    description:
      "Read the Terms of Use for Munchspace, outlining the rules, responsibilities, and conditions for using our fast food and grocery delivery service.",
    type: "website",
  },
  alternates: {
    canonical: "/terms-of-use",
  },
  robots: "index, follow",
};

export default function Page() {
  return <LegalDocumentPage type="terms_of_service" heading="Terms of Use" />;
}
