import React from 'react';
import { Users, Award, Clock } from 'lucide-react';

const TrustSignals = () => {
  const signals = [
    {
      icon: <Users size={40} />,
      stat: '100+',
      label: 'Patients Served',
      description: 'Trusted by many in Greater Accra',
    },
    {
      icon: <Award size={40} />,
      stat: '★★★★★',
      label: '4.9 Rating',
      description: 'Based on 100+ patient reviews',
    },
    {
      icon: <Clock size={40} />,
      stat: 'Newly Opened',
      label: 'Experienced Optometrists',
      description: 'Dedicated to eye care excellence',
    },
  ];

  return (
    <div className="bg-[#eef4fb] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {signals.map((signal, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-[#1d4f91] mb-4">
                {signal.icon}
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-2">
                {signal.stat}
              </h3>
              <p className="text-lg font-semibold text-gray-800 mb-2">
                {signal.label}
              </p>
              <p className="text-gray-600 text-sm">
                {signal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustSignals;
