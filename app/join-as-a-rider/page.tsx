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
    <div className="min-h-screen mt-40 md:mt-30">
      <section className="md:flex justify-between mx-3 md:mx-14 md:min-h-160 mb-70 md:mb-0 items-center">
        <div className="text-5xl/15 md:text-7xl/17 font-bold font-rubik basis-2/4">
          <h1>
            Become a{" "}
            <span className="text-munchprimary block md:inline">
              Prime <br className="hidden md:inline" /> Delivery <br className="md:hidden" />
            </span>{" "}
            Agent
          </h1>
          <Button
            // href={"join-prime-network"}
            variant={"outline"}
            className="text-munchprimary text-center bg-gray-100 border-munchprimary"
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            <span>Join the Prime Network</span>
            <ArrowRight />
          </Button>
        </div>
        <div className="basis-2/4 hidden md:flex justify-end items-end self-end me-4 -mb-10">
          <Image
            src={"/images/rider/rider1.png"}
            width={900}
            height={800}
            className="block max-w-120"
            alt="rider"
          />
        </div>
      </section>
      <BecomeARiderCarousel />
      <div className="mx-3 md:mx-14 my-20">
        <div className="md:flex justify-between items-center">
          <h1 className="font-rubik text-4xl font-semibold">
            Join the Prime <br /> Network in 3 Steps
          </h1>
          <p className="mt-5 md:mt-0">
            Take control of your time, grow your income, and be part
            <br className="hidden md:inline" /> of a delivery force that moves
            the city.
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

export default JoinAsARider;
