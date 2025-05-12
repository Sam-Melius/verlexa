// app/contact/page.tsx

export default function ContactPage() {
    return (
      <main className="min-h-screen bg-white text-gray-900 px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-lg text-center mb-10">
            Get in touch to request a personalized quote or learn more about Verlexa.
          </p>
  
          <form
            className="space-y-6"
            method="POST"
            action="https://formspree.io/f/YOUR_FORM_ID" // You'll replace this with a working endpoint
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
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-md font-semibold hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    );
  }
  