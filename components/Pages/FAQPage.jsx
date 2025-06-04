import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services does Marketing Wala offer?",
    answer:
      "We provide branding, digital strategy, social media campaigns, and creative design tailored for bold brands.",
  },
  {
    question: "How quickly can you launch a campaign?",
    answer:
      "Depending on scope, we can kick off campaigns within 3-5 business days after onboarding.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Absolutely! We love turning startup sparks into blazing brand success stories.",
  },
];

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6 sm:px-12 font-sans text-[#064cda]">
      <div className=" mx-auto bg-[#f8faff] rounded-xl shadow-lg p-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 tracking-tight">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-[#d4e3f7] py-4 transition-all duration-300 cursor-pointer"
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
            {openIndex === index && (
              <p className="mt-3 text-gray-700 text-base sm:text-lg leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
