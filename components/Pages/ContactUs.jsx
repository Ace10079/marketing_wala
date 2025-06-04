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
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white font-serif text-gray-900 py-12 px-4">
      <div className=" mx-auto border-2 border-black p-10 bg-white shadow-[4px_4px_0_#000]">
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-center border-b-2 border-black pb-4 mb-8">
          Contact the Editor
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side – Form */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Submit a Story Tip 📝</h3>
            <p className="italic mb-6">
              Got a scoop or a business idea? We’re all ears.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-bold mb-1" htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="e.g., Jane Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-black rounded-sm focus:outline-none focus:ring-2 focus:ring-black bg-[#fdfcf7]"
                />
              </div>

              <div>
                <label className="block font-bold mb-1" htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="e.g., jane@newstips.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-black rounded-sm focus:outline-none focus:ring-2 focus:ring-black bg-[#fdfcf7]"
                />
              </div>

              <div>
                <label className="block font-bold mb-1" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="What's the scoop?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-black rounded-sm focus:outline-none focus:ring-2 focus:ring-black bg-[#fdfcf7] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-sm font-semibold uppercase tracking-wider hover:bg-gray-800 transition"
              >
                Send Your Story 🚀
              </button>

              {submitted && (
                <p className="mt-4 text-green-700 font-semibold animate-pulse">
                  Received! We’ll publish it faster than ink dries on paper 📰✍️
                </p>
              )}
            </form>
          </div>

          {/* Right Side – Newspaper Quote + Visual */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-bold mb-4 text-black">
                From the Press Room of Marketing Wala
              </h4>
              <p className="mb-4 text-base leading-relaxed">
                Whether it’s a revolutionary product, a trending idea, or just good old inspiration — we treat every message like a headline. Reach out, and we’ll deliver your message with the punch of front-page news.
              </p>
            </div>
            <img
              src="https://illustrations.popsy.co/gray/contact.svg"
              alt="Newspaper Contact"
              className="w-64 mx-auto md:mx-0 border border-black mt-4 shadow-md"
            />
          </div>
        </div>
      </div>

      <footer className="mt-12 text-center text-sm text-gray-700 italic">
        © {new Date().getFullYear()} Marketing Wala — Printed With Passion, Delivered With Purpose 📰
      </footer>
    </div>
  );
}
