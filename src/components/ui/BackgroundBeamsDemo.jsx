"use client";
import React from "react";
import { BackgroundBeams } from "./background-beams.tsx";

export function BackgroundBeamsDemo() {
  return (
    <div className="relative w-full py-20 bg-black text-white overflow-hidden font-serif">
      {/* Background beams - brighter and more visible */}
      <BackgroundBeams className="brightness-150 opacity-100" />

      {/* Content */}

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
          Why Choose Us
        </h2>

        {/* Short description */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
          Fast, reliable, and affordable iPhone repairs with certified
          technicians and genuine parts. We bring your device back to life with
          precision and care.
        </p>

        {/* Features / bullets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/5 rounded-xl p-4 shadow-md hover:bg-white/10 transition">
            ✔ Same-day repairs
          </div>
          <div className="bg-white/5 rounded-xl p-4 shadow-md hover:bg-white/10 transition">
            ✔ Genuine replacement parts
          </div>
          <div className="bg-white/5 rounded-xl p-4 shadow-md hover:bg-white/10 transition">
            ✔ Expert certified technicians
          </div>
          <div className="bg-white/5 rounded-xl p-4 shadow-md hover:bg-white/10 transition">
            ✔ Warranty included on all repairs
          </div>
        </div>

        {/* CTA button */}
        <button
          onClick={() => {
            window.open(
              "https://wa.me/923001234567?text=Hello!%20I%20want%20to%20book%20an%20iPhone%20repair.",
              "_blank",
            );
          }}
          className="cursor-pointer  px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold hover:opacity-90 transition"
        >
          Book a Repair
        </button>
      </div>
    </div>
  );
}
