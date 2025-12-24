"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const phoneScreenImages = [
  "https://thumbs.dreamstime.com/b/smiling-truck-driver-man-thumbs-up-satisfied-service-transport-professional-delivery-worker-transportation-business-238182899.jpg", // Thumbs up driver
  "https://thumbs.dreamstime.com/b/red-semi-truck-driving-highway-sunset-beautiful-sky-background-scenic-view-showcasing-open-road-330724989.jpg", // Scenic highway sunset
  "https://as2.ftcdn.net/jpg/05/09/48/65/1000_F_509486562_HpkG19kRDlPpz4LO8sHhzJPwHNAEfM8N.jpg", // Happy female driver in cabin
  "https://media.istockphoto.com/id/1205610404/photo/portrait-of-professional-truck-driver-showing-thumbs-up-and-smiling-truck-vehicle-in.jpg?s=612x612&w=0&k=20&c=lpSWnk7wj4Kf8h1KPLJiJr6mC8mitMIzy76RtbH7fjE=", // Professional thumbs up
];

const slides = [
  {
    title: "Unlock your full potential",
    text: "Build independence, gain financial freedom, and unlock opportunities designed to help you thrive, on and off the road.",
  },
  {
    title: "Track your progress, earn more",
    text: "Access premium loads, better pay, and tools that put you in control of your career and earnings.",
  },
  {
    title: "Instant cash-out, no stress",
    text: "Join a network built for drivers—flexible opportunities, financial tools, and support every mile of the way.",
  },
  {
    title: "You rise, we've got your back",
    text: "Join a network built for drivers—flexible opportunities, financial tools, and support every mile of the way.",
  },
];

export default function BecomeARiderPhone() {
  return (
    <section className="relative md:hidden">
      {/* Carousel viewport */}
      <div className="">
        <Carousel className="w-full">
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem
                key={index}
                className={cn("min-h-200 relative", index !== 0 && "-ms-")}
              >
                <div className="bg-black w-screen flex justify-center">
                  <div className="flex flex-col items-center justify-end bg-munchprimary w-10/12 mx-auto rounded-2xl py-12 md:py-20 self-end bottom-0 absolute">
                    {/* Phone mockup with rounded orange background shape */}
                    <div className="relative mb-8-end">
                      {/* <div className="absolute inset-0 rounded-full scale-150 -z-10" /> */}
                      <div className="relative w-64 md:w-80 aspect-9/19 max-h-110 -mt-70 rounded-3xl border-8 border-black overflow-hidden shadow-2xl">
                        <Image
                          src={phoneScreenImages[index]}
                          alt={`Slide ${index + 1} promotional image`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl font-semibold font-rubik text-white mb-4 px-4">
                      {slide.title}
                    </h1>

                    {/* Description */}
                    <p className="text-base md:text-lg text-white/90 mb-8 max-w-md px-4">
                      {/* {slide.text} */}
                    </p>

                    {/* CTA Button */}
                    <button className="bg-white text-munchprimary px-6 py-3 rounded-xl font-semibold text-base md:text-lg hover:bg-gray-100 transition flex items-center gap-2 shadow-lg">
                      Join the Prime Network
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </section>
  );
}
