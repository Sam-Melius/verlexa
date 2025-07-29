'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TestimonialsPage() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/3.jpg" // Or choose another background
          alt="Testimonial Background"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0 bg-black opacity-70" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 px-6 py-24 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-10">What Our Clients Say</h1>

        <div className="space-y-16">
          {/* Testimonial 1 */}
          <div className="bg-white/10 border-l-4 border-[#c1a01e] p-6 rounded-lg shadow-lg">
            <p className="italic text-lg">
              “Verlexa drastically reduced our discovery time. We were able to build a stronger case faster.”
            </p>
            <p className="mt-4 font-semibold text-[#c1a01e]">— Jane M, Litigator, Oregon</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white/10 border-l-4 border-[#c1a01e] p-6 rounded-lg shadow-lg">
            <p className="italic text-lg">
              “I was skeptical at first, but Verlexa’s tools saved our firm hundreds of hours. Worth every penny.”
            </p>
            <p className="mt-4 font-semibold text-[#c1a01e]">— Michael T, Legal Counsel, California</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white/10 border-l-4 border-[#c1a01e] p-6 rounded-lg shadow-lg">
            <p className="italic text-lg">
              “The ability to tag and search exhibits so easily changed the way we prep for depositions.”
            </p>
            <p className="mt-4 font-semibold text-[#c1a01e]">— Sara L, Legal Counsel, Washington</p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
