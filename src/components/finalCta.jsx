import React from 'react';

const FinalCta = () => {
  return (
    <div className="bg-linear-to-r from-[#1d4f91] to-[#133f72] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
          Ready When You Are
        </h2>
        <p className="text-white/90 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
          Your vision is our priority. Take the first step toward better eye health with a comprehensive exam and advanced OCT scanning.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://haveneye.simplybook.me/v2/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#eef4fb] text-[#133f72] font-semibold py-4 px-10 rounded-full hover:bg-white transition-colors text-lg hover:shadow-lg"
          >
            Book Your Appointment Today
          </a>
          <a
            href="#contact-info"
            className="border-2 border-white text-white font-semibold py-4 px-10 rounded-full hover:bg-white/10 transition-colors text-lg"
          >
            Find Our Location
          </a>
        </div>

        <p className="text-white/80 text-sm">
          Questions? <a href="https://wa.me/233557767766" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Chat with us on WhatsApp</a>
        </p>
      </div>
    </div>
  );
};

export default FinalCta;
