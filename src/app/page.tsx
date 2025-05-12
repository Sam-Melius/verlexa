// Verlexa - Homepage layout using Next.js (App Router) + Tailwind CSS
// This file assumes you're using /app directory routing and have Tailwind set up.

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-blue-900 to-blue-600 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
          Turn Days of Discovery Into Hours
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
          Verlexa digitizes, indexes, and organizes legal documents so your team can focus on the case — not the chaos.
        </p>
        <a
          href="/contact"
          className="inline-block mt-8 px-6 py-3 bg-white text-blue-900 font-semibold rounded-xl shadow-md hover:bg-gray-100"
        >
          Request a Demo
        </a>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
          <p>Digitize and index massive discovery files in hours, not days.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Smart Organization</h3>
          <p>Automatically label, categorize, and apply Bates stamps.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Advanced Search</h3>
          <p>Use database-style querying to find what matters fast.</p>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <blockquote className="max-w-2xl mx-auto italic text-lg">
          “Without Verlexa, we wouldn't have been able to take the case.”
        </blockquote>
        <p className="mt-4 font-semibold">— Partner at Northwest Litigation Group</p>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">Ready to streamline discovery?</h2>
        <p className="mt-4">Let’s talk about how Verlexa can work for your firm.</p>
        <a
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-blue-900 text-white rounded-xl font-semibold hover:bg-blue-700"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
