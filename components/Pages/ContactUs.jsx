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
    <div className="min-h-screen bg-white text-[#064cda] py-12 px-4 pt-serif-bold">
      <div className="mx-auto bg-[#f7faff] rounded-xl shadow-md p-8 sm:p-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Drop Us a Message 📬</h3>
            <p className="text-gray-600 mb-6">
              Got a story, question, or opportunity? Let’s make it happen.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-semibold mb-1" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Jane Doe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#064cda] bg-white text-black"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="e.g., jane@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#064cda] bg-white text-black"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#064cda] bg-white text-black resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#064cda] text-white py-3 rounded-md font-semibold uppercase tracking-wide hover:bg-[#043caa] transition"
              >
                Send Message 🚀
              </button>

              {submitted && (
                <p className="mt-4 text-green-600 font-medium animate-pulse">
                  Message sent! We'll get back to you soon 📩
                </p>
              )}
            </form>
          </div>

          {/* Info / Visual Section */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-semibold mb-4">
                Let’s Build Something Bold
              </h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We believe in ideas that spark impact. Whether you're a startup or a visionary, we’re excited to hear your story and help bring it to life.
              </p>

              {/* 🌍 Embedded Google Map */}
              <div className="rounded-lg overflow-hidden shadow-md transition-transform duration-500 ease-in-out hover:scale-[1.01]">
                <iframe
                  title="Marketingwala Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.4560718826555!2d72.87068497504235!3d19.131435882091825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8824d117a13%3A0x205bb2c6b140dc87!2sPowai%2C%20Mumbai%2C%20Maharashtra%20400076!5e0!3m2!1sen!2sin!4v1717751067760!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

           
          </div>
        </div>
      </div>

      <footer className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Marketing Wala — Crafted with Creativity
      </footer>
    </div>
  );
}
