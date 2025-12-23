import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const DeliverEverything = () => {
  return (
    <div className="mx-3 md:mx-14 my-20">
      <div className="md:flex justify-between items-center">
        <h1 className="font-rubik text-4xl font-semibold">
          Not just food, we <br /> deliver{" "}
          <span className="text-munchprimary">everything</span>
        </h1>
        <p className='mt-5 md:mt-0'>
          From favorite restaurants to local markets, MunchSpace <br className='hidden md:inline' /> delivers
          more than orders, we deliver experiences.
        </p>
      </div>
      <div className="grid md:grid-cols-3 mt-15 gap-15 md:gap-30">
        <div className="px-10">
          <Image
            width={500}
            height={500}
            alt="order"
            className="mx-auto"
            src={"/images/deliver-everything/1.png"}
          />
          <h3 className="font-semibold font-rubik text-center text-2xl mt-7">
            Restaurant & Shops Delivery
          </h3>
          <Link
            href={"/"}
            className="text-munchgreen font-medium font-rubik flex gap-1 items-center justify-center mt-2 text-lg"
          >
            Order Now
            <ChevronRight className="h-5 w-5" strokeWidth={3} />
          </Link>
        </div>
        <div className="px-10">
          <Image
            width={500}
            height={500}
            alt="order"
            className="mx-auto"
            src={"/images/deliver-everything/2.png"}
          />
          <h3 className="font-semibold font-rubik text-center text-2xl mt-7">
            Pharmacies Delivery
          </h3>
          <Link
            href={"/"}
            className="text-munchgreen font-medium font-rubik flex gap-1 items-center justify-center mt-2 text-lg"
          >
            Order Now
            <ChevronRight className="h-5 w-5" strokeWidth={3} />
          </Link>
        </div>
        <div className="px-10">
          <Image
            width={500}
            height={500}
            alt="order"
            className="mx-auto"
            src={"/images/deliver-everything/3.png"}
          />
          <h3 className="font-semibold font-rubik text-center whitespace-nowrap text-2xl mt-7">
            Local Markets Delivery
          </h3>
          <Link
            href={"/"}
            className="text-munchgreen font-medium font-rubik flex gap-1 items-center justify-center mt-2 text-lg"
          >
            Order Now
            <ChevronRight className="h-5 w-5" strokeWidth={3} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DeliverEverything