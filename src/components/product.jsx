import React, { useState } from "react";

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

/* ---------------- CARD ---------------- */
const ProductCard = ({ brand, model, price, image }) => (
  <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
    
    {/* Image */}
    <div className="h-48 flex items-center justify-center bg-gray-50 p-4">
      <img
        src={image}
        alt={brand}
        className="max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* Text */}
    <div className="p-4 text-center">
      <p className="font-semibold text-gray-900 text-sm">{brand}</p>
      <p className="text-gray-500 text-xs uppercase tracking-wide mt-1">{model}</p>
      <p className="font-bold text-[#004B2E] mt-2 text-sm">{price}</p>
    </div>
  </div>
);

/* ---------------- MAIN COMPONENT ---------------- */
const Product = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeLensSlide, setActiveLensSlide] = useState(0);

  return (
    <div className="flex flex-col w-full">

      {/* -------- Section 1 -------- */}
      <div className="px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
          Our freshest frames
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Explore our most popular styles, from in-house looks to top designer picks. There's sure to be something for you.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {glassesProducts
            .slice(activeSlide, activeSlide + 4)
            .map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => setActiveSlide(Math.max(0, activeSlide - 4))}
            disabled={activeSlide === 0}
            className="px-5 py-2 border rounded-full hover:bg-gray-100 disabled:opacity-30"
          >
            ← Prev
          </button>

          <button
            onClick={() =>
              setActiveSlide(
                activeSlide + 4 >= glassesProducts.length
                  ? activeSlide
                  : activeSlide + 4
              )
            }
            disabled={activeSlide + 4 >= glassesProducts.length}
            className="px-5 py-2 border rounded-full hover:bg-gray-100 disabled:opacity-30"
          >
            Next →
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: Math.ceil(glassesProducts.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index * 4)}
              className={`w-2 h-2 rounded-full ${
                activeSlide === index * 4 ? "bg-[#004B2E]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-10">
          <button className="border-2 border-green-800 text-green-800 font-semibold rounded-full px-8 py-3 hover:bg-green-50">
            Browse glasses
          </button>
          <button className="border-2 border-green-800 text-green-800 font-semibold rounded-full px-8 py-3 hover:bg-green-50">
            Browse sunglasses
          </button>
        </div>
      </div>

      <hr className="border-gray-200 mx-6" />

      {/* -------- Section 2 -------- */}
      <div className="px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
          Our best-loved contact lenses
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Looking for great value contact lenses? You've come to the right place – buy yours in store or online.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestLovedLensesProducts
            .slice(activeLensSlide, activeLensSlide + 4)
            .map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => setActiveLensSlide(Math.max(0, activeLensSlide - 4))}
            disabled={activeLensSlide === 0}
            className="px-5 py-2 border rounded-full hover:bg-gray-100 disabled:opacity-30"
          >
            ← Prev
          </button>

          <button
            onClick={() =>
              setActiveLensSlide(
                activeLensSlide + 4 >= bestLovedLensesProducts.length
                  ? activeLensSlide
                  : activeLensSlide + 4
              )
            }
            disabled={activeLensSlide + 4 >= bestLovedLensesProducts.length}
            className="px-5 py-2 border rounded-full hover:bg-gray-100 disabled:opacity-30"
          >
            Next →
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: Math.ceil(bestLovedLensesProducts.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveLensSlide(index * 4)}
              className={`w-2 h-2 rounded-full ${
                activeLensSlide === index * 4 ? "bg-[#004B2E]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-10">
          <button className="border-2 border-green-800 text-green-800 font-semibold rounded-full px-8 py-3 hover:bg-green-50">
            Shop contact lenses
          </button>
          <button className="border-2 border-green-800 text-green-800 font-semibold rounded-full px-8 py-3 hover:bg-green-50">
            Express re-order
          </button>
        </div>
      </div>

    </div>
  );
};

export default Product;