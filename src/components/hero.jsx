import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20 flex justify-center">
      
      <div className="w-full max-w-5xl text-center">

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#004B2E] font-bold leading-tight mb-8">
          Book Your Appointments Today
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4 sm:gap-5">

          <Link to="/book-eye-test" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[#004B2E] text-white py-3 px-6 rounded-full font-semibold hover:bg-green-700 transition text-sm sm:text-base shadow-sm">
              Book an eye test
            </button>
          </Link>

          <Link to="/book-contact-lens" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[#004B2E] text-white py-3 px-6 rounded-full font-semibold hover:bg-green-700 transition text-sm sm:text-base shadow-sm">
              Book a contact lens
            </button>
          </Link>

          {/* Location Button */}
          <button
            onClick={() => setShowMap(!showMap)}
            className="w-full sm:w-auto bg-[#004B2E] text-white py-3 px-6 rounded-full font-semibold hover:bg-green-700 transition text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm"
          >
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

        {/* Map Section */}
        {showMap && (
          <div className="mt-10 w-full flex justify-center">
            <div className="w-full max-w-3xl h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-xl border border-gray-200">
              <iframe
                title="Haven Eye location map"
                src="https://maps.google.com/maps?q=No.+22+Ambassadorial+Enclave+Adjacent+Bank+of+Ghana+Building+Accra&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Hero;