import type React from "react";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import "./styles/typography.css";
import "./styles/tailwind-components.css";
import localFont from "next/font/local";
import Header from "@/components/Header";

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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru-RU">
      <body
        className={`${inter.className} ${minecraftRus.variable} ${minecraftFive.variable} ${minecraftTen.variable} relative`}
      >
        <div className="relative min-w-full bg-grid bg-[#0f0f0f]">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
