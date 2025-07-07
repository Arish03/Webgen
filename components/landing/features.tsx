"use client";

import { motion } from "framer-motion";
import { Palette, Sparkles, Wand2 } from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "AI-Driven Design",
    description:
      "Effortlessly generate pixel-perfect websites with AI-powered suggestions and seamless layouts.",
    accentColor: "from-[#A66CFF] to-[#8C5BFF]",
    buttonColor: "bg-[#A66CFF]/10",
  },
  {
    icon: Palette,
    title: "Customizable Themes",
    description:
      "Personalize your website’s colors, typography, and structure in real-time with intuitive controls.",
    accentColor: "from-[#2DE2E6] to-[#1BCACF]",
    buttonColor: "bg-[#2DE2E6]/10",
  },
  {
    icon: Sparkles,
    title: "Optimized Components",
    description:
      "Access a library of fully responsive, high-performance UI components ready for production.",
    accentColor: "from-[#E84545] to-[#D73434]",
    buttonColor: "bg-[#E84545]/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Features() {
  return (
    <section className="relative bg-[#FFFBFF] text-[#A66CFF] py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Unlock Limitless Possibilities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful AI-enhanced tools that bring your website ideas to life effortlessly.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="relative group"
            >
              <div className="relative z-10 h-full p-8 rounded-2xl bg-white shadow-xl border border-gray-200">
                <div
                  className={`inline-block p-3 rounded-xl bg-gradient-to-r ${feature.accentColor}`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-2xl font-semibold mt-6 mb-4">
                  {feature.title}
                </h3>

                <p className="mb-4 text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-2 rounded-full ${feature.buttonColor} text-[#1B1B2F] font-medium transition-all`}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
