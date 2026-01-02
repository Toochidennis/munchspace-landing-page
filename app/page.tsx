import DownloadApp from "@/components/layout/DownloadApp";
import HeroSection from "@/components/layout/HeroSection";
import HowWeServe from "@/components/layout/HowWeServe";
import PromotionBanner from "@/components/layout/PromotionBanner";
import DeliverEverything from "@/components/layout/DeliverEverything";
import SpeedDelivery from "@/components/layout/SpeedDelivery";
import type { Metadata } from "next";
import Image from "next/image";

  export const metadata: Metadata = {
    title: "Home | Munchspace - Quick Meals, Groceries & More",
    description:
      "Discover the fastest food delivery service. Order now and enjoy free first delivery.",
    openGraph: {
      type: "website",
    },
};
  
export default function Home() {

  return (
    <div className="">
      <HeroSection />
      <DownloadApp />
      <DeliverEverything />
      <SpeedDelivery />
      <HowWeServe />
      <PromotionBanner />
    </div>
  );
}
