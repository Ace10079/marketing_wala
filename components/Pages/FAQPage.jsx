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
    <div className="bg-white py-16 px-6 font-serif text-black">
      <div className=" mx-auto border-4 border-black p-6">
        <h2 className="text-4xl font-bold uppercase tracking-widest text-center border-b-2 border-black pb-4 mb-6">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-black py-4 cursor-pointer"
            onClick={() => toggle(index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">{faq.question}</h3>
              {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-700 italic text-lg animate-fadeIn">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}