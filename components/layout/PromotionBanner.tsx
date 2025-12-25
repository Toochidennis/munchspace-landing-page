"use client";

import { Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PromotionBanner() {
  return (
    <>
      <section className="hidden md:flex bg-munchorange font-rubik text-white mt-30 relative overflow-hidden mx-3 rounded-4xl md:mx-14 justify-end my-20">
        <div className="text-6xl p-10 py-20 font-semibold px-18 absolute left-0 h-full flex items-center">
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
                  className="w-40 h-15"
                />
              </Link>
              <Link href="/" className="hover:scale-105">
                <Image
                  width={1000}
                  height={500}
                  src={"/images/playstoredownload1.png"}
                  alt="app store"
                  className="w-40 h-15"
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
      <section className="bg-munchorange mx-5 md:mx-14 rounded-2xl my-10 text-white p-5 mt-30 md:hidden">
        <Image
          width={500}
          height={250}
          src={"/images/girlphone.png"}
          alt="app store"
          className="mb-5 -mt-20"
        />
        <div>
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
    </>
  );
}
