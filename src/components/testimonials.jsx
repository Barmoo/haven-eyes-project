import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ama Asare',
      role: 'Patient',
      text: 'The OCT scan detected early glaucoma that would have been missed by traditional tests. The team explained everything clearly and made me feel at ease.',
      avatar: '👩',
    },
    {
      name: 'Kwame Mensah',
      role: 'Patient',
      text: 'Best eye clinic in Accra. Professional service, advanced equipment, and the staff really cares about your vision health. Highly recommended!',
      avatar: '👨',
    },
    {
      name: 'Abena Osei',
      role: 'Patient',
      text: 'The fitting service was excellent and I left with glasses that feel premium, comfortable, and exactly right for my everyday needs.',
      avatar: '👩‍🦱',
    },
  ];

  const insurancePartners = [
    { name: 'Insurance Partner 1', src: '/images/insurance/image1.png' },
    { name: 'Insurance Partner 2', src: '/images/insurance/image2.png' },
    { name: 'Insurance Partner 3', src: '/images/insurance/image3.png' },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real experiences from people who trust Haven Eye Ltd with their vision.
          </p>
        </div>

        <div className="mb-12 rounded-[28px] border border-[#dce8f5] bg-gradient-to-br from-[#f7fbff] via-white to-[#eef4fb] p-6 sm:p-8 shadow-[0_20px_60px_-25px_rgba(29,79,145,0.35)]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1d4f91] mb-2">
                Insurance support
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Trusted by leading health providers
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We help patients coordinate their eye care with major insurance plans so appointments feel seamless and stress-free.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 flex-1">
              {insurancePartners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex h-28 items-center justify-center rounded-2xl border border-[#dce8f5] bg-white/90 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <img
                    src={partner.src}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#eef4fb] p-8 rounded-xl border-l-4 border-[#1d4f91] hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{testimonial.avatar}</span>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-base leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center mt-4 text-[#1d4f91]">
                {'★'.repeat(5)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
