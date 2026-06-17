import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const Hero = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <section id="hero-section" className="bg-linear-to-br from-[#eef4fb] to-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
      <div className="w-full max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">

        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 font-serif font-bold leading-tight mb-6">
            Your Vision, Our Mission
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Expert eye care with advanced OCT scanning technology. Detect eye diseases early and protect your vision with compassionate, family-focused service.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-5 mb-10">
            <a
              href="https://haveneye.simplybook.me/v2/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#1d4f91] text-white py-4 px-8 rounded-full font-semibold hover:bg-[#133f72] transition-all text-base sm:text-lg shadow-lg hover:shadow-xl"
            >
              Book Your Eye Test
            </a>
            <Link
              to="/services"
              className="w-full sm:w-auto bg-white border-2 border-[#1d4f91] text-[#1d4f91] py-4 px-8 rounded-full font-semibold hover:bg-[#1d4f91] hover:text-white transition-all text-base sm:text-lg shadow-md"
            >
              Explore Services
            </Link>
            <button
              onClick={() => setShowMap(!showMap)}
              className="w-full sm:w-auto bg-[#eef4fb] border-2 border-gray-300 text-gray-700 py-4 px-8 rounded-full font-semibold hover:border-[#1d4f91] hover:text-[#1d4f91] transition-all text-base sm:text-lg flex items-center justify-center gap-2 shadow-md"
            >
              <MapPin size={20} /> View Our Location
            </button>
          </div>

          {showMap && (
            <div className="mt-2 w-full flex flex-col items-center lg:items-start">
              <div className="w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-[#1d4f91]">
                <iframe
                  title="Haven Eye Ltd location map"
                  src="https://maps.google.com/maps?q=No.+22+Ambassadorial+Enclave+Adjacent+Bank+of+Ghana+Building+Accra&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="350"
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

        <div className="relative">
          <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-[#daf0ff]/70 blur-3xl" />
          <div className="absolute bottom-6 right-6 w-24 h-24 rounded-full bg-[#1d4f91]/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(29,79,145,0.18)] border border-white bg-white">
            <img
              src="/images/offers/father's day.jpeg"
              alt="Father's Day eye care offer at Haven Eye"
              className="w-full h-[420px] sm:h-[520px] md:h-[600px] object-contain"
              loading="lazy"
            />
          </div>

          <div className="absolute bottom-8 left-6 bg-white/95 backdrop-blur-md border border-slate-200 rounded-3xl px-5 py-4 shadow-xl max-w-xs">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500 mb-2">Father's Day Offer</p>
            <p className="text-lg font-semibold text-slate-900 leading-tight">
              See the full offer with premium father-friendly care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;