import React from "react";
import { NavbarDemo } from "./components/ui/NavbarDemo.jsx"; // relative import
import Contact from "./Contact.jsx";
import { HoverBorderGradientDemo } from "./components/ui/HoverBorderGradientDemo.jsx";
import { BackgroundBeamsDemo } from "./components/ui/BackgroundBeamsDemo.jsx";
import { InfiniteMovingCardsDemo } from "./components/ui/InfiniteMovingCardsDemo.jsx";
import HeroSection from "./Hero.jsx";
import { GlobeDemo } from "./components/ui/GlobeDemo.jsx";
const App = () => {
  return (
    <div className="relative min-h-screen">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-[99vw] z-50 ">
        <NavbarDemo />
      </div>
      <HeroSection />

      <div
        id="Services"
        className="bg-black h-20 text-center flex items-center justify-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 text-center">
          Our Services
        </h2>
      </div>
      <div className="min-h-[60vh] w-full bg-black py-12 px-8 gap-6 flex flex-col md:flex-row justify-center md:justify-between items-center">
        <HoverBorderGradientDemo
          heading="Screen Replacement"
          content="Cracked or unresponsive screen? We replace it quickly with top-quality parts to make your display look brand new."
        />

        <HoverBorderGradientDemo
          heading="Battery Replacement"
          content="Phone dying too soon? Get a long-lasting, genuine battery replacement and enjoy full-day performance again."
        />

        <HoverBorderGradientDemo
          heading="Camera Repair"
          content="Blurry or non-working camera? Our experts fix lens and sensor issues to bring your photo clarity back."
        />
      </div>
      <BackgroundBeamsDemo />
      <div className="w-auto overflow-x-hidden bg-black py-12 flex flex-col items-center">
        {/* Section heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 text-center">
          What People Say About Us
        </h2>
        <p className="text-gray-300 text-center max-w-2xl">
          Our customers love our fast, reliable iPhone repair services. Here’s
          what some of them have to say:
        </p>

        {/* Infinite moving cards */}
        <InfiniteMovingCardsDemo />
      </div>
      <GlobeDemo />
      <Contact />
    </div>
  );
};

export default App;
