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
      text: 'The 2-for-1 offer let me get both work frames and casual sunglasses. The fitting service was excellent and my new glasses are perfect.',
      avatar: '👩‍🦱',
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real experiences from people who trust Haven Eye Ltd with their vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#f5f1e8] p-8 rounded-xl border-l-4 border-[#3d6b1f] hover:shadow-lg transition-shadow"
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
              <div className="flex items-center mt-4 text-[#3d6b1f]">
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
