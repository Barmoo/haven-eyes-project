import React from 'react';

const services = [
    {
        title: "Home eye tests available",
        description:
            "Our team of mobile opticians provide a comprehensive eyecare service to those who cannot get to one of our stores unaccompanied.",
        link: "Find out more",
        image: "/images/help/Home-eye.png",
    },
    {
        title: "Myopia management",
        description:
            "Myopia, also known as being near-sighted or short-sighted, is a very common cause of blurred vision. At Specsavers, we can offer glasses lenses or contact lenses to help minimise the progression of myopia in children.",
        link: "Find out more",
        image: "/images/help/Myopia-management.png",
    },
    {
        title: "Optical Coherence Tomography",
        description:
            "An Optical Coherence Tomography scan helps us to view the health of your eyes in greater detail.",
        link: "Read more about OCT",
        image: "/images/help/Optical-Coherence .png",
    },
];

const Service = () => {
    return (
        <div className="flex flex-col w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-8 lg:mb-10">
                Other ways we can help
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex flex-col border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
                    >
                        {/* Image */}
                        <img src={service.image} alt={service.title} className="w-full h-40 sm:h-48 lg:h-56 object-cover" />

                        {/* Text content */}
                        <div className="flex flex-col flex-1 px-4 sm:px-5 lg:px-6 py-4 sm:py-5 lg:py-6">
                            <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                                {service.title}
                            </h3>
                            <p className="text-xs sm:text-sm leading-relaxed flex-1 text-gray-600">
                                {service.description}
                            </p>
                            <a
                                href="#"
                                className="mt-4 sm:mt-6 text-green-800 font-semibold underline flex items-center gap-2 text-xs sm:text-sm"
                            >
                                {service.link}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Service;