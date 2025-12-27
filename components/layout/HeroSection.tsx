"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 md:pb-9 mt-25 md:mt-10 mx-3 md:mx-7 lg:mx-14">
      {/* Subtle decorative circles */}
      {/* <div className="absolute top-10 left-10 w-64 h-64 bg-orange-100 rounded-full opacity-50 animate-slide-in"></div>
      <div className="absolute bottom-0 right-20 w-32 h-32 bg-green-200 rounded-full opacity-40 animate-slide-in delay-200"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-yellow-100 rounded-full opacity-30 -translate-y-1/2 animate-slide-in delay-300"></div> */}

      <div className="grid md:grid-cols-3 lg:grid-cols-2 md:gap-5 lg:gap-12 items-center relative z-10">
        {/* Left: Text and Input */}
        <div className="md:text-left md:col-span-2 lg:col-span-1 animate-slide-in delay-300">
          <h1 className="text-[2.9rem]/18 md:text-[2.9rem]/14 lg:text-7xl font-bold text-gray-900 font-rubik mb-6">
            Fastest <span className="text-munchprimary">Food</span>
            <p className="md:mt-3">
              <span className="text-munchprimary">Delivery</span> & More
            </p>
          </h1>

          {/* Testimonial */}
          <div className="flex items-center gap-4 mb-8 max-w-md mx-auto md:mx-0">
            <Image
              src="https://www.shutterstock.com/image-photo/studio-close-portrait-handsome-young-260nw-2134031979.jpg"
              alt="Customer testimonial"
              width={60}
              height={60}
              className="rounded-full h-15 md:h-10 w-15 md:w-10 object-cover"
            />
            <p className="text-gray-700 md:text-xs">
              When you are too tired to <br /> cook...MunchSpace got you
              covered.
            </p>
          </div>

          {/* Address Input */}
          <div className="flex md:max-w-lg mx-auto md:mx-0 w-full items-center">
            <Input
              type="text"
              placeholder="Enter your address to explore ..."
              className="md:flex-1 bg-white border-gray-300 h-13 md:h-12 rounded-2xl"
            />
            <button className="bg-green-800 hover:bg-green-700 h-17 -ms-5 -mt-2 md:mt-0 -md:ms-10 md:h-15 rounded-2xl text-white md:rounded-xl px-4 md:w-fit">
              <span className="hidden md:inline">Explore Restaurants</span>
              <ArrowUpRight className="md:hidden h-8 w-8" />
            </button>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="relative justify-end rounded-full overflow-hidden hidden md:flex">
          {/* Curved orange line decoration */}

          <Image
            src="/images/girleating1.png"
            alt="Happy customer enjoying pizza delivery"
            width={450}
            height={500}
            className="object-cover"
            //   priority
          />
        </div>
      </div>
    </section>
  );
}
