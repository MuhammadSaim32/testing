"use client";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "../src/components/ui/text-generate-effect.tsx";
import { LayoutTextFlipDemo } from "../src/components/ui/LayoutTextFlipDemo.jsx";

export default function HeroSection() {
  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-gray-950 to-black flex items-center justify-center antialiased font-serif py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="p-4 max-w-5xl mx-auto relative z-10 w-full"
      >
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-white tracking-tight leading-snug"
        >
          Your iPhone, <br />
          <span className="text-blue-500">Good as New</span>
        </motion.h1>

        {/* Flipping text */}
        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TextGenerateEffect
            words="Expert iPhone repair in Faisalabad — fast, affordable, and backed by a lifetime warranty. Walk in or book your repair online today!"
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl text-center mx-auto mt-4 leading-relaxed tracking-normal"
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6"
        >
          <button
            onClick={() => {
              window.open(
                "https://wa.me/923001234567?text=Hello!%20I%20want%20to%20book%20an%20iPhone%20repair.",
                "_blank",
              );
            }}
            className="cursor-pointer px-6 py-3 rounded-2xl bg-blue-500 hover:bg-blue-600 text-white font-semibold text-base sm:text-lg transition-all duration-200 hover:scale-105 shadow-lg tracking-wide"
          >
            Book a Repair
          </button>

          <button className="px-6 py-3 rounded-2xl border-2 border-white text-white font-semibold text-base sm:text-lg hover:bg-white hover:text-gray-900 transition-all duration-200 tracking-wide">
            Explore Services
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delayChildren: 1.6, staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto mt-12"
        >
          {[
            { title: "30 Minutes", subtitle: "Average Repair Time" },
            { title: "1,000+", subtitle: "Devices Fixed" },
            { title: "Lifetime Warranty", subtitle: "Guaranteed Quality" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-center"
            >
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {stat.title}
              </div>
              <div className="text-gray-400 text-sm mt-1 sm:mt-2 tracking-wide">
                {stat.subtitle}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
