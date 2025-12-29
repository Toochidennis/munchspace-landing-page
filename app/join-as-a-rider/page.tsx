import BecomeARiderCarousel from "@/components/layout/BecomeARiderCarousel";
import HowWeServe from "@/components/layout/HowWeServe";
import PromotionBanner from "@/components/layout/PromotionBanner";
import SpeedDelivery from "@/components/layout/SpeedDelivery";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const JoinAsARider = () => {
  return (
    <div className="relative overflow-hidden py-16 md:py-24 md:pb-9 mt-30 md:mt-10">
      {/* Subtle decorative circles */}
      <div className="absolute top-10 md:top-40 -left-20 md:left-5 w-40 h-40 bg-[#FBE8D9] rounded-full opacity-50 animate-slide-in"></div>
      <Image
        src="/images/rider/rider3.png"
        alt="Happy customer enjoying pizza delivery"
        width={450}
        height={500}
        className="w-50 top-10 right-0 absolute md:hidden"
      />
      <section className="md:flex justify-between mx-3 md:mx-7 lg:mx-14 md:min-h-100 lg:min-h-160 mb-70 md:mb-0 items-center animate-slide-in delay-300">
        <div className="basis-3/5 lg:basis-2/4">
          <h1 className="text-5xl/15 md:text-5xl/15 lg:text-7xl/22 font-bold font-rubik">
            Become a{" "}
            <span className="text-munchorange block md:inline">
              Prime <br className="hidden md:inline" /> Delivery{" "}
              <br className="md:hidden" />
            </span>{" "}
            Agent
          </h1>
          <Button
            // href={"join-prime-network"}
            variant={"outline"}
            className="text-munchorange text-center mt-3 bg-gray-100 border-munchprimary"
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            <span>Join the Prime Network</span>
            <ArrowRight />
          </Button>
        </div>
        <div className="basis-2/5 lg:basis-2/4 hidden md:flex justify-end items-end self-end lg:me-4 -mb-10">
          <Image
            src={"/images/rider/rider1.png"}
            width={900}
            height={800}
            className="block max-w-70 lg:max-w-120"
            alt="rider"
          />
        </div>
      </section>
      <BecomeARiderCarousel />
      <div className="my-20 bg-gray- relative">
        <div className="mx-3 md:mx-7 lg:mx-14 md:flex justify-between items-center">
          <h1 className="font-rubik text-4xl md:text-2xl lg:text-4xl font-semibold">
            Join the Prime <br /> Network in 3 Steps
          </h1>
          <p className="mt-5 md:mt-0">
            Take control of your time, grow your income, and be part
            <br className="hidden md:inline" /> of a delivery force that moves
            the city.
          </p>
          <div className="h-40 w-40 absolute rounded-full bg-[#FFF1C6] -right-25 -top-13 -z-10"></div>
          <Image
            src={"/images/join/road.png"}
            width={400}
            height={400}
            className="block absolute w-30 right-0 mt-10"
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
            <h3 className="font-semibold font-rubik text-center text-2xl mt-7">
              Register in minutes
            </h3>
            <p className="text-sm text-center my-2">
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
            <h3 className="font-semibold font-rubik text-center text-2xl mt-7">
              Pharmacies Delivery
            </h3>
            <p className="text-sm text-center my-2">
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
            <h3 className="font-semibold font-rubik text-center text-2xl mt-7">
              Local Markets Delivery
            </h3>
            <p className="text-sm text-center my-2">
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

export default JoinAsARider;
