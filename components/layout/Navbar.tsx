"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { AppLinks } from "@/lib/api";

export default function Navbar({ appLinks }: { appLinks: AppLinks }) {
  /**
   * "Download the app" is ambiguous with two apps, and a phone already knows
   * which one it needs.
   *
   * Decided on click rather than in an effect: the markup renders the same on
   * the server and the client, it still works with JavaScript disabled, and
   * there is no flash of the wrong destination. When the platform is unknown —
   * a desktop, or a store that has not been published — it falls through to the
   * section showing both, which is the only honest answer when we cannot tell.
   */
  const handleDownloadClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    const ua = navigator.userAgent;
    // Modern iPads report as Macs, distinguishable only by touch support.
    const isApple =
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isAndroid = /Android/i.test(ua);

    const store = isApple
      ? appLinks.appStore
      : isAndroid
        ? appLinks.playStore
        : null;

    if (store) {
      event.preventDefault();
      window.open(store, "_blank", "noopener,noreferrer");
    }
  };

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

  // Drives both the desktop bar and the mobile sheet. Where we deliver was
  // only reachable from the footer, which is a long way down for the question
  // someone asks first.
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Where we deliver", href: "/where-we-deliver" },
    { label: "Join as a Vendor", href: "/join-as-a-vendor" },
    { label: "Join as a Rider", href: "/join-as-a-rider" },
    { label: "About MunchSpace", href: "/about" },
    { label: "Contact Us", href: "/contact" },
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
          {/* Tighter at md than it was: six links share the bar with the logo
              and the download button, where four used to. */}
          <nav className="hidden md:flex items-center text-sm md:text-xs lg:text-sm space-x-3 lg:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-munchorange transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="/#download" onClick={handleDownloadClick}>
            <Button className="bg-munchorange hidden md:block h-11 hover:bg-munchprimaryDark rounded-full px-6 cursor-pointer">
              Download the app
            </Button>
          </Link>

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
              <Link
                href={appLinks.appStore ?? "/#download"}
                target={appLinks.appStore ? "_blank" : undefined}
                rel={appLinks.appStore ? "noopener noreferrer" : undefined}
                className="hover:scale-105"
              >
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
              <Link
                href={appLinks.playStore ?? "/#download"}
                target={appLinks.playStore ? "_blank" : undefined}
                rel={appLinks.playStore ? "noopener noreferrer" : undefined}
                className="hover:scale-105"
              >
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
