"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative bg-[#FFFBFF] text-[#1B1B2F] py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Transform ideas into reality.
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#A66CFF]">
              Let AI build the perfect website.
            </h3>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          >
            <Link href="/generate">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 tracking-wide bg-gradient-to-r from-[#A66CFF] to-[#8C5BFF] hover:from-[#925EFF] hover:to-[#7A4AE6] shadow-lg shadow-[#A66CFF]/30 w-full sm:w-auto px-8 py-4 rounded-full text-white font-semibold text-lg border border-[#A66CFF]/30 backdrop-blur-sm transition-all duration-300 relative"
              >
                <span className="relative z-10">Get Started for Free</span>
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
    </section>
  );
}
