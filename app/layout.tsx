import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://munchspace.io"), // Update if your production domain differs
  title: {
    default: "Munchspace - Fastest Food Delivery in Town",
    template: "%s | Munchspace - Quick Meals, Groceries & More",
  },
  description:
    "Get hot meals, cold drinks, groceries, and everyday items delivered in minutes with Munchspace. Smart AI-powered delivery for the fastest service when you need it most.",
  keywords: [
    "food delivery",
    "fast delivery",
    "groceries delivery",
    "meal delivery",
    "Munchspace",
  ],
  authors: [{ name: "Munchspace Team" }],
  creator: "Munchspace",
  publisher: "Munchspace",
  robots: "index, follow",
  alternates: {
    canonical: "/", // Will be inherited and adjusted per page
  },
  openGraph: {
    title: "Munchspace - Fastest Food Delivery & More",
    description:
      "Order meals, groceries, and essentials with lightning-fast AI delivery. First delivery free!",
    url: "https://munchspace.io",
    siteName: "Munchspace",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Munchspace - Fastest Food Delivery in Town",
    description:
      "Hot meals and groceries delivered in minutes with smart AI routing.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${inter.variable} antialiased bg-gray-100 overflow-x-hidden w-full max-w-450 mx-auto`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
