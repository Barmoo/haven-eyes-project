import React, { useState } from 'react';

const StickyCtaButton = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <button
          onClick={() => setShowPreview(true)}
          className="bg-[#1d4f91] text-white font-bold py-3 px-6 rounded-full shadow-xl hover:bg-[#133f72] transition-all duration-300 flex items-center gap-2 text-base sm:text-lg"
        >
          <span>📷</span> View Father’s Day Offer
        </button>
        <a
          href="https://haveneye.simplybook.me/v2/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#1d4f91] font-bold py-3 px-6 rounded-full shadow-xl border border-[#1d4f91] hover:bg-[#eef4fb] transition-all duration-300 flex items-center gap-2 text-base sm:text-lg"
        >
          <span>📅</span> Book Your Appointment
        </a>
      </div>

      {showPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4">
          <div className="relative max-w-5xl w-full rounded-[2rem] overflow-hidden bg-white shadow-2xl">
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-4 right-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-md hover:bg-slate-100 transition"
              aria-label="Close image preview"
            >
              ✕
            </button>
            <img
              src="/images/offers/father's day.jpeg"
              alt="Father's Day offer preview"
              className="w-full h-auto max-h-[85vh] object-contain"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default StickyCtaButton;
