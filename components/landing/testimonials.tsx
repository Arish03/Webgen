"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex Johnson",
    feedback:
      "WebGen made website creation so easy! I described my idea, and within minutes, I had a fully functional website.",
  },
  {
    name: "Sophia Martinez",
    feedback:
      "I love how intuitive and powerful WebGen is! The AI customization options are incredible.",
  },
  {
    name: "Michael Smith",
    feedback:
      "As a small business owner, I needed a website fast. WebGen delivered a professional site with zero coding!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#FFFBFF] text-[#1B1B2F] py-20 relative">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-black text-[#A66CFF] mb-12"
        >
          What Our Users Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#FFFFFF] text-[#1B1B2F] shadow-md shadow-[#A66CFF]/20 p-8 rounded-3xl border border-[#A66CFF]/20"
            >
              <p className="text-lg italic">&ldquo;{testimonial.feedback}&rdquo;</p>
              <h4 className="mt-4 text-xl font-semibold text-[#A66CFF]">{testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
