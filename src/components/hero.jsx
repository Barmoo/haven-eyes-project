import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <section className="py-8 sm:py-12 lg:py-16 flex items-center justify-center bg-gray-50 px-4 sm:px-6">
      <div className="max-w-6xl w-full text-center">

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-[#004B2E] font-bold mb-6 sm:mb-8">
          Book Your Appointments Today
        </h1>

        {/* Buttons Row */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center items-center flex-wrap">

          <Link to="/book-eye-test">
            <button className="w-full sm:w-auto bg-[#004B2E] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full font-semibold hover:bg-green-700 transition text-sm sm:text-base">
              Book an eye test
            </button>
          </Link>

          <Link to="/book-contact-lens">
            <button className="w-full sm:w-auto bg-[#004B2E] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full font-semibold hover:bg-green-700 transition text-sm sm:text-base">
              Book a contact lens
            </button>
          </Link>

          {/* View Location Button (now inline) */}
          <button
            onClick={() => setShowMap(!showMap)}
            className="w-full sm:w-auto bg-[#004B2E] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full font-semibold hover:bg-green-700 transition text-sm sm:text-base flex items-center gap-2 justify-center"
          >
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
            </svg>

            {showMap ? "Hide Map" : "View Location"}
          </button>

        </div>

        {/* Map appears BELOW buttons */}
        {showMap && (
          <div className="mt-8 w-full max-w-3xl mx-auto h-80 sm:h-96 rounded-xl overflow-hidden shadow-2xl border border-gray-100 animate-fadeIn">
            <iframe
              title="Haven Eye location map"
              src="https://maps.google.com/maps?q=No.+22+Ambassadorial+Enclave+Adjacent+Bank+of+Ghana+Building+Accra&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        )}

      </div>
    </section>
  );
};

export default Hero;