import React from 'react';

const OctBanner = () => {
  return (
    <div className="bg-linear-to-r from-[#1d4f91] to-[#133f72] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Left: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
            Advanced OCT Eye Scanning
          </h2>
          <p className="text-white/90 text-lg mb-6 leading-relaxed">
            Detect serious eye conditions like glaucoma up to 5 years earlier than traditional methods. Our OCT technology provides 3D imaging of the back of your eye for comprehensive eye health assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://haveneye.simplybook.me/v2/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#eef4fb] text-[#133f72] font-semibold py-3 px-8 rounded-full hover:bg-white transition-colors text-base"
            >
              Book OCT Scan
            </a>
            <a
              href="https://wa.me/233557767766?text=Hello%20I%20want%20to%20learn%20about%20OCT%20eye%20tests"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white/10 transition-colors text-base"
            >
              Learn More
            </a>
          </div>
          <p className="text-white/80 text-sm mt-6 font-semibold">
            from GH₵1,500 • Non-invasive • Takes 15-20 minutes
          </p>
        </div>

        {/* Right: Visual */}
        <div className="flex-1">
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-white/5">
              <img
                src="/images/oct-scan/image.png"
                alt="OCT scan sample"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OctBanner;
