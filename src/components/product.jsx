import React, { useState } from "react";
import { Link } from "react-router-dom";

/* ---------------- DATA ---------------- */
const glassesProducts = [
  { brand: "adidas", model: "SP0109-1 SUN", price: "GH₵ 2,890", image: "/images/frames/adidas.png" },
  { brand: "HUGO", model: "HG 33", price: "GH₵ 2,550", image: "/images/frames/hugo.png" },
  { brand: "Specsavers", model: "SANDHAMMAREN SUN RX", price: "GH₵ 1,190", image: "/images/frames/Specsavers.png" },
  { brand: "Kylie Minogue", model: "BREATHE", price: "GH₵ 2,210", image: "/images/frames/Kylie Minogue.png" },
];

const bestLovedLensesProducts = [
  { brand: "Specsavers easyvision", model: "Clarision Sphere", price: "GH₵ 230", image: "/images/best-loved-lenses/easyvision-clarision-sphere.png" },
  { brand: "1 Day Acuvue", model: "Moist", price: "GH₵ 280", image: "/images/best-loved-lenses/1 Day Acuvue Moist.png" },
  { brand: "1 Day Acuvue", model: "Oasys", price: "GH₵ 306", image: "/images/best-loved-lenses/1 Day Acuvue Oasys.png" },
  { brand: "Specsavers easyvision", model: "Sential", price: "GH₵ 230", image: "/images/best-loved-lenses/easyvision Sential.png" },
  { brand: "Specsavers easyvision", model: "Umere Toric", price: "GH₵ 255", image: "/images/best-loved-lenses/easyvision Umere Toric.png" },
  { brand: "Specsavers easyvision", model: "Umere", price: "GH₵ 280", image: "/images/best-loved-lenses/easyvision Umere.png" },
  { brand: "Specsavers easyvision", model: "Linarial", price: "GH₵ 306", image: "/images/best-loved-lenses/easyvision Linarial.png" },
  { brand: "Specsavers easyvision", model: "Vitrea", price: "GH₵ 230", image: "/images/best-loved-lenses/easyvision Vitrea.png" },
];

/* ---------------- CARD - Updated Design */
const ProductCard = ({ brand, model, price, image }) => (
  <div className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-[#3d6b1f]">
    <div className="h-56 flex items-center justify-center bg-[#f5f1e8] p-6 overflow-hidden">
      <img
        src={image}
        alt={brand}
        className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
      />
    </div>

    <div className="p-5 text-center border-t border-gray-100">
      <p className="font-semibold text-gray-900 text-sm">{brand}</p>
      <p className="text-gray-500 text-xs uppercase tracking-wide mt-1 mb-3">{model}</p>
      <p className="font-bold text-[#3d6b1f] text-lg">{price}</p>
    </div>
  </div>
);

/* ---------------- MAIN ---------------- */
const Product = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeLensSlide, setActiveLensSlide] = useState(0);

  return (
    <div className="flex flex-col w-full">

      {/* -------- Section 1: Frames -------- */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-3">
              Our Freshest Frames
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Premium designer eyewear handpicked for quality and style
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {glassesProducts.slice(activeSlide, activeSlide + 4).map((p, i) => (
              <ProductCard key={i} {...p} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/glasses" className="inline-block bg-[#3d6b1f] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#2d5016] transition-colors">
              View All Frames
            </Link>
          </div>
        </div>
      </div>

      {/* -------- Section 2: Contact Lenses -------- */}
      <div id="contact-lenses" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-[#f5f1e8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-3">
              Our Best-Loved Contact Lenses
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Premium comfort and vision correction in one
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestLovedLensesProducts.slice(activeLensSlide, activeLensSlide + 4).map((p, i) => (
              <ProductCard key={i} {...p} />
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="https://haveneye.simplybook.me/v2/" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#3d6b1f] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#2d5016] transition-colors">
              Get Fitted for Contact Lenses
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Product;