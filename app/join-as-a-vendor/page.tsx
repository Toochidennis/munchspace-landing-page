import BecomeARiderCarousel from "@/components/layout/BecomeARiderCarousel";
import BecomeAVendorCarousel from "@/components/layout/BecomeAVendorCarousel";
import HowWeServe from "@/components/layout/HowWeServe";
import PromotionBanner from "@/components/layout/PromotionBanner";
import SpeedDelivery from "@/components/layout/SpeedDelivery";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join as a Vendor | Partner with Munchspace",
  description:
    "Grow your restaurant or store with Munchspace. Join as a vendor to reach more customers with our lightning-fast AI-optimized delivery service. Easy onboarding and increased orders.",
  keywords: [
    "join as vendor",
    "restaurant partner",
    "food delivery partner",
    "become Munchspace vendor",
    "partner with Munchspace",
  ],
  openGraph: {
    title: "Become a Munchspace Vendor - Boost Your Sales with Fast Delivery",
    description:
      "Partner with Munchspace for seamless integrations and rapid deliveries powered by smart AI routing.",
    type: "website",
  },
  alternates: {
    canonical: "/join-as-a-vendor",
  },
  robots: "index, follow",
};

const JoinAsAVendor = () => {
  return (
    <div className="relative overflow-hidden py-16 md:py-24 md:pb-9 mt-30 md:mt-10">
      {/* Subtle decorative circles */}
      <div className="absolute top-10 md:top-40 -left-20 md:left-5 w-40 h-40 bg-[#FBE8D9] rounded-full opacity-50 animate-slide-in"></div>
      <Image
        src="/images/vendor/vendor2.png"
        alt="Happy customer enjoying pizza delivery"
        width={450}
        height={500}
        className="w-40 right-0 top-10 absolute md:hidden"
      />
      <section className="md:flex justify-between md:min-h-90 lg:min-h-160 mb-70 md:mb-0 items-center animate-slide-in delay-300">
        <div className="basis-3/5 lg:basis-2/4 mx-3 md:mx-7 lg:mx-14">
          <h1 className="text-5xl/15 md:text-5xl/15 lg:text-7xl/22 font-bold font-rubik">
            <span className="text-munchprimary">Elevate</span> Your Food{" "}
            <span className="text-munchprimary">Business</span>
          </h1>
          <p className="mt-5 text-sm">
            Join top restaurants growing with MunchSpace. Reach more customers,
            increase your sales, and build a brand that stands out.
          </p>
          <div className="flex gap-5 mt-7">
            <Button
              // href={"join-prime-network"}
              className="text-white bg-munchorange text-center border-munchorange rounded-xl border"
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            >
              <span>Join as a vendor</span>
              <ArrowRight />
            </Button>
            <Button
              variant={"outline"}
              className="border-munchorange text-center text-munchorange rounded-xl"
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            >
              Login
            </Button>
          </div>
        </div>
        <div className="basis-2/5 lg:basis-2/4 hidden md:flex justify-end items-end self-end -mb-10">
          <Image
            src={"/images/vendor/vendor1.png"}
            width={900}
            height={800}
            className="block absolute max-w-50 lg:max-w-160"
            alt="chef"
          />
        </div>
      </section>
      <BecomeAVendorCarousel />
      <div className="my-20 bg-gray- relative">
        <div className="mx-3 md:mx-7 lg:mx-14 md:flex justify-between items-center">
          <h1 className="font-rubik text-4xl md:text-2xl lg:text-4xl font-semibold">
            Join as a Vendor in <br /> 3 simple steps
          </h1>
          <p className="mt-5 md:mt-0">
            Take charge of your business, reach more customers,
            <br className="hidden md:inline" /> and grow your sales with
            MunchSpace.
          </p>
          <div className="h-40 w-40 absolute rounded-full bg-[#FFF1C6] -right-25 -top-13 -z-10 hidden md:block"></div>
          <Image
            src={"/images/join/road.png"}
            width={400}
            height={400}
            className="block absolute w-30 right-0 mt-10 hidden md:block"
            alt="chef"
          />
        </div>
        <div className="grid md:grid-cols-3 mt-15 gap-15 md:gap-5 lg:gap-30">
          <div className="px-10 md:px-3 lg:px-10">
            <Image
              width={1000}
              height={1000}
              alt="order"
              className="mx-auto"
              src={"/images/join/11.png"}
            />
            <h3 className="font-semibold font-rubik text-center text-2xl md:text-xl lg:text-2xl mt-7">
              Register in minutes
            </h3>
            <p className="mt-2 text-slate-700 md:text-sm lg:text-base text-center">
              Create your account in minutes. Upload your valid ID and basic
              details.
            </p>
            <Link
              href={"/"}
              className="text-munchgreen font-medium font-rubik flex gap-1 items-center justify-center mt-2 text-lg md:text-base lg:text-lg"
            >
              Register Now
              <ChevronRight className="h-5 w-5" strokeWidth={3} />
            </Link>
          </div>
          <div className="px-10 md:px-3 lg:px-10">
            <Image
              width={1000}
              height={1000}
              alt="order"
              className="mx-auto"
              src={"/images/join/21.png"}
            />
            <h3 className="font-semibold font-rubik text-center text-2xl md:text-xl lg:text-2xl mt-7">
              Pharmacies Delivery
            </h3>
            <p className="mt-2 text-slate-700 md:text-sm lg:text-base text-center">
              We’ll review your info quickly and get you ready for your first
              delivery.
            </p>
            <Link
              href={"/"}
              className="text-munchgreen font-medium font-rubik flex gap-1 items-center justify-center mt-2 text-lg md:text-base lg:text-lg"
            >
              Register Now
              <ChevronRight className="h-5 w-5" strokeWidth={3} />
            </Link>
          </div>
          <div className="px-10 md:px-3 lg:px-10">
            <Image
              width={1000}
              height={1000}
              alt="order"
              className="mx-auto"
              src={"/images/join/31.png"}
            />
            <h3 className="font-semibold font-rubik text-center text-2xl md:text-xl lg:text-2xl mt-7">
              Local Markets Delivery
            </h3>
            <p className="mt-2 text-slate-700 md:text-sm lg:text-base text-center">
              Go online, accept nearby orders, and earn more with every trip.
            </p>
            <Link
              href={"/"}
              className="text-munchgreen font-medium font-rubik flex gap-1 items-center justify-center mt-2 text-lg md:text-base lg:text-lg"
            >
              Register Now
              <ChevronRight className="h-5 w-5" strokeWidth={3} />
            </Link>
          </div>
        </div>
      </div>
      <SpeedDelivery />
      <HowWeServe />
      <PromotionBanner />
    </div>
  );
};

export default JoinAsAVendor;
