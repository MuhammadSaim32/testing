"use client";
import { LayoutTextFlip } from "./layout-text-flip";
import { motion } from "motion/react";

export function LayoutTextFlipDemo() {
  return (
    <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center py-24 px-6 md:px-16 font-serif overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative flex flex-col items-center justify-center text-center"
      >
        <LayoutTextFlip
          text="Expert in "
          words={[
            "iPhone Repair",
            "Screen Replacement",
            "Battery Restoration",
            "Water Damage Recovery",
          ]}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug text-white drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]"
          wordClassName="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
        />
      </motion.div>
    </section>
  );
}
