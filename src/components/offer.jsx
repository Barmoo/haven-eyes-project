import React from 'react';
import { Link } from 'react-router-dom';

const Offer = () => {
    return (
        <div className="flex flex-col w-full bg-[#eef4fb]">

            {/* Header */}
            <div className="flex flex-col items-center text-center px-4 sm:px-6 py-10 sm:py-16 mb-4 lg:mb-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4 sm:mb-6">
                    Our Premium 2-for-1 Offer
                </h2>
                <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                    Get two pairs of premium glasses for the price of one. Mix and match styles, pick work frames and casual sunglasses, or choose any combination you prefer.
                </p>
            </div>

            {/* Offer 1 - 2 for 1 (text left, image right) */}
            <div className="flex flex-col lg:flex-row w-full min-h-auto lg:min-h-96">

                {/* Left - Text */}
                <div className="flex flex-col justify-center w-full lg:w-1/2 px-4 sm:px-8 lg:px-16 py-10 sm:py-16 lg:py-20">
                    <span className="text-xs sm:text-sm font-semibold text-[#1d4f91] uppercase tracking-widest mb-3 sm:mb-4">
                        Exclusive Offer
                    </span>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                        Two Pairs, One Price
                    </h3>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                        Why settle for one pair of glasses? Mix and match from our premium collection. Get a pair for work, one for everyday wear, prescription sunglasses, or any combination you love. Every second pair is completely free.
                    </p>
                    <ul className="space-y-3 mb-8 text-gray-700">
                        <li className="flex items-start gap-3">
                            <span className="text-lg font-bold text-[#1d4f91]">✓</span>
                            <span>Free choice on the second pair</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-lg font-bold text-[#1d4f91]">✓</span>
                            <span>Premium designer frames included</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-lg font-bold text-[#1d4f91]">✓</span>
                            <span>Full eye test and fitting included</span>
                        </li>
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/glasses" className="bg-[#1d4f91] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#133f72] transition-colors text-center">
                            Browse Frames
                        </Link>
                        <a href="https://haveneye.simplybook.me/v2/" target="_blank" rel="noopener noreferrer" className="border-2 border-[#1d4f91] text-[#1d4f91] font-semibold py-3 px-8 rounded-full hover:bg-[#1d4f91] hover:text-white transition-colors text-center">
                            Claim Offer
                        </a>
                    </div>
                </div>

                {/* Right - Image */}
                <div className="w-full lg:w-1/2 min-h-64 sm:min-h-80 lg:min-h-96 flex justify-center items-center px-4 sm:pr-6 lg:pr-6 mt-8 lg:mt-0">
                    <img src="/images/offers/offe.png" alt="2 for 1 offers" className="w-full max-w-sm sm:max-w-none h-full object-cover rounded-lg shadow-lg" />
                </div>

            </div>

        </div>
    );
};

export default Offer;