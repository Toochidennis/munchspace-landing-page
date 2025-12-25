import BecomeARiderCarousel from "@/components/layout/BecomeARiderCarousel";
import HowWeServe from "@/components/layout/HowWeServe";
import PromotionBanner from "@/components/layout/PromotionBanner";
import SpeedDelivery from "@/components/layout/SpeedDelivery";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen mt-40 md:mt-23">
      <section className="md:flex justify-between mx-3 md:mx-14 md:min-h-160 mb-20 md:mb-0 items-center animate-slide-in delay-300">
        <div className="basis-3/4">
          <h1 className="text-5xl/15 md:text-7xl/23 font-bold font-rubik">
            Not Just <span className="text-munchprimary">Orders,</span> <br />{" "}
            <span className="text-munchprimary">We Deliver</span> Experiences
          </h1>
          <p className="mt-3 mb-2 text-gray-600">
            MunchSpace connects people to what they love — food, essentials,{" "}
            <br className="hidden md:inline" /> and lifestyle services — with
            speed, care, and a human touch.
          </p>
          <Button
            // href={"join-prime-network"}
            variant={"outline"}
            className="text-munchorange text-center bg-gray-100 mt-5 border-munchprimary"
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            Learn More About Us
          </Button>
        </div>
      </section>
      <section>
        <div className="bg-munchorange min-h-100 mx-3 md:mx-14 rounded-3xl md:px-12 md:grid grid-cols-3">
          <div className="px-14">
            <div className="bg-munchprimaryDark min-h-75 max-w-60 mx-auto rounded-b-full relative">
              <Image
                src={"/images/about/pakage.png"}
                width={500}
                height={400}
                alt="pakage"
                className="absolute bottom-0"
              />
            </div>
          </div>
          <div className="text-white col-span-2 p-7 mt-4 md:mt-0 md:p-12 flex items-center">
            <div>
              <h1 className="text-4xl font-rubik font-semibold">Who We Are</h1>
              <p className="mt-5">
                MunchSpace is a modern delivery ecosystem built to move more
                than meals. We bridge restaurants, shops, pharmacies, and local
                markets with customers through intelligent logistics and a
                seamless app experience.
              </p>
              <p className="mt-3">
                We’re not just another delivery brand — we’re creating a
                lifestyle where convenience meets connection.
              </p>
              <p className="mt-3 mb-3 md:mb-0">
                From your favorite dishes to daily essentials, MunchSpace
                ensures every order feels personal, fast, and reliable.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-3 md:mx-14 my-25">
        <div className="text-center text-4xl font-rubik font-semibold">
          <h1>
            Our <span className="text-munchprimary">Core</span> Values
          </h1>
        </div>
        <div className="grid md:grid-cols-3 mt-15 gap-15 md:gap-30">
          <div className="px-10">
            <Image
              width={1000}
              height={1000}
              alt="order"
              className="mx-auto"
              src={"/images/about/11.png"}
            />
            <h3 className="font-semibold font-rubik text-center text-2xl mt-7">
              Speed with Purpose
            </h3>
            <p className="text-sm text-center my-2">
              Every second matters. We deliver faster because your time deserves
              respect.
            </p>
          </div>
          <div className="px-10">
            <Image
              width={1000}
              height={1000}
              alt="order"
              className="mx-auto"
              src={"/images/about/21.png"}
            />
            <h3 className="font-semibold font-rubik text-center text-2xl mt-7">
              Experience First
            </h3>
            <p className="text-sm text-center my-2">
              We don’t just move items; we craft moments — warm, reliable, and
              memorable.
            </p>
          </div>
          <div className="px-10">
            <Image
              width={1000}
              height={1000}
              alt="order"
              className="mx-auto"
              src={"/images/about/31.png"}
            />
            <h3 className="font-semibold font-rubik text-center whitespace-nowrap text-2xl mt-7">
              Empowerment for All
            </h3>
            <p className="text-sm text-center my-2">
              From vendors to delivery agents, we build tools that let everyone
              grow and earn more.
            </p>
          </div>
        </div>
      </div>
      <SpeedDelivery />
      <HowWeServe />
      <PromotionBanner />
    </div>
  );
};

export default About;
