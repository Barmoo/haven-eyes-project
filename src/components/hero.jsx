import React, { useState } from "react";

const Hero = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20 flex justify-center">
      
      <div className="w-full max-w-5xl text-center">

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0066cc] font-bold leading-tight mb-8">
          Book Your Appointments Today
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4 sm:gap-5">

          {/* Book Eye Test - Direct Link */}
          <a
            href="https://haveneye.simplybook.me/v2/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#0066cc] text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-700 transition text-sm sm:text-base shadow-sm"
          >
            Book an eye test
          </a>

          {/* Appointment booking button */}
          <a
            href="https://haveneye.simplybook.me/v2/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white border border-[#0066cc] text-[#0066cc] py-3 px-6 rounded-full font-semibold hover:bg-[#0066cc] hover:text-white transition text-sm sm:text-base shadow-sm"
          >
            Book an appointment
          </a>

          {/* Location Button */}
          <button
            onClick={() => {
              setShowMap(!showMap);
            }}
            className="w-full sm:w-auto bg-[#0066cc] text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-700 transition text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm"
          >
            📍 {showMap ? "Hide Map" : "View Location"}
          </button>

        </div>

        {/* Calendar Section - Removed as InlineWidget is Calendly-specific */}

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