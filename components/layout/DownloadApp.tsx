import Image from "next/image";
import Link from "next/link";
import React from "react";

const DownloadApp = () => {
  return (
    <>
      <div className="my-20 hidden md:block" id="promotion">
        <div className="flex items-center justify-center w-full absolute h-full">
          <div className="text-white">
            <h1 className="font-rubik font-bold text-5xl">
              Download our app <br /> and start ordering.
            </h1>
            <div className="mt-7 flex gap-5">
              <Link href="/" className="hover:scale-105">
                <Image
                  width={500}
                  height={250}
                  src={"/images/appstoredownload.png"}
                  alt="app store"
                  className="w-35"
                />
              </Link>
              <Link href="/" className="hover:scale-105">
                <Image
                  width={500}
                  height={250}
                  src={"/images/playstoredownload.png"}
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
      <div className="md:hidden mx-5">
        <Image
          src={"/images/iphone13.png"}
          width={700}
          height={500}
          alt="iphone 13"
          className="w-2/3 mx-auto -mb-54"
        />
        <div className="bg-munchprimary w-full rounded-4xl p-5 pt-60">
          <h1 className="font-bold text-4xl text-white font-rubik text-center">
            Download our app <br /> <span className="whitespace-nowrap">and start ordering.</span>
          </h1>
          <div className="mt-7 flex gap-2 mb-5">
            <Link href="/" className="hover:scale-105">
              <Image
                width={500}
                height={250}
                src={"/images/appstoredownload.png"}
                alt="app store"
                className="w-40"
              />
            </Link>
            <Link href="/" className="hover:scale-105">
              <Image
                width={500}
                height={250}
                src={"/images/playstoredownload.png"}
                alt="app store"
                className="w-40"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadApp;
