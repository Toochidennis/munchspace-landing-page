import Image from 'next/image';
import React from 'react'

const HowWeServe = () => {
  return (
    <section className="">
      <div className="relative">
        <Image
          width={100}
          height={100}
          alt="fring eggs"
          className="absolute hidden md:block"
          src={"/images/fryingeggs.png"}
        />
        <h1 className="font-rubik font-semibold text-4xl md:text-5xl text-center">
          How we <span className="text-munchprimary">Serve</span> you
        </h1>
      </div>
      <div className="grid md:grid-cols-3 mx-5 md:mx-14 mt-15 gap-15 md:gap-30">
        <div className="px-10">
          <Image
            width={500}
            height={500}
            alt="order"
            className="mx-auto"
            src={"/images/serve/order.png"}
          />
          <h3 className="font-semibold font-rubik text-center text-2xl mt-7">
            Browse & Order
          </h3>
          <p className="mt-2 text-slate-700 text-s text-center">
            Discover your favorite Restaurants/
            <br />
            restaurants, meals, groceries, and
            <br /> place your order in seconds
          </p>
        </div>
        <div className="px-10">
          <Image
            width={500}
            height={500}
            alt="order"
            className="mx-auto"
            src={"/images/serve/pack.png"}
          />
          <h3 className="font-semibold font-rubik text-center text-2xl mt-7">
            We Pick & Pack
          </h3>
          <p className="mt-2 text-slate-700 text-s text-center">
            Our trusted partners and smart <br /> system prepare your order with
            care.
          </p>
        </div>
        <div className="px-10">
          <Image
            width={500}
            height={500}
            alt="order"
            className="mx-auto"
            src={"/images/serve/deliver.png"}
          />
          <h3 className="font-semibold font-rubik text-center text-2xl mt-7">
            We Deliver to You
          </h3>
          <p className="mt-2 text-slate-700 text-s text-center">
            Riders deliver right to your door. <br /> Fresh, fast, and always on
            time.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowWeServe