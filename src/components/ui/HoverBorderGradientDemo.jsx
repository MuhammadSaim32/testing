"use client";
import React from "react";
import { HoverBorderGradient } from "./hover-border-gradient.tsx";
import { motion } from "framer-motion";

export function HoverBorderGradientDemo({ heading, content }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex justify-center items-center hover:cursor-pointer font-serif"
    >
      <HoverBorderGradient
        containerClassName="rounded-3xl max-w-sm w-full border-blue-900"
        as="div"
        className="dark:bg-black bg-white text-black   dark:text-white p-10 flex flex-col justify-between text-center space-y-6 shadow-2xl min-h-[420px]  "
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-wide">{heading}</h2>
          <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            {content}
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Fast service • Genuine parts • Warranty included
          </p>
          <button
            onClick={() => {
              window.open(
                "https://wa.me/923001234567?text=Hello!%20I%20want%20to%20book%20an%20iPhone%20repair.",
                "_blank",
              );
            }}
            className="mt-3 px-8 py-3 rounded-full bg-gradient-to-r
            from-blue-600 to-cyan-500 text-white font-semibold hover:opacity-90
            transition cursor-pointer"
          >
            {" "}
            Book Now
          </button>
        </div>
      </HoverBorderGradient>
    </motion.div>
  );
}
