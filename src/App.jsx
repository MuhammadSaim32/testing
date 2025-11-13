import React from "react";
import { motion } from "framer-motion";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import Drag from "./Test.jsx";
import { NavbarDemo } from "./components/ui/NavbarDemo.jsx";
import {
  Phone,
  MapPin,
  Clock,
  Shield,
  Star,
  CheckCircle,
  Wrench,
  Battery,
  Camera,
  Droplets,
} from "lucide-react";

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 relative">
      {/* Particle Background - NOW VISIBLE */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#111827",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#3b82f6",
            },
            links: {
              color: "#3b82f6",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-20 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <span className="bg-blue-600/20 text-blue-400 text-sm uppercase tracking-widest font-medium px-4 py-2 rounded-full border border-blue-600/30">
                  Premium Repair Service
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Fast iPhone Repair
                <span className="text-blue-400"> Done Right</span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-400 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Same-day repairs with 1-year warranty. Screen replacement,
                battery repair, and more. Professional service you can trust.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.button
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </motion.button>
                <motion.button
                  className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-400 hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Services
                </motion.button>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-green-400" />
                  <span className="text-gray-400">Same-Day Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-gray-400">1-Year Warranty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-green-400" />
                  <span className="text-gray-400">4.9/5 Rating</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
                <div className="bg-gray-900 rounded-xl shadow-2xl p-6 border border-gray-700">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Popular Repairs
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        service: "Screen Replacement",
                        price: "$79",
                        time: "30 min",
                        icon: <Wrench className="w-4 h-4" />,
                      },
                      {
                        service: "Battery Replacement",
                        price: "$59",
                        time: "20 min",
                        icon: <Battery className="w-4 h-4" />,
                      },
                      {
                        service: "Camera Repair",
                        price: "$89",
                        time: "45 min",
                        icon: <Camera className="w-4 h-4" />,
                      },
                      {
                        service: "Water Damage",
                        price: "$99",
                        time: "60 min",
                        icon: <Droplets className="w-4 h-4" />,
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex justify-between items-center py-3 border-b border-gray-700"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="text-blue-400">{item.icon}</div>
                          <span className="text-gray-300 font-medium">
                            {item.service}
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="text-blue-400 font-bold">
                            {item.price}
                          </div>
                          <div className="text-sm text-gray-500">
                            {item.time}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <motion.button
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold mt-6 hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Free Quote
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Simple Features Section */}
        <section className="py-20 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2
              className="text-4xl font-bold text-white text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Why Choose Us?
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: "1-Year Warranty",
                  description:
                    "All repairs come with comprehensive warranty coverage",
                },
                {
                  icon: <Clock className="w-12 h-12" />,
                  title: "Fast Service",
                  description: "Most repairs completed in under 60 minutes",
                },
                {
                  icon: <Star className="w-12 h-12" />,
                  title: "Quality Parts",
                  description: "Premium components that meet OEM standards",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center p-6"
                >
                  <div className="w-20 h-20 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-400 border border-blue-600/30">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900/80 backdrop-blur-lg border-t border-gray-700/50 py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              iFixPro iPhone Repair
            </h3>
            <p className="text-gray-400 mb-6">
              Professional repairs with guaranteed results
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>123 Repair Street</span>
              </div>
            </div>
            <div className="text-gray-500">
              <p>&copy; 2024 iFixPro. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
