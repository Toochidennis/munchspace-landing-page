import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getServiceLocations } from "@/lib/api";

export const metadata: Metadata = {
  title: "Where We Deliver",
  description:
    "The states Munchspace delivers to, country by country. Check whether we reach you before you order.",
  keywords: [
    "Munchspace delivery areas",
    "food delivery locations Nigeria",
    "where does Munchspace deliver",
  ],
  openGraph: {
    title: "Where Munchspace Delivers",
    description:
      "The states Munchspace delivers to, country by country.",
    type: "website",
  },
  alternates: {
    canonical: "/where-we-deliver",
  },
  robots: "index, follow",
};

/**
 * Every place we deliver, in full.
 *
 * The footer used to carry a truncated version of this list, which was worse
 * than carrying none: a served state that fell outside the first few read as
 * unserved. This page is the complete answer, and the footer points at it.
 *
 * Built from the delivery settings an admin maintains, so it cannot name
 * anywhere delivery is not actually priced.
 */
export default async function Page() {
  const { countries, totalCountries, totalStates } =
    await getServiceLocations();

  const named = countries.filter((country) => country.name);

  return (
    <div>
      <section className="relative min-h-70 md:min-h-90 overflow-hidden bg-reddamask pt-43 px-3 md:px-14">
        {/* The soft shapes the rest of the site uses to break up a flat block. */}
        <div className="pointer-events-none absolute -right-16 top-20 h-56 w-56 rounded-full bg-white/40" />
        <div className="pointer-events-none absolute right-40 top-56 hidden h-24 w-24 rounded-full bg-white/30 md:block" />

        <div className="relative">
          <h1 className="font-rubik text-4xl font-bold md:text-6xl">
            WHERE WE DELIVER
          </h1>
          <p className="mt-3 max-w-xl text-gray-600 md:mt-5">
            {totalStates > 0 ? (
              <>
                We currently deliver to{" "}
                <span className="font-semibold text-munchprimary">
                  {totalStates} {totalStates === 1 ? "state" : "states"}
                </span>
                {totalCountries > 1
                  ? ` across ${totalCountries} countries`
                  : named[0]
                    ? ` in ${named[0].name}`
                    : ""}
                , and we are adding more.
              </>
            ) : (
              "We are lining up our first delivery areas."
            )}
          </p>
        </div>
      </section>

      <div className="overflow-y-hidden">
        <Image
          src="https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767351802/brush_vuufi6.png"
          width={2000}
          height={200}
          alt="brush seperator"
          className="mb-10 w-screen h-20 md:h-fit hidden md:block -mt-10"
        />
        <Image
          src="https://res.cloudinary.com/dj2ybe6v0/image/upload/q_auto/v1767351802/brushmobile1_d7wruv.png"
          width={2000}
          height={200}
          alt="brush seperator"
          className="mb-10 w-screen h-20 md:h-fit md:hidden -mt-10"
        />
      </div>

      <div className="mx-3 mb-20 md:mx-7 lg:mx-14">
        {countries.length === 0 ? (
          <div className="rounded-3xl bg-reddamask px-6 py-12 text-center md:px-12">
            <h2 className="font-rubik text-2xl font-bold md:text-3xl">
              Not delivering anywhere just yet
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-600">
              We are setting up our first delivery areas. Check back shortly, or
              tell us where you would like us to launch.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-munchprimary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-munchprimaryDark"
            >
              Get in touch
            </Link>
          </div>
        ) : (
          <div className="space-y-12">
            {countries.map((country) => (
              <section key={country.id}>
                {country.name && (
                  <div className="mb-6 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h2 className="font-rubik text-2xl font-bold md:text-3xl">
                      {country.name}
                    </h2>
                    <span className="text-sm text-gray-500">
                      {country.states.length}{" "}
                      {country.states.length === 1 ? "state" : "states"}
                    </span>
                  </div>
                )}
                <ul className="flex flex-wrap gap-3">
                  {country.states.map((state) => (
                    <li
                      key={state.id}
                      className="rounded-full bg-reddamask px-5 py-2.5 text-sm font-medium text-gray-800 md:text-base"
                    >
                      {state.name}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}

        {countries.length > 0 && (
          <div className="mt-16 rounded-3xl bg-munchorange px-6 py-10 text-white md:px-12">
            <h2 className="font-rubik text-2xl font-semibold md:text-3xl">
              Not in your area yet?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/90 md:text-base">
              We are expanding steadily. Tell us where you would like us next —
              it genuinely shapes where we go.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-munchprimary transition-opacity hover:opacity-90"
            >
              Tell us where
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
