"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const features = [
  {
    title: "Market Analysis",
    description: "Monitor trending tokens on DEX Screener and stay ahead in the market.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
    animation: (
      <div className="relative h-32 w-full overflow-hidden rounded-lg bg-card/50">
        <div className="absolute bottom-0 left-0 h-16 w-2 bg-primary/30 animate-chart-bar-1"></div>
        <div className="absolute bottom-0 left-8 h-24 w-2 bg-primary/50 animate-chart-bar-2"></div>
        <div className="absolute bottom-0 left-16 h-12 w-2 bg-primary/40 animate-chart-bar-3"></div>
        <div className="absolute bottom-0 left-24 h-20 w-2 bg-primary/60 animate-chart-bar-4"></div>
        <div className="absolute bottom-0 left-32 h-28 w-2 bg-primary animate-chart-bar-5"></div>
      </div>
    ),
  },
  {
    title: "Token Swaps",
    description: "Execute swift and efficient token swaps on Solana-based decentralized exchanges.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="m17 4 3 3-3 3" />
        <path d="M6 7h14" />
        <path d="m7 20-3-3 3-3" />
        <path d="M18 17H4" />
      </svg>
    ),
    animation: (
      <div className="relative h-32 w-full overflow-hidden rounded-lg bg-card/50 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center relative">
          <span className="text-primary font-bold">SOL</span>
          <div className="absolute w-full h-full border-2 border-primary/50 rounded-full animate-ping"></div>
        </div>
        <div className="w-16 animate-swap-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
        <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center relative">
          <span className="text-secondary font-bold">USDC</span>
        </div>
      </div>
    ),
  },
  {
    title: "NFT Insights",
    description: "Track trending NFTs on Magic Eden to identify opportunities in digital collectibles.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="M2 12h20" />
        <path d="M6 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M18 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
      </svg>
    ),
    animation: (
      <div className="relative h-32 w-full overflow-hidden rounded-lg bg-card/50 flex items-center justify-center">
        <div className="flex gap-2 animate-nft-carousel">
          <div className="w-16 h-20 rounded-md bg-primary/20 flex items-center justify-center">
            <span className="text-primary text-xs">NFT #1</span>
          </div>
          <div className="w-16 h-20 rounded-md bg-secondary/20 flex items-center justify-center">
            <span className="text-secondary text-xs">NFT #2</span>
          </div>
          <div className="w-16 h-20 rounded-md bg-accent/20 flex items-center justify-center">
            <span className="text-accent text-xs">NFT #3</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Token Listing",
    description: "Facilitate token launches with ease on Pump.fun.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    animation: (
      <div className="relative h-32 w-full overflow-hidden rounded-lg bg-card/50 flex items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-primary font-bold">BUF</span>
          </div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary animate-bounce"
            >
              <path d="m12 19 7-7-7-7" />
              <path d="M19 12H5" />
            </svg>
          </div>
        </div>
      </div>
    ),
  },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful <span className="text-primary">Features</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Buf AI provides intelligent tools to navigate Solana's ecosystem with ease and precision.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card rounded-xl p-6 h-full flex flex-col"
              variants={itemVariants}
            >
              <div className="mb-4 text-primary">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/70 mb-6 flex-grow">{feature.description}</p>

              <div className="mt-auto">
                {feature.animation}
                <button className="mt-4 text-primary hover:text-primary-dark flex items-center gap-2 transition-colors duration-300">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

