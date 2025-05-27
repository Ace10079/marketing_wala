import React, { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo, just show submitted message
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 flex flex-col justify-between">
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg my-16 animate-fadeInUp">
        <h2 className="text-4xl font-extrabold mb-4 text-center text-pink-600">
          Get in Touch!
        </h2>
        <p className="mb-8 text-center text-gray-700 italic text-lg">
          Have questions or want to say hi? We promise we don’t bite 🦄
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Awesome Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email (no spam, promise!)"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message... Make it fun!"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition resize-none"
          />

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 rounded-md font-semibold text-lg hover:bg-pink-600 transition-transform hover:scale-105"
          >
            Send Some Love 💌
          </button>
        </form>

        {submitted && (
          <p className="mt-6 text-center text-green-600 font-semibold animate-fadeIn">
            Thanks for reaching out! We’ll get back to you faster than you can say
            “Marketing Wala” 🚀
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-pink-600 text-white py-6 text-center select-none">
      <p>
        © {new Date().getFullYear()} Marketing Wala. All the vibes, none of the spam. 🤙
      </p>
    </footer>
  );
}
