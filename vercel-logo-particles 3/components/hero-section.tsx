// "use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Spline from '@splinetool/react-spline/next';


export default function HeroSection() {
  const imgRef = useRef(null); // Membuat referensi untuk elemen img

  // Menambahkan efek pergerakan berdasarkan mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (imgRef.current) {
        const { clientX, clientY } = e; // Posisi mouse
        const { innerWidth, innerHeight } = window; // Ukuran layar
        const moveX = (clientX - innerWidth / 2) / 20; // Hitung pergerakan horizontal
        const moveY = (clientY - innerHeight / 2) / 20; // Hitung pergerakan vertikal
        imgRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`; // Terapkan transformasi
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-20 flex items-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary">Buf AI:</span> Your Intelligent Guide to Solana's DeFi and NFT Ecosystem
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl">
              Leverage Buf AI to analyze markets, swap tokens, explore NFTs, and launch tokens seamlessly on Solana.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#features"
                className="bg-primary hover:bg-primary-dark text-background px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
              >
                Explore Features
              </Link>
              <Link
                href="#about"
                className="bg-transparent hover:bg-primary/10 text-primary border border-primary px-8 py-3 rounded-full font-medium transition-all duration-300 hover:-translate-y-1"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-3/4 h-3/4">
                  {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path
                      fill="#9ADE00"
                      d="M45.7,-52.2C59.9,-41.7,72.3,-27.6,76.9,-10.8C81.5,6,78.4,25.5,68.2,39.8C58,54.1,40.8,63.2,22.7,69.2C4.6,75.2,-14.3,78.1,-30.8,72.1C-47.3,66.1,-61.3,51.2,-69.8,33.3C-78.3,15.5,-81.2,-5.3,-75.6,-23.1C-70,-40.9,-55.9,-55.7,-40.2,-65.7C-24.5,-75.7,-7.2,-80.9,7.9,-79.5C23,-78.1,31.5,-62.7,45.7,-52.2Z"
                      transform="translate(100 100)"
                      className="animate-morph"
                    />
                  </svg> */}
         
                  <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-background">
                   
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/30 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/30 rounded-full blur-lg"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <Link href="#features" aria-label="Scroll to features">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}