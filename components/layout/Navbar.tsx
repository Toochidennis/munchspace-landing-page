"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scrolling down and past initial position
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const navLinks = [
    { label: "Join as a Vendor", href: "/join-as-a-vendor" },
    { label: "Join as a Rider", href: "/join-as-a-rider" },
    { label: "About MunchSpace", href: "/about" },
  ];

  return (
    <div className="max-w-450 opacity-0 mx-auto px-3 md:px-7 lg:px-14 fixed top-0 w-full left-0 right-0 z-50 animate-slide-out delay-300">
      <header
        className={cn(
          "max-w-450 mx-auto bg-black px-6 py-7 rounded-b-2xl text-white transition-transform duration-700 ease-in-out",
          visible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-3xl font-bold">
            <Image
              src="https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767349427/logo_vw8d71.svg"
              width={300}
              height={300}
              className="w-20"
              alt="logo"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center text-sm md:text-xs lg:text-sm space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-munchorange transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a href={"/"}>
            <Button className="bg-munchorange hidden md:block h-11 hover:bg-munchprimaryDark rounded-full px-6 cursor-pointer">
              Download the app
            </Button>
          </a>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <Menu
              className={cn(
                "text-white w-7 h-7 hidden",
                !showMobileNav && "block"
              )}
              onClick={() => setShowMobileNav(true)}
            />
            <X
              className={cn(
                "text-white w-7 h-7 hidden",
                showMobileNav && "block"
              )}
              onClick={() => setShowMobileNav(false)}
            />
          </div>
        </div>

        {/* Mobile Navigation with Smooth Height Expansion */}
        <div
          className={cn(
            "overflow-hidden transition-max-height duration-700 ease-in-out",
            showMobileNav ? "max-h-96" : "max-h-0"
          )}
        >
          <div className="mt-9 flex flex-col items-end pb-1">
            {navLinks.map((link) => (
              <div className="flex flex-col items-end mt-3" key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-munchorange block transition-colors"
                >
                  {link.label}
                </a>
              </div>
            ))}
            <div className="mt-10 flex gap-5">
              <Link href="/" className="hover:scale-105">
                <Image
                  width={1000}
                  height={500}
                  src={
                    "https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767345715/appstoredownload1_yh2pkz.png"
                  }
                  alt="app store"
                  className=""
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
                  className=" "
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
