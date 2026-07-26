import React from 'react';

const StickyCtaButton = () => {
  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <a
          href="https://haveneye.simplybook.me/v2/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#1d4f91] font-bold py-3 px-6 rounded-full shadow-xl border border-[#1d4f91] hover:bg-[#eef4fb] transition-all duration-300 flex items-center gap-2 text-base sm:text-lg"
        >
          <span>📅</span> Book Your Appointment
        </a>
      </div>
    </>
  );
};

export default StickyCtaButton;
