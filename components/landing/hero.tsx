"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import WordRotate from "@/components/ui/word-rotate";
import { words } from "@/constants";

export default function Hero() {
  return (
    <div className="min-h-screen bg-[#FFFBFF] text-[#A66CFF] relative overflow-hidden">
      <div className="container mx-auto px-6 pt-20 pb-32">
        <div className="text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8">
              Create {" "}
              <span className="relative inline-flex items-center">
                <WordRotate className="relative px-4 py-2" words={words} />
              </span>{" "}
              Websites with AI
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              Transform your ideas into professional websites in minutes. No
              design skills needed  just describe what you want, and watch the
              magic happen.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/generate">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 tracking-wide bg-gradient-to-r from-[#A66CFF] to-[#8C5BFF] hover:from-[#925EFF] hover:to-[#7A4AE6] shadow-lg shadow-[#A66CFF]/30 w-full sm:w-auto px-8 py-4 rounded-full text-white font-semibold text-lg border border-[#A66CFF]/30 backdrop-blur-sm transition-all duration-300 overflow-hidden relative"
              >
                <span className="relative z-10">Start Creating Now</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#925EFF] to-[#7A4AE6] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 100 }}
                />
                <svg
                  className="w-6 h-6 text-white/70 group-hover:text-white transition-colors duration-300 relative z-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
