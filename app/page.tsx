import DownloadApp from "@/components/layout/DownloadApp";
import HeroSection from "@/components/layout/HeroSection";
import HowWeServe from "@/components/layout/HowWeServe";
import PromotionBanner from "@/components/layout/PromotionBanner";
import DeliverEverything from "@/components/layout/DeliverEverything";
import SpeedDelivery from "@/components/layout/SpeedDelivery";
import Image from "next/image";

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
