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

  return (
    <div>
      <section className="min-h-70 md:min-h-90 bg-reddamask pt-43 px-3 md:px-14">
        <h1 className="font-rubik font-bold text-4xl md:text-6xl uppercase">
          Where we deliver
        </h1>
        {totalStates > 0 && (
          <p className="mt-3 md:mt-5 text-gray-600">
            {totalStates} {totalStates === 1 ? "state" : "states"}
            {totalCountries > 1
              ? ` across ${totalCountries} countries`
              : countries[0]
                ? ` in ${countries[0].name}`
                : ""}
            .
          </p>
        )}
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

      <div className="mx-3 md:mx-14 mb-15">
        {countries.length === 0 ? (
          <p className="text-gray-600">
            We are not delivering anywhere just yet. Please check back shortly,
            or{" "}
            <Link href="/contact" className="text-munchorange underline">
              get in touch
            </Link>
            .
          </p>
        ) : (
          <div className="space-y-10">
            {countries.map((country) => (
              <section key={country.id}>
                {country.name && (
                  <>
                    <h2 className="font-rubik font-bold text-xl md:text-2xl mb-1">
                      {country.name}
                    </h2>
                    <p className="text-sm text-gray-500 mb-5">
                      {country.states.length}{" "}
                      {country.states.length === 1 ? "state" : "states"}
                    </p>
                  </>
                )}
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3 text-sm md:text-base">
                  {country.states.map((state) => (
                    <li key={state.id} className="text-gray-800">
                      {state.name}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}

        <p className="mt-12 text-sm text-gray-500">
          Somewhere missing?{" "}
          <Link href="/contact" className="text-munchorange underline">
            Tell us where you would like us next
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
