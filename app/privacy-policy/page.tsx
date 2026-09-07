import type { Metadata } from "next";
import LegalDocumentPage from "@/components/legal/LegalDocumentPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Munchspace collects, uses and protects your personal information across our website, apps and delivery service.",
  openGraph: {
    title: "Munchspace Privacy Policy",
    description:
      "How Munchspace collects, uses and protects your personal information across our website, apps and delivery service.",
    type: "website",
  },
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: "index, follow",
};

export default function Page() {
  return <LegalDocumentPage type="privacy_policy" heading="Privacy Policy" />;
}
