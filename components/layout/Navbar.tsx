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
    { label: "Join as a Vendor", href: "#" },
    { label: "Join as a Rider", href: "#" },
    { label: "About MunchSpace", href: "#" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-black mx-3 px-6 py-7 md:mx-14 rounded-b-2xl text-white transition-transform duration-300 ease-in-out",
        visible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-bold">
          <Image
            src="/images/logo.svg"
            width={300}
            height={300}
            className="w-20"
            alt="logo"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center text-sm space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-munchprimary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button className="bg-munchprimary hidden md:block h-11 hover:munchprimaryDark rounded-full px-6">
          Download the app
        </Button>

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
      {showMobileNav && (
        <div className="mt-9 flex flex-col items-end transform transition duration-1000 ease-in-out">
          {navLinks.map((link) => (
            <div className="flex flex-col items-end mt-3 " key={link.label}>
              <Link
                href={link.href}
                className="hover:text-munchprimary block transition-colors"
              >
                {link.label}
              </Link>
            </div>
          ))}
          <Button className="bg-munchprimary h-11 mt-4 hover:munchprimaryDark rounded-full px-6">
            Download the app
          </Button>
        </div>
      )}
    </header>
  );
}
