"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#FFFBFF] text-[#1B1B2F] py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-[#A66CFF] mb-6">
            Ready to Build Your Dream Website?
          </h2>
          <div className="flex justify-center md:justify-start space-x-6 mt-8">
            <Link href="https://facebook.com" target="_blank">
              <FaFacebookF className="text-2xl text-[#A66CFF] hover:text-[#8C5BFF] transition" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <FaTwitter className="text-2xl text-[#A66CFF] hover:text-[#8C5BFF] transition" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedinIn className="text-2xl text-[#A66CFF] hover:text-[#8C5BFF] transition" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram className="text-2xl text-[#A66CFF] hover:text-[#8C5BFF] transition" />
            </Link>
          </div>
        </div>

        {/* Newsletter Subscription - Positioned to the right */}
        <div className="mt-10 md:mt-0 md:text-right">
          <h3 className="text-xl font-semibold text-[#A66CFF] mb-3">Subscribe to Our Newsletter</h3>
          <div className="flex justify-end items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg border border-[#A66CFF] focus:outline-none focus:border-[#8C5BFF] w-64"
            />
            <button className="bg-gradient-to-r from-[#A66CFF] to-[#8C5BFF] hover:from-[#925EFF] hover:to-[#7A4AE6] text-white px-6 py-3 rounded-lg font-semibold transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <p className="mt-8 text-gray-500 text-center">&copy; {new Date().getFullYear()} WebGen. All rights reserved.</p>
    </footer>
  );
}
