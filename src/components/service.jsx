import React from 'react';

const services = [
    {
        title: "Optical Coherence Tomography (OCT)",
        description: "Optical Coherence Tomography (OCT) is an advanced, non-invasive imaging test that uses light waves to capture cross-sectional pictures of the retina. This examination enables early detection and management of glaucoma, diabetic eye disease, and other ocular conditions compared to standard methods.",
        details: "OCT provides high-resolution images of the retina's layers, enabling detection of subtle changes that may indicate early disease. The procedure is painless, takes only minutes, and is essential for ongoing eye health monitoring.",
        image: "/images/help/Optical-Coherence .png",
        icon: "🔬",
    },
    {
        title: "Eye Test at Home",
        description: "Comprehensive eye examinations are available in the comfort of your home for those who are unable, for medical or mobility reasons, to visit our stores independently. Our mobile opticians bring all necessary equipment and expertise directly to you.",
        details: "Our home eye test service is available to older adults, individuals with mobility challenges, and busy professionals within our designated service area.",
        image: "/images/help/Home-eye.png",
        icon: "🏠",
    },
    {
        title: "Corporate and Insurance Eye Care",
        description: "We provide specialised eye care services for corporate clients and individuals whose eye examinations are covered by insurance. We also work with major insurance providers to help ensure appropriate coverage for vision care needs.",
        details: "Our offerings include routine eye examinations, specialized testing, and coordination with your insurance provider. We manage all paperwork to help you maximize your available eye care benefits.",
        image: "/images/frames/Specsavers.png",
        icon: "🏢",
    },
    {
        title: "Comprehensive Eye Examination",
        description: "A thorough evaluation of your visual system and eye health, including tests for vision, eye coordination, and detection of eye diseases. This is the foundation of good eye care.",
        details: "Includes visual acuity testing, refraction, eye muscle function testing, pupil response, and examination of the external and internal eye structures. Essential for maintaining optimal vision and detecting potential problems early.",
        image: "/images/frames/adidas.png",
        icon: "👁️",
    },
    {
        title: "Refraction",
        description: "The process of determining the exact prescription needed for glasses or contact lenses. This ensures you have the clearest possible vision correction.",
        details: "Using advanced equipment, we precisely measure how light bends as it enters your eye, determining the exact lens power needed to correct refractive errors like myopia, hyperopia, astigmatism, and presbyopia.",
        image: "/images/frames/hugo.png",
        icon: "📏",
    },
    {
        title: "Visual Field Test",
        description: "A test that measures your entire scope of vision, including peripheral vision. Essential for detecting glaucoma, neurological conditions, and other vision-threatening diseases.",
        details: "This automated test maps your visual field while you look at a central point. It helps detect blind spots or areas of reduced vision that may indicate serious conditions such as glaucoma or brain tumors.",
        image: "/images/frames/Kylie Minogue.png",
        icon: "🎯",
    },
    {
        title: "Pre-operative Ophthalmic Assessment",
        description: "Specialized eye examination performed before cataract surgery or other eye procedures to ensure optimal surgical outcomes and identify any potential risks.",
        details: "Includes detailed measurements of eye structures, assessment of corneal health, and evaluation of overall eye health. This helps surgeons plan the procedure and minimize complications.",
        image: "/images/frames/Aurora.png",
        icon: "⚕️",
    },
    {
        title: "Corporate and Insurance Eyecare Programs",
        description: "Comprehensive eye care programmes designed for businesses and organisations, including group insurance coverage and workplace eye health initiatives.",
        details: "We provide bulk eye examinations, vision screening programmes, and coordination with corporate health insurance providers. These services also include employee wellness initiatives focused on eye health and safety.",
        image: "/images/frames/Specsavers2.png",
        icon: "👥",
    },
    {
        title: "Pachymetry",
        description: "Measurement of corneal thickness is crucial for glaucoma management, contact lens fitting, and pre-operative assessment for refractive surgery.",
        details: "This quick, painless test measures the thickness of your cornea using ultrasound or optical methods. Corneal thickness is important for accurate glaucoma diagnosis and monitoring treatment effectiveness.",
        image: "/images/frames/Specsavers3.png",
        icon: "📊",
    },
];

const Service = () => {
    return (
        <div className="flex flex-col w-full bg-gray-50 min-h-screen">
            {/* -------- Header -------- */}
            <div className="px-4 sm:px-6 lg:px-8 py-16 text-center bg-linear-to-br from-[#0066cc] to-[#0073e6] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                    <div className="text-6xl mb-4">👁️</div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Our Eye Care Services
                    </h1>
                    <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
                        Comprehensive eye care services tailored to meet all your vision and eye health needs.
                        From routine examinations to advanced diagnostic testing, we provide professional care with the latest technology.
                    </p>
                </div>
            </div>

            {/* -------- Services Grid -------- */}
            <div className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                            >
                                {/* Image */}
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                                        <span className="text-2xl">{service.icon}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0066cc] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {service.description}
                                    </p>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        {service.details}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* -------- Call to Action -------- */}
            <div className="px-4 sm:px-6 lg:px-8 py-16 bg-linear-to-r from-[#0066cc] to-[#0073e6] text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                        Ready to Schedule Your Eye Care Service?
                    </h2>
                    <p className="text-lg mb-8 opacity-90 leading-relaxed">
                        Contact us today to book your appointment or learn more about our comprehensive eye care services.
                        Our experienced optometrists are here to help you maintain optimal vision health.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <a
                            href="https://haveneye.simplybook.me/v2/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-[#0066cc] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            📅 Book Appointment
                        </a>
                        <a
                            href="https://wa.me/233596915333?text=Hello%20I%20want%20to%20learn%20more%20about%20your%20eye%20care%20services"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#0066cc] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            📞 Learn More
                        </a>
                    </div>
                    <div className="text-sm opacity-75">
                        <p>📍 Located at Ridge, Accra • ☎️ Call us: +233 596 915 333</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;