import React, { useState, useEffect } from "react";

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

const ProductCard = ({ brand, model, price, image }) => (
  <div className="flex flex-col border border-gray-200 rounded-lg flex-1 mx-1 sm:mx-2 overflow-hidden">
    <img src={image} alt={brand} className="h-32 sm:h-40 lg:h-48 w-full object-contain bg-white" />
    <div className="p-2 sm:p-3 lg:p-4">
      <p className="font-bold text-gray-900 text-xs sm:text-sm lg:text-base">{brand}</p>
      <p className="text-gray-500 text-xs uppercase tracking-wide mt-1">{model}</p>
      <p className="font-semibold text-gray-900 mt-1 text-xs sm:text-sm">{price}</p>
    </div>
  </div>
);

const GlassesIcon = () => (
  <svg width="80" height="48" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="28" r="16" stroke="#1a1a1a" strokeWidth="6" fill="none" />
    <circle cx="60" cy="28" r="16" stroke="#1a1a1a" strokeWidth="6" fill="none" />
    <path d="M36 28 Q40 22 44 28" stroke="#1a1a1a" strokeWidth="5" fill="none" strokeLinecap="round" />
    <path d="M4 28 Q2 18 1 12" stroke="#1a1a1a" strokeWidth="5" fill="none" strokeLinecap="round" />
    <path d="M76 28 Q78 18 79 12" stroke="#1a1a1a" strokeWidth="5" fill="none" strokeLinecap="round" />
  </svg>
);

const LensIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M30 4 C50 4 56 30 30 56 C4 30 10 4 30 4Z"
      stroke="#1a1a1a"
      strokeWidth="6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Product = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeLensSlide, setActiveLensSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev >= glassesProducts.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-full">

      {/* Section 1 - Our freshest frames */}
      <div className="flex flex-col px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-2 sm:mb-3">
          Our freshest frames
        </h2>
        <p className="text-center text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
          Explore our most popular styles, from in-house looks to top designer picks. There's sure to be something for you.
        </p>

        {/* Carousel */}
        <div className="flex flex-row items-center gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8">
          {/* Left arrow */}
          <button
            onClick={() => setActiveSlide(Math.max(0, activeSlide - 1))}
            className="p-1 sm:p-2 text-gray-400 hover:text-gray-600 disabled:text-gray-300 shrink-0"
            disabled={activeSlide === 0}
          >
            <svg width="24" height="24" className="sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          {/* Products carousel */}
          <div className="flex-1 overflow-hidden">
            <div className="flex flex-row gap-2 sm:gap-3 lg:gap-4">
              {glassesProducts.slice(activeSlide, Math.min(activeSlide + 2, glassesProducts.length)).map((product, index) => (
                <div key={activeSlide + index} className="hidden sm:block flex-none w-1/2 sm:w-1/3 lg:w-1/4">
                  <ProductCard {...product} />
                </div>
              ))}
              {glassesProducts.length > 0 && (
                <div key="mobile" className="sm:hidden flex-none w-full">
                  <ProductCard {...glassesProducts[activeSlide]} />
                </div>
              )}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={() => setActiveSlide(Math.min(glassesProducts.length - 1, activeSlide + 1))}
            className="p-1 sm:p-2 text-gray-400 hover:text-gray-600 disabled:text-gray-300 shrink-0"
            disabled={activeSlide >= glassesProducts.length - 1}
          >
            <svg width="24" height="24" className="sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex flex-row justify-center gap-2 mb-6 sm:mb-8">
          {Array.from({ length: glassesProducts.length }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-2 h-2 rounded-full transition ${activeSlide === index ? "bg-green-700" : "bg-gray-300"}`}
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-8 lg:mt-10">
          <button className="border-2 border-green-800 text-green-800 font-semibold rounded-full px-6 sm:px-8 lg:px-10 py-2 sm:py-3 hover:bg-green-50 transition text-sm sm:text-base">
            Browse glasses
          </button>
          <button className="border-2 border-green-800 text-green-800 font-semibold rounded-full px-6 sm:px-8 lg:px-10 py-2 sm:py-3 hover:bg-green-50 transition text-sm sm:text-base">
            Browse sunglasses
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 mx-4 sm:mx-6 lg:mx-8" />

      {/* Section 2 - Our best-loved contact lenses */}
      <div className="flex flex-col px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-2 sm:mb-3">
          Our best-loved contact lenses
        </h2>
        <p className="text-center text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
          Looking for great value contact lenses? You've come to the right place – buy yours in store or online.
        </p>

        {/* Carousel */}
        <div className="flex flex-row items-center gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8">
          {/* Left arrow */}
          <button
            onClick={() => setActiveLensSlide(Math.max(0, activeLensSlide - 1))}
            className="p-1 sm:p-2 text-gray-400 hover:text-gray-600 disabled:text-gray-300 shrink-0"
            disabled={activeLensSlide === 0}
          >
            <svg width="24" height="24" className="sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          {/* Products carousel */}
          <div className="flex-1 overflow-hidden">
            <div className="flex flex-row gap-2 sm:gap-3 lg:gap-4">
              {bestLovedLensesProducts.slice(activeLensSlide, Math.min(activeLensSlide + 2, bestLovedLensesProducts.length)).map((product, index) => (
                <div key={activeLensSlide + index} className="hidden sm:block flex-none w-1/2 sm:w-1/3 lg:w-1/4">
                  <ProductCard {...product} />
                </div>
              ))}
              {bestLovedLensesProducts.length > 0 && (
                <div key="mobile" className="sm:hidden flex-none w-full">
                  <ProductCard {...bestLovedLensesProducts[activeLensSlide]} />
                </div>
              )}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={() => setActiveLensSlide(Math.min(bestLovedLensesProducts.length - 1, activeLensSlide + 1))}
            className="p-1 sm:p-2 text-gray-400 hover:text-gray-600 disabled:text-gray-300 shrink-0"
            disabled={activeLensSlide >= bestLovedLensesProducts.length - 1}
          >
            <svg width="24" height="24" className="sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex flex-row justify-center gap-2 mb-6 sm:mb-8">
          {Array.from({ length: Math.ceil(bestLovedLensesProducts.length / 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveLensSlide(index * 2)}
              className={`w-2 h-2 rounded-full transition ${activeLensSlide === index * 2 ? "bg-green-700" : "bg-gray-300"}`}
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-8">
          <button className="border-2 border-green-800 text-green-800 font-semibold rounded-full px-6 sm:px-8 lg:px-10 py-2 sm:py-3 hover:bg-green-50 transition text-sm sm:text-base">
            Shop contact lenses
          </button>
          <button className="border-2 border-green-800 text-green-800 font-semibold rounded-full px-6 sm:px-8 lg:px-10 py-2 sm:py-3 hover:bg-green-50 transition text-sm sm:text-base">
            Express re-order
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 mx-4 sm:mx-6 lg:mx-8" />

      {/* Section 3 - Offers banner */}
      <div className="flex flex-col lg:flex-row w-full bg-gray-100">

        {/* Left - Complete glasses */}
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 w-full lg:w-1/2 px-4 sm:px-8 lg:px-16 py-8 sm:py-12 lg:py-16">
          <div className="mt-1 shrink-0 hidden sm:block">
            <GlassesIcon />
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
              Complete glasses from GH₵ 255
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-3 sm:mb-4">
              Stylish frames including single vision lenses and scratch-resistant treatment from just GH₵ 255 a pair
            </p>
            <a href="#" className="text-green-800 font-semibold underline flex items-center gap-1 text-xs sm:text-sm">
              Find out more <span>›</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px bg-gray-300 my-12" />
        <hr className="block lg:hidden border-gray-300 mx-4" />

        {/* Right - Contact lens free trial */}
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 w-full lg:w-1/2 px-4 sm:px-8 lg:px-16 py-8 sm:py-12 lg:py-16">
          <div className="mt-1 shrink-0 hidden sm:block">
            <LensIcon />
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
              Contact lens free trial
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-3 sm:mb-4">
              We're confident that you'll enjoy wearing contact lenses, but we want you to be sure too. That's why we let you try before you buy.
            </p>
            <a href="#" className="text-green-800 font-semibold underline flex items-center gap-1 text-xs sm:text-sm">
              Find out more <span>›</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Product;