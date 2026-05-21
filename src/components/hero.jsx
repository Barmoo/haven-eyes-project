import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const Hero = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <section id="hero-section" className="bg-linear-to-br from-[#f5f1e8] to-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32 flex justify-center">
      
      <div className="w-full max-w-5xl text-center">

        {/* Heading - Premium Clinical Aesthetic */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 font-serif font-bold leading-tight mb-6">
          Your Vision, Our Mission
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Expert eye care with advanced OCT scanning technology. Detect eye diseases early and protect your vision.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4 sm:gap-5 mb-12">

          {/* Primary CTA - Book Appointment */}
          <a
            href="https://haveneye.simplybook.me/v2/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#3d6b1f] text-white py-4 px-8 rounded-full font-semibold hover:bg-[#2d5016] transition-all text-base sm:text-lg shadow-lg hover:shadow-xl"
          >
            Book Your Eye Test
          </a>

          {/* Secondary CTA - View Services */}
          <Link
            to="/services"
            className="w-full sm:w-auto bg-white border-2 border-[#3d6b1f] text-[#3d6b1f] py-4 px-8 rounded-full font-semibold hover:bg-[#3d6b1f] hover:text-white transition-all text-base sm:text-lg shadow-md"
          >
            Explore Services
          </Link>

          {/* Location Button */}
          <button
            onClick={() => setShowMap(!showMap)}
            className="w-full sm:w-auto bg-[#f5f1e8] border-2 border-gray-300 text-gray-700 py-4 px-8 rounded-full font-semibold hover:border-[#3d6b1f] hover:text-[#3d6b1f] transition-all text-base sm:text-lg flex items-center justify-center gap-2 shadow-md"
          >
            <MapPin size={20} /> View Our Location
          </button>

        </div>

        {/* Map Section - Embedded */}
        {showMap && (
          <div className="mt-12 w-full flex flex-col items-center">
            <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl border-4 border-[#3d6b1f]">
              <iframe
                title="Haven Eye Ltd location map"
                src="https://maps.google.com/maps?q=No.+22+Ambassadorial+Enclave+Adjacent+Bank+of+Ghana+Building+Accra&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen=""
              ></iframe>
            </div>
            <p className="text-gray-600 text-sm font-semibold mt-4">
              Ridge, Accra • Next to Bank of Ghana Building
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Hero;