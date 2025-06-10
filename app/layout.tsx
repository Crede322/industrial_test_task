import type React from "react"
import {Inter} from "next/font/google"
import "./globals.css"
import localFont from 'next/font/local'

const inter = Inter({subsets: ["latin"]})


const minecraftRus = localFont({
  src: '../public/fonts/MinecraftRus-Regular.ttf',
  variable: '--font-minecraft-rus'
})

const minecraftFive = localFont({
  src: '../public/fonts/MinecraftFive-Bold.ttf',
  variable: '--font-minecraft-five'
})

const minecraftTen = localFont({
  src: '../public/fonts/MinecraftTen.ttf',
  variable: '--font-minecraft-ten'
})

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru-RU">
    <body
      className={`${inter.className} ${minecraftRus.variable} ${minecraftFive.variable} ${minecraftTen.variable}`}>
    {children}
    </body>
    </html>
  )
}
