import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Do you accept insurance?',
      answer: 'Yes! We work with major insurance providers and can coordinate your coverage. Please bring your insurance card, and our team will help process your benefits.',
    },
    {
      question: 'Can I walk in without an appointment?',
      answer: 'While we recommend booking in advance for faster service, we do accept walk-ins based on availability. Peak hours are 10-2 and 4-6 PM. Call ahead to check wait times.',
    },
    {
      question: 'How long does an eye test take?',
      answer: 'A comprehensive eye exam typically takes 30-45 minutes, including all tests and consultations. Our OCT scan adds about 10-15 minutes but is usually bundled within this timeframe.',
    },
    {
      question: 'What is OCT and is it covered by insurance?',
      answer: 'OCT (Optical Coherence Tomography) is advanced 3D imaging that detects eye diseases early. Many insurance plans cover it if medically necessary, especially for glaucoma risk patients. Ask our team about coverage.',
    },
    {
      question: 'How quickly can I get my glasses?',
      answer: 'Designer frames and lenses typically ship within 1-2 weeks. Standard frames are available in 3-5 business days. We can discuss rush options during your fitting.',
    },
    {
      question: 'Do you offer home eye tests?',
      answer: 'No! We hope to offer this in the future, but for now, all eye exams and OCT scans must be done in-clinic to ensure accuracy and comprehensive care. We look forward to welcoming you to our state-of-the-art facility!',
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-[#eef4fb]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Get answers to common questions about our services and booking process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 hover:border-[#1d4f91] transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={20}
                  className={`text-[#1d4f91] shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-gray-200">
                  <p className="text-gray-700 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg border border-[#1d4f91] text-center">
          <p className="text-gray-600 mb-4">
            Didn't find your answer? Contact us directly.
          </p>
          <a
            href="https://wa.me/233557767766?text=Hello%20I%20have%20a%20question%20about%20Haven%20Eye%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1d4f91] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#133f72] transition-colors"
          >
            Chat with Us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
