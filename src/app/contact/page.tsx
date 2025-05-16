'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/6.jpg"
          alt="Courthouse Columns"
          fill
          className="object-cover opacity-700"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-70" />
      </div>

      {/* Foreground Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl mx-auto px-6 py-20"
      >
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-lg text-center mb-10 text-[#c1a01e]">
          Get in touch to request a personalized quote or learn more about Verlexa.
        </p>

        <form
          className="space-y-6"
          method="POST"
          action="https://formspree.io/f/xeognzln"
        >
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-2 border border-gray-300 text-[#1b1b4f] rounded-md focus:outline-none focus:ring-2 focus:ring-[#c1a01e]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-2 border border-gray-300 text-[#1b1b4f] rounded-md focus:outline-none focus:ring-2 focus:ring-[#c1a01e]"
            />
          </div>

          <div>
            <label htmlFor="firm" className="block font-medium mb-1">
              Law Firm (Optional)
            </label>
            <input
              type="text"
              name="firm"
              id="firm"
              className="w-full px-4 py-2 border border-gray-300 text-[#1b1b4f] rounded-md focus:outline-none focus:ring-2 focus:ring-[#c1a01e]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              className="w-full px-4 py-2 border border-gray-300 text-[#1b1b4f] rounded-md focus:outline-none focus:ring-2 focus:ring-[#c1a01e]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#c1a01e] text-[#1b1b4f] py-3 rounded-md font-semibold hover:brightness-110 transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </main>
  );
}
