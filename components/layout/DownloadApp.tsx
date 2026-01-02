import Image from "next/image";
import Link from "next/link";
import React from "react";

const DownloadApp = () => {
  return (
    <div>
      <Image
        width={1500}
        height={500}
        src={
          "https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767345307/ellipse2_j1t1ov.png"
        }
        alt="app store"
        className="absolute right-0 h-15 -mt-10 w-12 hidden md:block"
      />
      <div
        className="my-20 hidden md:block relative mx-3 md:mx-7 lg:mx-14"
        id="promotion"
      >
        <div className="flex items-center justify-center w-full absolute h-full">
          <div className="text-white mt-15">
            <h1 className="font-rubik font-bold text-3xl lg:text-5xl">
              Download our app <br /> and start ordering.
            </h1>
            <div className="mt-3 lg:mt-7 flex gap-5">
              <Link href="/" className="hover:scale-105">
                <Image
                  width={1000}
                  height={500}
                  src={
                    "https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767345715/appstoredownload1_yh2pkz.png"
                  }
                  alt="app store"
                  className="w-23 lg:w-35"
                />
              </Link>
              <Link href="/" className="hover:scale-105">
                <Image
                  width={1000}
                  height={500}
                  src={
                    "https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767345724/playstoredownload1_eesijh.png"
                  }
                  alt="play store"
                  className="w-23 lg:w-35"
                />
              </Link>
            </div>
          </div>
        </div>
        <Image
          src={
            "https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767348722/downloadapp_ltji6p.png"
          }
          width={2000}
          height={1500}
          className="w-full"
          alt="download app"
        />
      </div>
      <div className="md:hidden mx-3">
        <Image
          src={
            "https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767345488/iphone131_ga90uf.png"
          }
          width={1000}
          height={1500}
          alt="iphone 13"
          className="w-2/3 mx-auto -mb-54"
        />
        <div className="bg-munchorange w-full rounded-4xl p-5 pt-60">
          <h1 className="font-bold text-3xl text-white font-rubik text-center">
            Download our app <br />{" "}
            <span className="whitespace-nowrap">and start ordering.</span>
          </h1>
          <div className="mt-7 flex gap-2 mb-5 mx-auto justify-center">
            <Link href="/" className="hover:scale-105">
              <Image
                width={1000}
                height={500}
                src={
                  "https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767345715/appstoredownload1_yh2pkz.png"
                }
                alt="app store"
                className="w-35"
              />
            </Link>
            <Link href="/" className="hover:scale-105">
              <Image
                width={1000}
                height={500}
                src={
                  "https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767345724/playstoredownload1_eesijh.png"
                }
                alt="play store"
                className="w-35"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
