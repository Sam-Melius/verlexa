'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1b1b4f]">

      {/* Hero Section */}
      <section className="relative text-white text-center px-6 py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/4.jpg" // make sure this path matches your /public folder
            alt="Lady Justice"
            fill
            className="object-cover opacity-50 "
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>

        {/* Animated Foreground Content */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <Image
              src="/Logo_text_transparent.png"
              alt="Verlexa"
              width={400}
              height={200}
              className="h-auto w-auto max-w-xs md:max-w-sm mt-10"
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Digitize. Organize. Win Cases.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-4 text-[#c1a01e] text-lg max-w-2xl mx-auto"
          >
            Verlexa helps law firms streamline document discovery like never before.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-8"
          >
            <a
              href="/contact"
              className="bg-[#c1a01e] text-[#1b1b4f] px-6 py-3 rounded font-semibold hover:brightness-110"
            >
              Get a Quote
            </a>
          </motion.div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
        {[
          {
            title: "Fast Processing",
            desc: "Digitize and index massive discovery files in hours, not days.",
          },
          {
            title: "Smart Organization",
            desc: "Automatically label, categorize, and apply date stamps.",
          },
          {
            title: "Advanced Search",
            desc: "Use database-style querying to find what matters fast.",
          },
        ].map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Testimonial Preview */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative text-white text-center py-16 px-6 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/2.jpg" // Ensure this is in your /public folder
            alt="Client meeting"
            fill
            className="object-cover opacity-100"
            priority
          />
          <div className="absolute inset-0 bg-[#1b1b4f] opacity-60" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-2xl mx-auto">
          <blockquote className="italic text-lg">
            “Without Verlexa, we would not have been able to take the case.”
          </blockquote>
          <p className="mt-4 font-semibold text-[#c1a01e]">
            — Partner at Northwest Litigation Group
          </p>
        </div>
      </motion.section>


      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16 px-6 text-center"
      >
        <h2 className="text-3xl font-bold">Ready to streamline discovery?</h2>
        <p className="mt-4">Let’s talk about how Verlexa can work for your firm.</p>
        <a
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-[#1b1b4f] text-white rounded-xl font-semibold hover:bg-[#15153d]"
        >
          Contact Us
        </a>
      </motion.section>
    </main>
  );
}
