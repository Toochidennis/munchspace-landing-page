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

const JoinAsAVendor = () => {
  return (
    <div className="min-h-screen mt-40 md:mt-30">
      <section className="md:flex justify-between mx-3 md:mx-14 md:min-h-160 mb-70 md:mb-0 items-center">
        <div className="basis-2/4">
          <h1 className="text-5xl/15 md:text-7xl/17 font-bold font-rubik">
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
              className="text-white bg-munchprimary text-center border-munchprimary rounded-xl border"
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            >
              <span>Join as a vendor</span>
              <ArrowRight />
            </Button>
            <Button
              variant={"outline"}
              className="border-munchprimary text-center text-munchprimary rounded-xl"
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            >
              Login
            </Button>
          </div>
        </div>
        <div className="basis-2/4 hidden md:flex justify-end items-end self-end me-4 -mb-10">
          <Image
            src={"/images/vendor/vendor.png"}
            width={900}
            height={800}
            className="block max-w-120 me-40"
            alt="rider"
          />
          <Image
            src={"/images/vendor/vendor.png"}
            width={900}
            height={800}
            className="block absolute max-w-120"
            alt="rider"
          />
        </div>
      </section>
      <BecomeAVendorCarousel />
      <div className="mx-3 md:mx-14 my-20">
        <div className="md:flex justify-between items-center">
          <h1 className="font-rubik text-4xl font-semibold">
            Join as a Vendor in <br /> 3 simple steps
          </h1>
          <p className="mt-5 md:mt-0">
            Take charge of your business, reach more customers,
            <br className="hidden md:inline" /> and grow your
            sales with MunchSpace.
          </p>
        </div>
        <div className="grid md:grid-cols-3 mt-15 gap-15 md:gap-30">
          <div className="px-10">
            <Image
              width={500}
              height={500}
              alt="order"
              className="mx-auto"
              src={"/images/join/1.png"}
            />
            <h3 className="font-semibold font-rubik text-center text-2xl mt-7">
              Register in minutes
            </h3>
            <p className="text-sm text-center my-2">
              Create your account in minutes. Upload your valid ID and basic
              details.
            </p>
            <Link
              href={"/"}
              className="text-munchgreen font-medium font-rubik flex gap-1 items-center justify-center mt-2 text-lg"
            >
              Register Now
              <ChevronRight className="h-5 w-5" strokeWidth={3} />
            </Link>
          </div>
          <div className="px-10">
            <Image
              width={500}
              height={500}
              alt="order"
              className="mx-auto"
              src={"/images/join/2.png"}
            />
            <h3 className="font-semibold font-rubik text-center text-2xl mt-7">
              Pharmacies Delivery
            </h3>
            <p className="text-sm text-center my-2">
              We’ll review your info quickly and get you ready for your first
              delivery.
            </p>
            <Link
              href={"/"}
              className="text-munchgreen font-medium font-rubik flex gap-1 items-center justify-center mt-2 text-lg"
            >
              Register Now
              <ChevronRight className="h-5 w-5" strokeWidth={3} />
            </Link>
          </div>
          <div className="px-10">
            <Image
              width={500}
              height={500}
              alt="order"
              className="mx-auto"
              src={"/images/join/3.png"}
            />
            <h3 className="font-semibold font-rubik text-center whitespace-nowrap text-2xl mt-7">
              Local Markets Delivery
            </h3>
            <p className="text-sm text-center my-2">
              Go online, accept nearby orders, and earn more with every trip.
            </p>
            <Link
              href={"/"}
              className="text-munchgreen font-medium font-rubik flex gap-1 items-center justify-center mt-2 text-lg"
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
