"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const milestones = [
  {
    date: "Q1 2023",
    title: "Concept Development",
    description: "Initial research and concept development for Buf AI on Solana.",
  },
  {
    date: "Q2 2023",
    title: "Alpha Launch",
    description: "First version of Buf AI released to a select group of testers.",
  },
  {
    date: "Q3 2023",
    title: "Market Analysis Integration",
    description: "Added DEX Screener integration for real-time market analysis.",
  },
  {
    date: "Q4 2023",
    title: "NFT Insights Feature",
    description: "Expanded capabilities to include NFT market tracking on Magic Eden.",
  },
  {
    date: "Q1 2024",
    title: "Public Beta",
    description: "Buf AI opened to public beta with token swap functionality.",
  },
  {
    date: "Q2 2024",
    title: "Token Launch Integration",
    description: "Added support for token launches via Pump.fun integration.",
  },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden bg-card/30">
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
            About <span className="text-primary">Buf AI</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            An intelligent agent designed to simplify and optimize your experience in Solana's DeFi and NFT ecosystems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-foreground/70 mb-6">
              Buf AI is an intelligent agent designed to simplify and optimize your experience in Solana's DeFi and NFT
              ecosystems. By leveraging advanced AI technology, we provide real-time insights and automated tools to
              help you navigate the complex world of decentralized finance and digital collectibles.
            </p>
            <p className="text-foreground/70 mb-6">
              Our platform integrates seamlessly with Solana's high-performance blockchain, offering lightning-fast
              analysis and execution of your trading and investment strategies.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-card/50 rounded-lg p-4 flex items-center gap-3">
                <div className="text-primary">
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
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Secure</h4>
                  <p className="text-sm text-foreground/60">Built on Solana's secure infrastructure</p>
                </div>
              </div>
              <div className="bg-card/50 rounded-lg p-4 flex items-center gap-3">
                <div className="text-primary">
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
                  >
                    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Fast</h4>
                  <p className="text-sm text-foreground/60">Lightning-fast analysis and execution</p>
                </div>
              </div>
              <div className="bg-card/50 rounded-lg p-4 flex items-center gap-3">
                <div className="text-primary">
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
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Intelligent</h4>
                  <p className="text-sm text-foreground/60">AI-powered insights and recommendations</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative rounded-xl overflow-hidden bg-card/50 border border-primary/10 p-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-full blur-xl"></div>

              <h3 className="text-2xl font-semibold mb-6">Key Benefits</h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="text-primary mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-foreground/80">Real-time market data and analysis</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-primary mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-foreground/80">Automated token swaps with optimal pricing</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-primary mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-foreground/80">NFT trend identification and opportunity alerts</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-primary mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-foreground/80">Simplified token launch process</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-primary mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-foreground/80">Intuitive interface for both beginners and experts</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div ref={ref}>
          <h3 className="text-2xl font-semibold mb-8 text-center">Our Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="md:w-1/2 text-center md:text-right">
                    <div
                      className={`inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2 ${index % 2 === 0 ? "md:ml-auto" : ""}`}
                    >
                      {milestone.date}
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{milestone.title}</h4>
                    <p className="text-foreground/70">{milestone.description}</p>
                  </div>

                  <div className="relative flex items-center justify-center z-10">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-background font-bold">{index + 1}</span>
                    </div>
                  </div>

                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

