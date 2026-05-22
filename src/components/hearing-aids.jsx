import React from 'react';

const HearingAids = () => {
  return (
    <div className="flex flex-col w-full bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 text-center bg-linear-to-br from-[#1d4f91] to-[#133f72] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="text-6xl mb-4">🎧</div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Hearing Aid Solutions
          </h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
            Comprehensive hearing care services complementing our eye care expertise.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <div className="flex items-center justify-center">
              <img
                src="/images/Hearing aid promise/HAP.png"
                alt="Hearing aids"
                className="rounded-lg shadow-lg max-w-full"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Hearing Aid Promise
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Found a comparable hearing aid at a lower price elsewhere? We'll match the difference double. We stand behind our commitment to provide the best value and service for your hearing health.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Price Guarantee</h3>
                    <p className="text-gray-600">Find it cheaper? We'll double the difference.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Fitting</h3>
                    <p className="text-gray-600">Professional fitting and adjustment services.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ongoing Support</h3>
                    <p className="text-gray-600">Lifetime follow-up care and maintenance.</p>
                  </div>
                </div>
              </div>

              <a
                href="https://haveneye.simplybook.me/v2/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1d4f91] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#133f72] transition-colors inline-block"
              >
                Book a Hearing Consultation
              </a>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="bg-[#eef4fb] rounded-lg p-8">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
              Why Choose Haven for Hearing Aids?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-xl">🎯</span> Personalized Solutions
                </h4>
                <p className="text-gray-700">Custom-fitted hearing aids tailored to your specific hearing needs and lifestyle.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-xl">💡</span> Latest Technology
                </h4>
                <p className="text-gray-700">Access to cutting-edge hearing aid technology from leading manufacturers.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-xl">🤝</span> Expert Audiologists
                </h4>
                <p className="text-gray-700">Compassionate care from experienced hearing specialists.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-xl">🛡️</span> Satisfaction Guarantee
                </h4>
                <p className="text-gray-700">30-day trial period to ensure your hearing aids meet your needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#eef4fb] px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
          Ready to Improve Your Hearing?
        </h3>
        <p className="text-gray-600 mb-6">
          Schedule a free hearing assessment with our specialists today.
        </p>
        <a
          href="https://wa.me/233557767766?text=Hello%20I%20want%20to%20book%20a%20hearing%20aid%20consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#1d4f91] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#133f72] transition-colors"
        >
          Contact Us on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default HearingAids;
