import type { Metadata } from "next";
import LegalDocumentPage from "@/components/legal/LegalDocumentPage";

export const metadata: Metadata = {
  title: "Compliance",
  description:
    "How Munchspace meets its regulatory obligations around data protection, payments and food safety.",
  openGraph: {
    title: "Munchspace Compliance",
    description:
      "How Munchspace meets its regulatory obligations around data protection, payments and food safety.",
    type: "website",
  },
  alternates: {
    canonical: "/compliance",
  },
  robots: "index, follow",
};

export default function Page() {
  return <LegalDocumentPage type="compliance" heading="Compliance" />;
}
