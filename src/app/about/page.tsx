'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#1b1b4f]">
      {/* Background Banner Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/5.jpg" // Office background image
          alt="Office background"
          fill
          className="object-cover opacity-100"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50 z-0" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
          <Image
            src="/logo_text_transparent.png"
            alt="Verlexa"
            width={300}
            height={100}
            className="mb-4"
            priority
          />
          <p className="text-white text-lg md:text-xl max-w-xl">
            Transforming Legal Discovery Through Innovation
          </p>
        </div>
      </section>

      {/* About Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-6 py-20"
      >
        <p className="text-lg mb-8 text-center">
          Verlexa is a legal-tech company focused on revolutionizing the way law firms handle document discovery.
        </p>

        <section className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p>
              At Verlexa, our mission is simple: empower legal professionals with cutting-edge tools that make the
              document discovery process faster, smarter, and more accurate. We believe technology should enable firms
              to focus on what they do best — winning cases.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
            <p>
              Our platform digitizes massive volumes of legal documents, applies smart labeling and categorization,
              and enables advanced querying — all while maintaining chain of custody and accuracy. Whether you're
              preparing for litigation or managing case records, Verlexa is your digital discovery partner.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Why Verlexa?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Secure and compliant infrastructure built for legal data</li>
              <li>Lightning-fast document indexing and retrieval</li>
              <li>Elegant UI that your staff can learn in minutes</li>
              <li>Dedicated support from legal-tech experts</li>
            </ul>
          </div>
        </section>
      </motion.div>
    </main>
  );
}
