import type { Metadata } from "next";
import LegalDocumentPage from "@/components/legal/LegalDocumentPage";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "When Munchspace issues refunds, how to request one, and how disputes over orders are resolved.",
  openGraph: {
    title: "Munchspace Refund Policy",
    description:
      "When Munchspace issues refunds, how to request one, and how disputes over orders are resolved.",
    type: "website",
  },
  alternates: {
    canonical: "/refund-policy",
  },
  robots: "index, follow",
};

export default function Page() {
  return <LegalDocumentPage type="refund_policy" heading="Refund Policy" />;
}
