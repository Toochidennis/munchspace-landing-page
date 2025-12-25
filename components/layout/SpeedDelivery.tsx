import Image from 'next/image';
import React from 'react'

const SpeedDelivery = () => {
  return (
    <section
      id="fastest_delivery"
      className="pt-40 pb-10 md:py-0 md:h-110 my-30 grid md:grid-cols-3 bg-cover md:bg-contain md:bg-repeat"
    >
      <div className="px-5 md:px-0 text-white md:flex md:ms-20 items-center relative">
        <div className="md:absolute">
          <h1 className="text-3xl md:text-[2.5rem] font-semibold font-rubik">
            The Fastest <br />{" "}
            <span className="md:whitespace-">
              <span className="text-munchprimary">Food Delivery</span> in town
            </span>
          </h1>
          <p className="mt-3">
            Hot meals, cold drinks, and everything in{" "}
            <br className="md:hidden" /> between, delivered in minutes.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center order-3 md:order-2 overflow-hidden md:-mt-14">
        <div>
          <Image
            src={"/images/fastest-delivery/deliveryguy4.png"}
            width={1000}
            height={1400}
            alt="delivery guy"
            className="-top-10 min-h-115 md:w-full max-w-120 block mx-auto -bottom-10  md:ms-0"
          />
        </div>
      </div>
      <div className="px-5 md:px-0 my-10 md:mt-0 text-white order-2 md:order-3 flex items-center">
        <div className="space-y-6">
          <div className="flex gap-5 items-center">
            <Image
              src={"/images/fastest-delivery/AI1.png"}
              width={200}
              height={200}
              alt="robot"
              className="w-12 h-12"
            />
            <div>
              <h1 className="font-medium font-rubik text-xl">
                Smart AI Delivery
              </h1>
              <p className="text-slate-300 text-sm">
                Faster routes. Smarter timing. <br /> Always on time.
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <Image
              src={"/images/fastest-delivery/bag1.png"}
              width={200}
              height={200}
              alt="robot"
              className="w-12 h-12"
            />
            <div>
              <h1 className="font-medium font-rubik">All-in-One Delivery</h1>
              <p className="text-slate-300 text-sm">
                Your everyday delivery from <br /> meals to markets, we bring it
                all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpeedDelivery