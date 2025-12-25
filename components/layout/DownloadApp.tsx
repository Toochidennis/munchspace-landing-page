import Image from "next/image";
import Link from "next/link";
import React from "react";

const DownloadApp = () => {
  return (
    <>
      <div className="my-20 hidden md:block relative" id="promotion">
        <div className="flex items-center justify-center w-full absolute h-full">
          <div className="text-white mt-15">
            <h1 className="font-rubik font-bold text-5xl">
              Download our app <br /> and start ordering.
            </h1>
            <div className="mt-7 flex gap-5">
              <Link href="/" className="hover:scale-105">
                <Image
                  width={1000}
                  height={500}
                  src={"/images/appstoredownload1.png"}
                  alt="app store"
                  className="w-35"
                />
              </Link>
              <Link href="/" className="hover:scale-105">
                <Image
                  width={1000}
                  height={500}
                  src={"/images/playstoredownload1.png"}
                  alt="app store"
                  className="w-35"
                />
              </Link>
            </div>
          </div>
        </div>
        <Image
          src={"/images/downloadapp.png"}
          width={2000}
          height={1500}
          className="w-full px-5 md:px-14"
          alt="download app"
        />
      </div>
      <div className="md:hidden mx-3">
        <Image
          src={"/images/iphone131.png"}
          width={1000}
          height={1500}
          alt="iphone 13"
          className="w-2/3 mx-auto -mb-54"
        />
        <div className="bg-munchorange w-full rounded-4xl p-5 pt-60">
          <h1 className="font-bold text-3xl text-white font-rubik text-center">
            Download our app <br /> <span className="whitespace-nowrap">and start ordering.</span>
          </h1>
          <div className="mt-7 flex gap-2 mb-5">
            <Link href="/" className="hover:scale-105">
              <Image
                width={1000}
                height={500}
                src={"/images/appstoredownload1.png"}
                alt="app store"
                className="w-35"
              />
            </Link>
            <Link href="/" className="hover:scale-105">
              <Image
                width={1000}
                height={500}
                src={"/images/playstoredownload1.png"}
                alt="app store"
                className="w-35"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadApp;
