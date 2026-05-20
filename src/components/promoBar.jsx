import React, { useState } from 'react';
import { X } from 'lucide-react';

const PromoBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-linear-to-r from-[#2d5016] to-[#3d6b1f] text-white py-2 px-4 flex items-center justify-between sticky top-0 z-60">
      <div className="flex-1 text-center">
        <p className="text-sm sm:text-base font-semibold">
          🎉 Limited Time: 2-for-1 Offer on Premium Frames - Book Your OCT Scan Today!
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
