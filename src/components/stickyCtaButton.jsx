import React, { useState, useEffect } from 'react';

const StickyCtaButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById('hero-section');
      if (heroElement) {
        const heroBottom = heroElement.getBoundingClientRect().bottom;
        setIsVisible(heroBottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <a
        href="https://haveneye.simplybook.me/v2/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#3d6b1f] text-white font-bold py-3 px-6 rounded-full shadow-xl hover:bg-[#2d5016] transition-all duration-300 flex items-center gap-2 text-base sm:text-lg"
      >
        <span>📅</span> Book Appointment
      </a>
    </div>
  );
};

export default StickyCtaButton;
