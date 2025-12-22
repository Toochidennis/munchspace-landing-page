"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16 mx-5 md:mx-14 rounded-t-2xl">
      <div className="mx-auto md:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
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
          <div>
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
          <div>
            <h3 className="text-lg font-semibold mb-6 ">Legals</h3>
            <ul className="space-y-4">
              {["Terms of Use", "Privacy Policy", "Compliance"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-munchprimary hover:translate-x-1 transition-all duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-300">
              Customer Service
            </h3>
            <div className="space-y-6 text-gray-400">
              <div>
                <p className="font-medium mb-1">Service Hours</p>
                <p className="text-white">Monday - Saturday 8:30AM to 8PM</p>
              </div>
              <div>
                <p className="font-medium mb-1">Phone</p>
                <p className="text-white">(08012378000) (0808524000)</p>
              </div>
              <div>
                <p className="font-medium mb-1">Email</p>
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
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo.svg" // Replace with your actual logo path
              alt="MunchSpace Logo"
              width={250}
              height={200}
              className="w-20 md:w-40"
            />
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-center md:text-left">
            © 2025 MunchSpace | All Rights Reserved
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white hover:scale-110 transition-transform duration-300"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white hover:scale-110 transition-transform duration-300"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-gray-400 hover:text-white hover:scale-110 transition-transform duration-300"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white hover:scale-110 transition-transform duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
