"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import BecomeARiderPhone from "./BecomeARiderPhone";
import BecomeAVendorPhone from "./BecomeAVendorPhone";

const phoneScreenImages = [
  "https://media.istockphoto.com/id/1362912892/photo/smiling-truck-driver-man-thumbs-up-satisfied-service-transport.jpg?s=612x612&w=0&k=20&c=C1XL2SDKFXhaH5na-G9wbgSmFU6J8T-L9wwPtJXIGY8=",
  "https://media.istockphoto.com/id/1362912892/photo/smiling-truck-driver-man-thumbs-up-satisfied-service-transport.jpg?s=612x612&w=0&k=20&c=C1XL2SDKFXhaH5na-G9wbgSmFU6J8T-L9wwPtJXIGY8=",
  "https://media.istockphoto.com/id/1362912892/photo/smiling-truck-driver-man-thumbs-up-satisfied-service-transport.jpg?s=612x612&w=0&k=20&c=C1XL2SDKFXhaH5na-G9wbgSmFU6J8T-L9wwPtJXIGY8=",
  "https://media.istockphoto.com/id/1362912892/photo/smiling-truck-driver-man-thumbs-up-satisfied-service-transport.jpg?s=612x612&w=0&k=20&c=C1XL2SDKFXhaH5na-G9wbgSmFU6J8T-L9wwPtJXIGY8=",
];

export default function BecomeARiderCarousel() {
  const [phoneEmblaRef, phoneEmblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);

  const [textEmblaRef, textEmblaApi] = useEmblaCarousel({ loop: true });

  const [selectedIndex, setSelectedIndex] = useState(0);

  // Synchronize text carousel with phone carousel
  useEffect(() => {
    if (!phoneEmblaApi || !textEmblaApi) return;

    const syncCarousels = (mainApi: any, secondaryApi: any) => {
      const selectedIndex = mainApi.selectedScrollSnap();
      secondaryApi.scrollTo(selectedIndex);
    };

    phoneEmblaApi
      .on("select", () => syncCarousels(phoneEmblaApi, textEmblaApi))
      .on("reInit", () => syncCarousels(phoneEmblaApi, textEmblaApi));

    textEmblaApi
      .on("select", () => syncCarousels(textEmblaApi, phoneEmblaApi))
      .on("reInit", () => syncCarousels(textEmblaApi, phoneEmblaApi));

    // Initial sync
    syncCarousels(phoneEmblaApi, textEmblaApi);

    return () => {
      phoneEmblaApi
        .off("select", () => syncCarousels(phoneEmblaApi, textEmblaApi))
        .off("reInit", () => syncCarousels(phoneEmblaApi, textEmblaApi));
      textEmblaApi
        .off("select", () => syncCarousels(textEmblaApi, phoneEmblaApi))
        .off("reInit", () => syncCarousels(textEmblaApi, phoneEmblaApi));
    };
  }, [phoneEmblaApi, textEmblaApi]);

  // Track selected slide for pagination
  useEffect(() => {
    if (!phoneEmblaApi) return;

    const onSelect = () => setSelectedIndex(phoneEmblaApi.selectedScrollSnap());

    onSelect(); // Initial
    phoneEmblaApi.on("select", onSelect).on("reInit", onSelect);

    return () => {
      phoneEmblaApi.off("select", onSelect);
      phoneEmblaApi.off("reInit", onSelect);
    };
  }, [phoneEmblaApi]);

  // Scroll to specific slide on dot click
  const scrollTo = useCallback(
    (index: number) => {
      phoneEmblaApi?.scrollTo(index);
      textEmblaApi?.scrollTo(index);
    },
    [phoneEmblaApi, textEmblaApi]
  );

  const slideCount = phoneScreenImages.length;

  return (
    <div className="px-3 md:px-7 lg:px-14">
      <Image
        width={1500}
        height={500}
        src={"/images/ellipse2.png"}
        alt="app store"
        className="absolute right-0 h-15 -mt-20 w-12 hidden md:block"
      />
      <section className="relative hidden md:block bg-munchorange  rounded-4xl">
        <div className="mx-auto">
          <div className="md:flex gap-20 md:gap-6 lg:gap-20 items-center">
            {/* Fixed phone mockup */}
            <div className="relative flex">
              <Image
                src={"/icons/Crown.png"}
                alt="Crown"
                width={200}
                height={200}
                className="object-contain w-23 -right-16 -top-44 absolute"
              />
              <div className="relative w-4/6 mx-auto md:ms-7 lg:ms-20 md:w-50 lg:w-80 max-h-150 aspect-5/9 lg:aspect-9/19 rounded-4xl mb-15 -mt-50 md:-mt-25 bg-gray-200 border-5 md:border-8 border-black overflow-hidden">
                {/* Carousel for phone screen images */}
                <div
                  className="absolute inset-0 rounded-2xl overflow-hidden"
                  ref={phoneEmblaRef}
                >
                  <div className="flex h-full">
                    {phoneScreenImages.map((src, index) => (
                      <div
                        key={index}
                        className="relative flex-none w-full h-full min-w-0"
                      >
                        <Image
                          src={src}
                          alt={`Promotional truck driving scene ${index + 1}`}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Text carousel */}
            <div className="md:text-left text-white overflow-x-hidden w-full">
              <div
                className="overflow-hidden pb-18 md:pt-5 lg:py-0"
                ref={textEmblaRef}
              >
                <div className="flex">
                  {/* Slide 1 */}
                  <div className="flex-none w-full min-w-0 px-4">
                    <h1 className="text-3xl md:text-4xl/14 lg:text-6xl/20 font-semibold mb-6 md:mb-3 lg:mb-6 font-rubik">
                      Unlock your full
                      <br />
                      potential
                    </h1>
                    <p className="lg:text-xl mb-8 md:mb-3 lg:mb-8 opacity-90">
                      Build independence, gain financial freedom, and unlock
                      <br />
                      opportunities designed to help you thrive, on and off the
                      road.
                    </p>
                    <button className="text-munchorange bg-white px-5 lg:px-8 py-2.5 lg:py-4 rounded-xl font-semibold text-lg md:text-base lg:text-lg hover:bg-gray-100 transition flex items-center gap-2">
                      Join the Prime Network{" "}
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Slide 2 */}
                  <div className="flex-none w-full min-w-0 px-4">
                    <h1 className="text-3xl md:text-4xl/14 lg:text-6xl/20 font-semibold mb-6 md:mb-3 lg:mb-6 font-rubik">
                      Track your progress,
                      <br className="md:hidden lg:inline-block" /> {""}
                      earn more
                    </h1>
                    <p className="lg:text-xl mb-8 md:mb-3 lg:mb-8 opacity-90">
                      Access premium loads, better pay, and tools that put you
                      in control
                      <br className="md:hidden lg:inline-block" />
                      of your career and earnings.
                    </p>
                    <button className="text-munchorange bg-white px-5 lg:px-8 py-2.5 lg:py-4 rounded-xl font-semibold text-lg md:text-base lg:text-lg hover:bg-gray-100 transition flex items-center gap-2">
                      Join the Prime Network{" "}
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Slide 3 */}
                  <div className="flex-none w-full min-w-0 px-4">
                    <h1 className="text-3xl md:text-4xl/14 lg:text-6xl/20 font-semibold mb-6 md:mb-3 lg:mb-6 font-rubik">
                      Instant cash-out,
                      <br />
                      no stress
                    </h1>
                    <p className="lg:text-xl mb-8 md:mb-3 lg:mb-8 opacity-90">
                      Join a network built for drivers—flexible opportunities,{" "}
                      <br className="md:hidden lg:inline-block" />
                      financial tools, and support every mile of the way.
                    </p>
                    <button className="text-munchorange bg-white px-5 lg:px-8 py-2.5 lg:py-4 rounded-xl font-semibold text-lg md:text-base lg:text-lg hover:bg-gray-100 transition flex items-center gap-2">
                      Join the Prime Network{" "}
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Slide 4 - Newly added */}
                  <div className="flex-none w-full min-w-0 px-4">
                    <h1 className="text-3xl md:text-4xl/14 lg:text-6xl/20 font-semibold mb-6 md:mb-3 lg:mb-6 font-rubik">
                      You rise, we've got
                      <br className="md:hidden lg:inline-block" /> your back
                    </h1>
                    <p className="lg:text-xl mb-8 md:mb-3 lg:mb-8 opacity-90">
                      Join a network built for drivers—flexible opportunities,{" "}
                      <br className="md:hidden lg:inline-block" />
                      financial tools, and support every mile of the way.
                    </p>
                    <button className="text-munchorange bg-white px-5 lg:px-8 py-2.5 lg:py-4 rounded-xl font-semibold text-lg md:text-base lg:text-lg hover:bg-gray-100 transition flex items-center gap-2">
                      Join the Prime Network{" "}
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="absolute bottom-8 pe-4 md:pe-0 right-1 md:-translate-x-1/2 flex gap-3">
          {Array.from({ length: slideCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-9 h-1.5 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
      <div className="md:hidden">
        <BecomeAVendorPhone />
      </div>
    </div>
  );
}
