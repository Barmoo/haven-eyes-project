import React from "react";

const policies = [
  "Child Labour Policy",
  "Code of Conduct and Grievance Policy",
  "Gifts and Hospitality Policy",
  "Human Rights Policy",
  "Anti-Abuse and Anti-Discrimination Policy",
];

const clientele = [
  "Banks",
  "Schools",
  "Religious Institutions",
  "Individual Clients",
  "Older Adults",
];

const About = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero banner */}
      <div className="bg-[#0066cc] text-white py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-3">About Haven Eye Ltd</h1>
        <p className="text-blue-200 text-sm sm:text-base max-w-xl mx-auto">
          Leading eye diagnostic and imaging center in Accra
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-14 space-y-14">

        {/* Vision */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#0066cc] rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-900">Vision</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            To be the leading eye diagnostic and imaging center in Accra, recognized for clinical excellence, innovation, and accessible eye care.
          </p>
        </section>

        {/* Mission */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#0066cc] rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-900">Mission</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            To deliver timely, accurate, and affordable eye diagnostic and consulting services through advanced technology, skilled professionals, and patient-centered care.
          </p>
        </section>

        <hr className="border-gray-200" />

        {/* Policy */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#0066cc] rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-900">Policy on Environmental Health and Safety</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            Haven Eye Limited is committed to the protection of the environment and the maintenance of high standards of health and safety. Compliance with all applicable environmental, health, and safety laws and regulations is an integral part of our operations at every level of the organization. We also collaborate closely with our customers to ensure that our services consistently satisfy all relevant environmental, health, and safety requirements.
          </p>
          <p className="text-gray-700 font-medium mb-3">
            Haven Eye Limited's other policy statements are listed below:
          </p>
          <ul className="space-y-2">
            {policies.map((policy, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#0066cc] shrink-0\"></span>
                {policy}
              </li>
            ))}
          </ul>
        </section>

        <hr className="border-gray-200" />

        {/* Clientele */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#0066cc] rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-900\">Clientele</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            Haven Eye Limited provides services to the following client groups and institutions:
          </p>
          <ul className="space-y-2 mb-6">
            {clientele.map((client, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#0066cc] shrink-0\"></span>
                {client}
              </li>
            ))}
          </ul>
          <p className="text-gray-500 text-sm italic mb-6">
            Note: This list is not exhaustive. Haven Eye Limited also provides eye care services, upon request, to additional clients and sectors.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Haven Eye Limited has qualified eye care professionals and maintains strong partnerships with reputable local and international suppliers to deliver high-quality eye care equipment, medicines, and services. All our products and services comply with environmental, health, and safety standards, ensuring safe and effective eye care while delivering long-term value and reliable treatment outcomes for patients.
          </p>
        </section>

      </div>
    </div>
  );
};

export default About;