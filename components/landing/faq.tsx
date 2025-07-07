"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqsData = [
  {
    question: "What is WebGen?",
    answer:
      "WebGen is an AI-powered tool that allows users to create professional websites effortlessly by describing their vision.",
  },
  {
    question: "Do I need coding experience to use WebGen?",
    answer:
      "No, WebGen is designed for both beginners and professionals. No coding skills are required.",
  },
  {
    question: "Can I customize the design of my website?",
    answer:
      "Yes, you can customize colors, fonts, layouts, and more to match your brand identity.",
  },
  {
    question: "How does WebGen ensure mobile responsiveness?",
    answer:
      "All websites generated are fully responsive and optimized for various screen sizes.",
  },
  {
    question: "Is WebGen free to use?",
    answer:
      "WebGen offers both free and premium plans, allowing you to choose the best option for your needs.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-16 text-[#1B1B2F]"
      style={{ backgroundColor: "#FFFBFF" }} // ✅ Ensures the background is applied
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-[#A66CFF]">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqsData.map((faq, index) => (
            <div key={index} className="border border-[#A66CFF] rounded-lg overflow-hidden shadow-md">
              <button
                className="w-full flex justify-between items-center p-4 text-left text-lg font-semibold bg-[#A66CFF] hover:bg-[#8C5BFF] text-white transition-all duration-300"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <ChevronDown
                  className={`transition-transform transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 border-t border-[#A66CFF]"
                    style={{ backgroundColor: "#F5F5FC", color: "#1B1B2F" }} // ✅ Forces color update
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
