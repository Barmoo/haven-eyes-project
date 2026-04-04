import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 flex items-center justify-center bg-gray-50 px-4 sm:px-6">
      <div className="max-w-6xl w-full text-center">

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-[#004B2E] font-bold mb-6 sm:mb-8">
          Book Your Appointments Today
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-6xl justify-center mx-auto flex-wrap">
          <Link to="/book-eye-test">
            <button className="w-full sm:w-auto bg-[#004B2E] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full font-semibold hover:bg-green-700 transition text-sm sm:text-base">
              Book an eye test
            </button>
          </Link>

          <Link to="/book-hearing-test">
            <button className="w-full sm:w-auto bg-[#004B2E] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full font-semibold hover:bg-green-700 transition text-sm sm:text-base">
              Book a hearing test
            </button>
          </Link>

          <Link to="/book-contact-lens">
            <button className="w-full sm:w-auto bg-[#004B2E] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full font-semibold hover:bg-green-700 transition text-sm sm:text-base">
              Book a contact lens
            </button>
          </Link>

          <Link to="/request-home-visit">
            <button className="w-full sm:w-auto bg-[#004B2E] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full font-semibold hover:bg-green-700 transition text-sm sm:text-base">
              Request a home visit
            </button>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default Hero;