"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <div className="footer_container">
      <div className="h-100 pt-17 md:pt-15 relative flex flex-col gap-3 font-rubik justify-center items-center text-center font-bold text-3xl md:text-5xl text-white">
        <p>
          Enjoy <span className="text-munchyellow">+3000</span> food from
        </p>
        <p>
          <span className="text-munchyellow">+500</span> Restaurants
        </p>
        <Button
          className="rounded-full py-2 h-11 mt-5"
          style={{ paddingRight: "20px", paddingLeft: "20px" }}
        >
          Order Now
          <ChevronRight />
        </Button>
        <Image
          src={"/images/footer/cr.png"}
          width={300}
          height={300}
          alt="chiken republic logo"
          className="w-20 absolute left-22 top-40 hidden md:block"
        />
        <Image
          src={"/images/footer/dp.png"}
          width={300}
          height={300}
          alt="chiken republic logo"
          className="w-17 absolute left-53 top-20 hidden md:block"
        />
        <Image
          src={"/images/footer/ddp.png"}
          width={300}
          height={300}
          alt="chiken republic logo"
          className="w-12 absolute left-60 top-60 hidden md:block"
        />
        <Image
          src={"/images/footer/sr.png"}
          width={300}
          height={300}
          alt="chiken republic logo"
          className="w-15 absolute right-60 top-30 hidden md:block"
        />
        <Image
          src={"/images/footer/kfc.png"}
          width={300}
          height={300}
          alt="chiken republic logo"
          className="w-20 absolute right-30 top-20 hidden md:block"
        />
        <Image
          src={"/images/footer/bk.png"}
          width={300}
          height={300}
          alt="chiken republic logo"
          className="w-15 absolute right-35 top-55 hidden md:block"
        />
      </div>
      <footer className="bg-black text-white py-12 md:py-10 mx-5 md:mx-14 rounded-t-2xl">
        <div className="mx-auto md:px-12">
          {/* Main Footer Grid */}
          <div className="grid px-4 md:px-0 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            {/* Links of Interest */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Links of Interest</h3>
              <ul className="space-y-4">
                {[
                  "Homepage",
                  "Join as a Vendor",
                  "Join as a Rider",
                  "About MunchSpace",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-munchprimary transition-all duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div className="mt-3 md:mt-0">
              <h3 className="text-lg font-semibold mb-6">Locations</h3>
              <ul className="space-y-4">
                {["Enugu", "Abuja", "Lagos", "Jos", "Kano", "Warri"].map(
                  (city) => (
                    <li key={city}>
                      <Link
                        href="#"
                        className="hover:text-munchprimary hover:translate-x-1 transition-all duration-300"
                      >
                        {city}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Legals */}
            <div className="mt-3 md:mt-0">
              <h3 className="text-lg font-semibold mb-6 ">Legals</h3>
              <ul className="space-y-4">
                {["Terms of Use", "Privacy Policy", "Compliance"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="/terms-of-use"
                        className="hover:text-munchprimary hover:translate-x-1 transition-all duration-300"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Customer Service */}
            <div className="mt-3 md:mt-0">
              <h3 className="text-lg font-semibold mb-6">Customer Service</h3>
              <div className="space-y-6 text-gray-400">
                <div>
                  <p className="mb-1">Service Hours</p>
                  <p className="text-white">Monday - Saturday 8:30AM to 8PM</p>
                </div>
                <div>
                  <p className="mb-1">Phone</p>
                  <p className="text-white">(08012378000) (0808524000)</p>
                </div>
                <div>
                  <p className="mb-1">Email</p>
                  <a
                    href="mailto:support@munchspace.com"
                    className="underline text-white hover:text-munchprimary transition-colors"
                  >
                    support@munchspace.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-gray-800 mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 ps-4 md:ps-0">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/images/logo.svg" // Replace with your actual logo path
                alt="MunchSpace Logo"
                width={250}
                height={200}
                className="w-20 md:w-30 "
              />
            </div>

            {/* Copyright */}
            <p className="text-gray-400 md:text-left">
              © 2025 <span className="text-munchprimary">MunchSpace</span> | All
              Rights Reserved
            </p>

            {/* Social Icons */}
            <div className="flex space-x-6">
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-white hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={"/icons/X.png"}
                  width={20}
                  height={20}
                  className="h-6 w-6"
                  alt="x logo"
                />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={"/icons/Instagram.png"}
                  width={20}
                  height={20}
                  className="h-6 w-6"
                  alt="IG logo"
                />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-gray-400 hover:text-white hover:scale-110 transition-transform duration-300"
              >
                {/* 07038479738 */}
                <Image
                  src={"/Youtube.png"}
                  width={20}
                  height={20}
                  className="h-6 w-6"
                  alt="YT logo"
                />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={"/icons/LinkedIn.png"}
                  width={20}
                  height={20}
                  className="h-6 w-6"
                  alt="LI logo"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
