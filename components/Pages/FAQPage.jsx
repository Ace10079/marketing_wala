import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What kind of businesses do you work with?",
      answer:
        "We work with all kinds of businesses, from startups and homegrown brands to growing companies and individual creators. If you have a vision, we’re here to market it right.",
    },
    {
      question: "Do you offer services for a limited budget?",
      answer:
        "Yes, we do. We understand that every brand has different budget constraints. That’s why we tailor our services to suit your budget without compromising on creativity or quality.",
    },
    {
      question: "What services do you provide?",
      answer:
        "We offer a wide range of services including social media marketing and management, content creation (reels, photos, videos), web development, augmented reality (AR), performance marketing, branding, and more. Whether you’re building your brand or scaling it, we’ve got what you need.",
    },
    {
      question: "How soon can we get started?",
      answer:
        "We can get started as soon as you’re ready. Once we understand your brand, goals, and requirements, we begin the onboarding process and start working on your strategy without delay.",
    },
    {
      question: "Why should we choose Marketingwala over other agencies?",
      answer:
        "We’re not just another agency — we’re your creative partners. With real experience, a passion for storytelling, and a deep understanding of what brands need, we bring fresh ideas, clear communication, and marketing that actually works.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6 sm:px-12 font-sans text-[#064cda] pt-serif-bold">
      <div className="mx-auto bg-[#f8faff] rounded-xl shadow-lg p-8 max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 tracking-tight">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-[#d4e3f7] py-4 cursor-pointer"
            onClick={() => toggle(index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-medium">{faq.question}</h3>
              {openIndex === index ? (
                <Minus size={20} className="text-[#064cda]" />
              ) : (
                <Plus size={20} className="text-[#064cda]" />
              )}
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-96 mt-3 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
