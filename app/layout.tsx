import type React from "react";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import "./styles/typography.css";
import "./styles/tailwind-components.css";
import localFont from "next/font/local";
// import Header from "@/components/Header";
import Filters from "@/components/Filters";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const minecraftRus = localFont({
  src: "../public/fonts/MinecraftRus-Regular.ttf",
  variable: "--font-minecraft-rus",
});

const minecraftFive = localFont({
  src: "../public/fonts/MinecraftFive-Bold.ttf",
  variable: "--font-minecraft-five",
});

const minecraftTen = localFont({
  src: "../public/fonts/MinecraftTen.ttf",
  variable: "--font-minecraft-ten",
});

const teenyTinyPixls = localFont({
  src: "../public/fonts/TeenyTinyPixls.ttf",
  variable: "--font-teeny-tiny-pixls",
});

export const metadata = {
  title: "McSkill Industrial 1.21.1",
  description: "McSkill сервер Industrial Minecraft  ",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru-RU">
      <body
        className={`${inter.className} ${minecraftRus.variable} ${minecraftFive.variable} ${minecraftTen.variable} ${teenyTinyPixls.variable} relative`}
      >
        <div className="relative min-w-full bg-grid bg-[#0f0f0f]">
          {/* <Header /> */}
          {children}
          <div className="w-full h-[170vh] min-[768px]:h-[150vh] min-[1280px]:h-[125vh] bottom-0 left-0 absolute z-[-1] gradient-bg2 opacity-20" />
          <Footer />
        </div>
        <Filters />
      </body>
    </html>
  );
}
