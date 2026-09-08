import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Facebook, Music2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  channelValues,
  getContactDetails,
  getServiceLocations,
  type ContactChannel,
} from "@/lib/api";

/**
 * The socials the footer can render, in the order they appear. A channel the
 * admin has not published is simply absent — the row is built from what comes
 * back, not from this list.
 *
 * Four have artwork already; Facebook and TikTok fall back to a line icon at
 * the same size until artwork exists for them.
 */
const SOCIAL_CHANNELS: Array<{
  type: ContactChannel;
  label: string;
  image?: string;
  Icon?: typeof Facebook;
}> = [
  {
    type: "twitter",
    label: "X",
    image:
      "https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767349809/X1_lvz0xt.png",
  },
  {
    type: "instagram",
    label: "Instagram",
    image:
      "https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767349808/Instagram1_uieybb.png",
  },
  {
    type: "youtube",
    label: "YouTube",
    image:
      "https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767349808/YouTube1_p9aejl.png",
  },
  {
    type: "linkedin",
    label: "LinkedIn",
    image:
      "https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767349808/LinkedIn1_gixr5t.png",
  },
  { type: "facebook", label: "Facebook", Icon: Facebook },
  { type: "tiktok", label: "TikTok", Icon: Music2 },
];

export default async function Footer() {
  const [contactDetails, coverage] = await Promise.all([
    getContactDetails(),
    getServiceLocations(),
  ]);

  // Says something true about reach without naming anywhere. A partial list of
  // states read as the whole list, so someone served but unlisted would have
  // concluded we do not deliver to them — the page carries the names instead.
  const coverageSummary =
    coverage.totalStates > 0
      ? `${coverage.totalStates} ${coverage.totalStates === 1 ? "state" : "states"}` +
        (coverage.totalCountries > 1
          ? ` across ${coverage.totalCountries} countries`
          : coverage.countries[0]?.name
            ? ` in ${coverage.countries[0].name}`
            : "")
      : null;
  const phones = channelValues(contactDetails, "phone");
  const emails = channelValues(contactDetails, "email");
  const socials = SOCIAL_CHANNELS.flatMap((channel) => {
    const detail = channelValues(contactDetails, channel.type)[0];
    return detail ? [{ ...channel, href: detail.value }] : [];
  });

  return (
    <div className="footer_container">
      <div className="h-100 md:h-75 lh:h-100 pt-17 md:pt-5 lg:mt-15 relative flex flex-col gap-3 font-rubik justify-center items-center text-center font-bold text-3xl md:text-3xl lg:text-5xl text-white">
        <p>
          Enjoy <span className="text-munchyellow">+3000</span> food from
        </p>
        <p>
          <span className="text-munchyellow">+500</span> Restaurants
        </p>
        <Button
          className="rounded-full py-2 h-11 md:h-9 lg:h-11 mt-5"
          style={{ paddingRight: "20px", paddingLeft: "20px" }}
        >
          Order Now
          <ChevronRight />
        </Button>
        <Image
          src={
            "https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767349266/cr_r80vje.png"
          }
          width={300}
          height={300}
          alt="chiken republic logo"
          className="w-20 md:w-14 lg:w-20 absolute lg:left-22 md:left-8 top-40 hidden md:block"
        />
        <Image
          src={
            "https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767349272/dp_o1cf3o.png"
          }
          width={300}
          height={300}
          alt="chiken republic logo"
          className="w-17 md:w-11 lg:w-17 absolute lg:left-53 left-33 top-20 hidden md:block"
        />
        <Image
          src={
            "https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767349269/ddp_y2llt4.png"
          }
          width={300}
          height={300}
          alt="chiken republic logo"
          className="w-12 md:w-9 lg:w-12 absolute lg:left-60 left-40 top-60 hidden md:block"
        />
        <Image
          src={
            "https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767349281/sr_icnoij.png"
          }
          width={300}
          height={300}
          alt="chiken republic logo"
          className="w-15 md:w-9 lg:w-15 absolute right-40 lg:right-60 top-40 lg:top-30 hidden md:block"
        />
        <Image
          src={"/images/footer/kfc.png"}
          width={300}
          height={300}
          alt="chiken republic logo"
          className="w-20 md:w-14 lg:w-20 absolute right-20 lg:right-30 top-20 hidden md:block"
        />
        <Image
          src={
            "https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767349281/kfc_o3qdpe.png"
          }
          width={300}
          height={300}
          alt="chiken republic logo"
          className="w-15 md:w-9 lg:w-15 absolute right-22 lg:right-35 top-55 hidden md:block"
        />
      </div>
      <footer className="bg-black text-white py-12 md:py-10 mx-5 md:mx-7 lg:mx-14 rounded-t-2xl">
        <div className="mx-auto md:px-3 lg:px-12">
          {/* Main Footer Grid */}
          <div className="grid px-4 md:px-0 md:grid-cols-3 gap-8 md:gap-1 lg:gap-12 mb-12">
            {/* Links of Interest */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Links of Interest</h3>
              <ul className="space-y-4 md:text-sm lg:text-base">
                {[
                  { name: "Homepage", link: "/" },
                  { name: "Join as a Vendor", link: "/join-as-a-vendor" },
                  { name: "Join as a Rider", link: "/join-as-a-rider" },
                  { name: "Where we deliver", link: "/where-we-deliver" },
                  { name: "About MunchSpace", link: "/about" },
                  { name: "Contact Us", link: "/contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.link}
                      className="hover:text-munchorange transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                    {item.link === "/where-we-deliver" && coverageSummary && (
                      <span className="block text-gray-400 text-xs mt-1">
                        {coverageSummary}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Legals */}
            <div className="mt-3 md:mt-0">
              <h3 className="text-lg font-semibold mb-6 ">Legals</h3>
              <ul className="space-y-4 md:text-sm lg:text-base">
                {[
                  { name: "Terms of Use", link: "/terms-of-use" },
                  { name: "Privacy Policy", link: "/privacy-policy" },
                  { name: "Refund Policy", link: "/refund-policy" },
                  { name: "Compliance", link: "/compliance" },
                ].map((item) => (
                  <li key={item.link}>
                    <Link
                      href={item.link}
                      className="hover:text-munchorange hover:translate-x-1 transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div className="mt-3 md:mt-0">
              <h3 className="text-lg font-semibold mb-6">Customer Service</h3>
              <div className="space-y-6 text-gray-400 md:text-sm lg:text-base">
                {phones.length > 0 && (
                  <div>
                    <p className="mb-1">Phone</p>
                    {phones.map((phone) => (
                      <a
                        key={phone.value}
                        href={`tel:${phone.value.replace(/\s+/g, "")}`}
                        className="block text-white hover:text-munchorange transition-colors"
                      >
                        {phone.value}
                        {phone.label ? (
                          <span className="text-gray-400"> · {phone.label}</span>
                        ) : null}
                      </a>
                    ))}
                  </div>
                )}
                {emails.length > 0 && (
                  <div>
                    <p className="mb-1">Email</p>
                    {emails.map((email) => (
                      <a
                        key={email.value}
                        href={`mailto:${email.value}`}
                        className="block underline text-white hover:text-munchorange transition-colors"
                      >
                        {email.value}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-gray-800 mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 ps-4 md:ps-0">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <Image
                src="https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767349427/logo_vw8d71.svg"
                alt="MunchSpace Logo"
                width={250}
                height={200}
                className="w-20 md:w-30"
              />
            </a>

            {/* Copyright */}
            <p className="text-gray-400 md:text-left">
              © 2026 <span className="text-munchprimary">MunchSpace</span> | All
              Rights Reserved
            </p>

            {/* Social Icons */}
            {socials.length > 0 && (
              <div className="flex space-x-6">
                {socials.map((social) => (
                  <a
                    key={social.type}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white hover:scale-110 transition-transform duration-300"
                  >
                    {social.image ? (
                      <Image
                        src={social.image}
                        width={100}
                        height={100}
                        className="h-6 w-6"
                        alt={`${social.label} logo`}
                      />
                    ) : social.Icon ? (
                      <social.Icon className="h-6 w-6" />
                    ) : null}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
