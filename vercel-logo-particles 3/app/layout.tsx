import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Buf AI | Intelligent Guide to Solana's DeFi and NFT Ecosystem",
  description: "Leverage Buf AI to analyze markets, swap tokens, explore NFTs, and launch tokens seamlessly on Solana.",
  icons: {
    icon: [{ url: "/buf.png", sizes: "32x32", type: "image/png" }],
  },
    generator: 'ahmad'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'