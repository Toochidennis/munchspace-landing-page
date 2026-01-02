import Image from "next/image";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Read the Terms of Use for Munchspace, outlining the rules, responsibilities, and conditions for using our fast food and grocery delivery service.",
  openGraph: {
    title: "Munchspace Terms of Use",
    description:
      "Official terms and conditions for users, vendors, and riders.",
    type: "website",
  },
  alternates: {
    canonical: "/terms-of-use",
  },
  robots: "index, follow",
};

const TermsOfUse = () => {
  return (
    <div>
      <section className="min-h-70 md:min-h-90 bg-reddamask pt-43 px-3 md:px-14">
        <h1 className="font-rubik font-bold text-4xl md:text-6xl">
          TERMS OF USE
        </h1>
        <p className="mt-3 md:mt-5 text-gray-600">
          Last updated: November 2025
        </p>
      </section>
      <div className="overflow-y-hidden">
        <Image
          src={"/images/terms-of-use/brush.png"}
          width={2000}
          height={200}
          alt="brush seperator"
          className="mb-10 w-screen h-20 md:h-fit hidden md:block -mt-10"
        />
        <Image
          src={"/images/terms-of-use/brushmobile1.png"}
          width={2000}
          height={200}
          alt="brush seperator"
          className="mb-10 w-screen h-20 md:h-fit md:hidden -mt-10"
        />
      </div>
      <div className="mx-3 md:mx-14 text-sm mb-15">
        <p className="mb-5">
          Welcome to MunchSpace, a platform that connects customers,
          restaurants, and delivery riders. By using our website or mobile app,
          you agree to these Terms and Conditions. Please read them carefully
          before using our services.
        </p>
        <h3 className="font-bold font-rubik mb-1 mt-3 text-base">
          1. Acceptance of Terms
        </h3>
        <p>
          By accessing or using MunchSpace, you confirm that you are at least 18
          years old (or of legal age in your country) and agree to be bound by
          these Terms, our Privacy Policy, and any additional guidelines or
          rules posted within the platform. If you do not agree, you must not
          use MunchSpace.
        </p>
        <h3 className="font-bold font-rubik mb-1 mt-3 text-base">
          2. Description of Service
        </h3>
        <p>MunchSpace provides an online platform where:</p>
        <ul className="list-disc ms-6 md:ms-8">
          <li>Customers can browse, order, and pay for food.</li>
          <li>Vendors (Restaurants) can list and sell food items.</li>
          <li>Riders can accept and deliver customer orders</li>
        </ul>
        <p>
          MunchSpace acts solely as an intermediary — not as a restaurant,
          courier company, or food provider.
        </p>
        <h3 className="font-bold font-rubik mb-1 mt-3 text-base">
          3. User Accounts
        </h3>
        <p>
          To use certain features, you must create an account and provide
          accurate, current information. You agree to:
        </p>
        <ul className="list-disc ms-6 md:ms-8">
          <li>Keep your login details secure and confidential.</li>
          <li>
            Notify us immediately of any unauthorized use of your account.
          </li>
          <li>Not create multiple or fake accounts.</li>
        </ul>
        <p>
          MunchSpace reserves the right to suspend or terminate accounts that
          violate these Terms.
        </p>
        <h3 className="font-bold font-rubik mb-1 mt-3 text-base">
          4. Orders and Payments
        </h3>
        <ul className="list-disc ms-6 md:ms-8">
          <li>Orders placed on MunchSpace are binding once confirmed.</li>
          <li>
            Prices, delivery fees, and availability are determined by
            restaurants and may vary
          </li>
          <li>
            Payments are processed through approved, secure payment gateways.
          </li>
          <li>
            MunchSpace may hold payments temporarily for verification or fraud
            prevention.
          </li>
          <li>
            Refunds are subject to review and may vary based on the restaurant’s
            or delivery status.
          </li>
        </ul>
        <h3 className="font-bold font-rubik mb-1 mt-3 text-base">
          5. Vendor Obligations
        </h3>
        <p>Restaurants using MunchSpace must:</p>
        <ul className="list-disc ms-6 md:ms-8">
          <li>Comply with all health, safety, and licensing regulations.</li>
          <li>Provide accurate menu, pricing, and availability information.</li>
          <li>Fulfill orders promptly and maintain quality standards.</li>
          <li>Not engage in deceptive or misleading practices.</li>
        </ul>
        <h3 className="font-bold font-rubik mb-1 mt-3 text-base">
          6. Rider Obligations
        </h3>
        <p>Riders must:</p>
        <ul className="list-disc ms-6 md:ms-8">
          <li>Maintain valid identification and delivery credentials.</li>
          <li>
            Handle food and customer interactions respectfully and
            professionally.
          </li>
          <li>Not tamper with or consume any part of the delivery.</li>
          <li>Comply with traffic and safety laws at all times.</li>
        </ul>
        <h3 className="font-bold font-rubik mb-1 mt-3 text-base">
          7. Customer Responsibilities
        </h3>
        <p>Customers agree to:</p>
        <ul className="list-disc ms-6 md:ms-8">
          <li>Provide accurate delivery details.</li>
          <li>Be available to receive orders on time.</li>
          <li>
            Use the platform lawfully and not engage in fraudulent activity.
          </li>
        </ul>
        <h3 className="font-bold font-rubik mb-1 mt-3 text-base">
          8. Cancellations and Refunds
        </h3>
        <p>Orders may be canceled before restaurant acceptance</p>
        <p>Once accepted, cancellation may result in partial or no refunds.</p>
        <p>
          If an order is incomplete, damaged, or incorrect, customers should
          report it within 24 hours through the support channel.
        </p>
        <p>
          MunchSpace will review and resolve disputes on a case-by-case basis.
        </p>
        <h3 className="font-bold font-rubik mb-1 mt-3 text-base">
          9. Intellectual Property
        </h3>
        <p>
          All content, logos, and trademarks on MunchSpace are owned by
          MunchSpace or its partners.
        </p>
        <p>
          {" "}
          Users may not copy, modify, or distribute any part of the platform
          without written consent.
        </p>
        <h3 className="font-bold font-rubik mb-1 mt-3 text-base">
          10. Limitation of Liability
        </h3>
        <p>MunchSpace is not responsible for:</p>
        <ul className="list-disc ms-6 md:ms-8">
          <li>Food quality or safety.</li>
          <li>Delays or failures caused by vendors or riders.</li>
          <li>Damages or losses resulting from misuse of the platform.</li>
        </ul>
        <p>
          To the fullest extent permitted by law, MunchSpace’s liability is
          limited to the total amount you paid for the relevant transaction
        </p>

        <h3 className="font-bold font-rubik mb-1 mt-3 text-base">
          11. Termination
        </h3>
        <p>
          MunchSpace may suspend or terminate your access at any time for
          violations of these Terms, illegal activity, or misuse of the
          platform.
        </p>
        <h3 className="font-bold font-rubik mb-1 mt-3 text-base">
          12. Changes to Terms
        </h3>
        <p>MunchSpace may modify these Terms at any time.</p>
        <p>
          Updated versions will be posted on the platform with a revised “Last
          Updated” date. Continued use means you accept the new Terms.
        </p>
        <h3 className="font-bold font-rubik mb-1 mt-3 text-base">
          13. Governing Law
        </h3>
        <p>
          These Terms are governed by the laws of the Federal Republic of
          Nigeria, without regard to conflict of law principles.
        </p>
        <p>If you do not agree, you must not use MunchSpace.</p>
      </div>
    </div>
  );
};

export default TermsOfUse;
