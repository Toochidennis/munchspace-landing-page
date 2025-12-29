"use client";

import { Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PromotionBanner() {
  return (
    <div className="relative">
      <Image
        width={1500}
        height={500}
        src={"/images/ellipse1.png"}
        alt="app store"
        className="absolute right-0 h-15 -mt-30 w-12"
      />
      <section className="hidden md:flex bg-munchorange font-rubik text-white mt-30 relative overflow-hidden mx-3 rounded-4xl md:mx-7 lg:mx-14 justify-end my-20">
        <div className="text-6xl md:text-3xl lg:text-6xl p-10 py-20 font-semibold px-18 md:px-7 lg:px-18 absolute left-0 h-full flex items-center">
          <div>
            <h1>
              First Delivery is{" "}
              <span className="bg-munchprimaryDark px-2 rounded-2xl rounded-tl-none">
                Free.
              </span>
            </h1>
            <h1>Download our app now.</h1>
            <div className="mt-7 flex gap-5">
              <Link href="/" className="hover:scale-105">
                <Image
                  width={1000}
                  height={500}
                  src={"/images/appstoredownload1.png"}
                  alt="app store"
                  className="w-40 h-15 md:w-27 md:h-10 lg:w-40 lg:h-15"
                />
              </Link>
              <Link href="/" className="hover:scale-105">
                <Image
                  width={1000}
                  height={500}
                  src={"/images/playstoredownload1.png"}
                  alt="app store"
                  className="w-40 h-15 md:w-27 md:h-10 lg:w-40 lg:h-15"
                />
              </Link>
            </div>
            <Link
              href="/terms-of-use"
              className="font-light underline text-sm flex gap-1 items-center mt-7 w-fit"
            >
              <Info className="w-4" />
              <span>T & C apply</span>
            </Link>
          </div>
        </div>
        <div className="basis-3/5">
          <Image
            src={"/images/promotion3.png"}
            width={1000}
            height={1000}
            className="h- w-full"
            alt="promotion banner"
          />
        </div>
      </section>
      <section className="bg-munchorange mx-5 md:mx-14 rounded-2xl p-0.5 my-10 text-white mt-30 md:hidden">
        <Image
          width={500}
          height={250}
          src={"/images/girlphone5.png"}
          alt="app store"
          className="mb-5 -mt-20"
        />
        <Image
          width={500}
          height={250}
          src={"/images/rectangle.png"}
          alt="app store"
          className="-mt-15"
        />
        <div className="p-5">
          <h1 className="text-[1.6rem] font-semibold font-rubik">
            First Delivery is{" "}
            <span className="bg-munchprimaryDark px-2 rounded-2xl rounded-tl-none">
              Free.
            </span>
          </h1>
          <h1 className="text-[1.6rem] font-semibold font-rubik whitespace-nowrap">
            Download our app now.
          </h1>
          <div className="mt-7 flex gap-5">
            <Link href="/" className="hover:scale-105">
              <Image
                width={1000}
                height={500}
                src={"/images/appstoredownload1.png"}
                alt="app store"
                className="w-30"
              />
            </Link>
            <Link href="/" className="hover:scale-105">
              <Image
                width={1000}
                height={500}
                src={"/images/playstoredownload1.png"}
                alt="app store"
                className="w-30"
              />
            </Link>
          </div>
          <Link
            href="/terms-and-condition"
            className="font-light underline text-sm flex gap-1 items-center mt-7 w-fit"
          >
            <Info className="w-4" />
            <span>T & C apply</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
