import React, { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import axios from "axios";

export function FAQPage() {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    try {
      const res = await axios.get("https://marketing-wala-backend.onrender.com/api/faqs"); // your backend API url
      setFaqs(res.data);
    } catch (error) {
      console.error("Failed to fetch FAQs", error);
    }
  };

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6 sm:px-12 font-sans text-[#064cda]">
      <div className="mx-auto bg-[#f8faff] rounded-xl shadow-lg p-8 max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 tracking-tight">
          Frequently Asked Questions
        </h2>

        {faqs.length === 0 ? (
          <p className="text-center text-gray-500">No FAQs available.</p>
        ) : (
          faqs.map((faq, index) => (
            <div
              key={faq._id || index}
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
          ))
        )}
      </div>
    </section>
  );
}
