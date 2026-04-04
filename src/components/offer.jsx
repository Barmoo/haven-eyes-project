import React from 'react';

const Offer = () => {
    return (
        <div className="flex flex-col w-full">

            {/* Header */}
            <div className="flex flex-col items-center text-center px-4 sm:px-6 py-6 sm:py-10 mb-4 lg:mb-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Top offers</h2>
                <p className="text-gray-600 text-sm sm:text-base max-w-xl">
                    From glasses to hearing aids, here are some top offers from the world of Specsavers.
                </p>
            </div>

            {/* Offer 1 - 2 for 1 (text left, image right) */}
            <div className="flex flex-col lg:flex-row w-full min-h-auto lg:min-h-[500px]">

                {/* Left - Text */}
                <div className="flex flex-col justify-center w-full lg:w-1/2 px-4 sm:px-8 lg:px-16 py-6 sm:py-12 lg:py-16">
                    <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2 sm:mb-3">
                        Offer
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                        Our great 2 for 1 offers
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                        With 2 for 1 you can mix styles, switch looks and choose sunnies, safety specs or even contacts as one of your two. A pair for work, a pair for play. One for nightlife, one for the everyday. Why stop at one?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                        <a href="#" className="text-green-800 font-semibold underline flex items-center gap-1">
                            Check out 2 for 1 <span>›</span>
                        </a>
                        <a href="#" className="text-green-800 font-semibold underline flex items-center gap-1">
                            View glasses <span>›</span>
                        </a>
                    </div>
                </div>

                {/* Right - Image */}
                <div className="w-full lg:w-1/2 min-h-64 sm:min-h-80 lg:min-h-[500px] flex justify-center items-center px-4 sm:pr-6 lg:pr-6 mt-4 lg:mt-0">
                    <img src="/images/offers/offe.png" alt="2 for 1 offers" className="w-full max-w-sm sm:max-w-none h-full object-cover rounded-lg" />
                </div>

            </div>

            {/* Offer 2 - Hearing aid promise (image left, text right) */}
            <div className="flex flex-col lg:flex-row-reverse w-full min-h-auto lg:min-h-[500px] mt-8 sm:mt-12 lg:mt-16">

                {/* Left - Image */}
                <div className="w-full lg:w-1/2 min-h-64 sm:min-h-80 lg:min-h-[500px] flex justify-center items-center px-4 sm:pl-6 lg:pl-6 mb-4 lg:mb-0">
                    <img src="/images/Hearing aid promise/HAP.png" alt="Hearing aid promise" className="w-full max-w-sm sm:max-w-none h-full object-cover rounded-lg" />
                </div>

                {/* Right - Text */}
                <div className="flex flex-col justify-center w-full lg:w-1/2 px-4 sm:px-8 lg:px-16 py-6 sm:py-12 lg:py-16">
                    <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2 sm:mb-3">
                        Hearing Aids
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                        Hearing aid promise
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                        Found cheaper comparable hearing on the high street? We'll double the difference
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                        <a href="#" className="text-green-800 font-semibold underline flex items-center gap-1">
                            Browse <span>›</span>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Offer;