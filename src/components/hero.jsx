import React, { useState } from "react";
import { InlineWidget } from "react-calendly";

const Hero = () => {
  const [showMap, setShowMap] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20 flex justify-center">
      
      <div className="w-full max-w-5xl text-center">

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#004B2E] font-bold leading-tight mb-8">
          Book Your Appointments Today
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4 sm:gap-5">

          {/* Book Eye Test (Calendar toggle) */}
          <button
            onClick={() => {
              setShowCalendar(!showCalendar);
              setShowMap(false);
            }}
            className="w-full sm:w-auto bg-[#004B2E] text-white py-3 px-6 rounded-full font-semibold hover:bg-green-700 transition text-sm sm:text-base shadow-sm"
          >
            {showCalendar ? "Close Booking" : "Book an eye test"}
          </button>

          {/* Appointment booking button */}
          <a
            href="https://calendly.com/haveneyeltd-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white border border-[#004B2E] text-[#004B2E] py-3 px-6 rounded-full font-semibold hover:bg-[#004B2E] hover:text-white transition text-sm sm:text-base shadow-sm"
          >
            Book an appointment
          </a>

          {/* Location Button */}
          <button
            onClick={() => {
              setShowMap(!showMap);
              setShowCalendar(false);
            }}
            className="w-full sm:w-auto bg-[#004B2E] text-white py-3 px-6 rounded-full font-semibold hover:bg-green-700 transition text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm"
          >
            📍 {showMap ? "Hide Map" : "View Location"}
          </button>

        </div>

        {/* Calendar Section */}
        {showCalendar && (
          <div className="mt-10 w-full flex justify-center">
            <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              
              {/* Header */}
              <div className="bg-[#004B2E] text-white py-4 text-center font-semibold">
                Select a Date & Time (8AM – 5PM GMT)
              </div>

              {/* Calendly Embed */}
              <InlineWidget
                url="https://calendly.com/haveneyeltd-info/30min"
                styles={{ height: "650px" }}
              />
            </div>
          </div>
        )}

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