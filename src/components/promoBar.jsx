import React, { useState } from 'react';
import { X } from 'lucide-react';

const PromoBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-linear-to-r from-[#133f72] to-[#1d4f91] text-white py-2 px-4 flex items-center justify-between sticky top-0 z-60">
      <div className="flex-1 text-center">
        <p className="text-sm sm:text-base font-semibold">
          🎉 Book your OCT scan and explore premium frames with expert fitting support.
        </p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="ml-4 hover:opacity-80 transition-opacity"
        aria-label="Close promo"
      >
        <X size={20} />
      </button>
    </div>
  );
};

export default PromoBar;
