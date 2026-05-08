import React from 'react';

const services = [
    {
        title: "Optical Coherence Tomography (OCT)",
        description: "An advanced, non-invasive imaging test that uses light waves to take cross-section pictures of your retina. This helps detect and manage glaucoma, diabetic eye disease, and other retinal conditions much earlier than traditional methods.",
        details: "OCT provides detailed images of the retina's layers, allowing us to detect subtle changes that might indicate early disease. It's painless, takes only minutes, and is essential for monitoring eye health.",
        image: "/images/help/Optical-Coherence .png",
        icon: "🔬",
    },
    {
        title: "Eye Test at Home",
        description: "Comprehensive eye examinations conducted in the comfort of your home for those who cannot visit our stores unaccompanied. Our mobile opticians bring professional equipment and expertise directly to you.",
        details: "Our home eye test service includes visual acuity testing, refraction, eye pressure measurement, and retinal examination. Perfect for elderly patients, those with mobility issues, or busy professionals.",
        image: "/images/help/Home-eye.png",
        icon: "🏠",
    },
    {
        title: "Corporate and Insurance Eye Care",
        description: "Specialized eye care services designed for corporate clients and insurance-covered examinations. We work with major insurance providers to ensure comprehensive coverage for your eye health needs.",
        details: "Includes routine eye examinations, specialized testing, and coordination with your insurance provider. We handle all paperwork and ensure you get the maximum coverage for your eye care benefits.",
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
        details: "This automated test maps your visual field while you look at a central point. It helps detect blind spots or areas of reduced vision that might indicate serious conditions like glaucoma or brain tumors.",
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
        title: "Corporate and Insurance Eyecare Programmes",
        description: "Comprehensive eye care packages designed for businesses and organizations, including group insurance coverage and workplace eye health initiatives.",
        details: "We provide bulk eye examinations, vision screening programs, and coordinate with corporate health insurance providers. Includes employee wellness programs focused on eye health and safety.",
        image: "/images/frames/Specsavers2.png",
        icon: "👥",
    },
    {
        title: "Pachymetry",
        description: "Measurement of corneal thickness, crucial for glaucoma management, contact lens fitting, and pre-operative assessment for refractive surgery.",
        details: "This quick, painless test measures the thickness of your cornea using ultrasound or optical methods. Corneal thickness is important for accurate glaucoma diagnosis and monitoring treatment effectiveness.",
        image: "/images/frames/Specsavers3.png",
        icon: "📊",
    },
];

const Service = () => {
    return (
        <div className="flex flex-col w-full bg-gray-50 min-h-screen">
            {/* -------- Header -------- */}
            <div className="px-4 sm:px-6 lg:px-8 py-16 text-center bg-linear-to-br from-[#004B2E] to-[#006B3E] text-white relative overflow-hidden">
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
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#004B2E] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {service.description}
                                    </p>
                                    <div className="border-t border-gray-100 pt-4">
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            {service.details}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* -------- Call to Action -------- */}
            <div className="px-4 sm:px-6 lg:px-8 py-16 bg-linear-to-r from-[#004B2E] to-[#006B3E] text-white text-center relative overflow-hidden">
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
                            href="https://calendly.com/haveneyeltd-info/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-[#004B2E] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            📅 Book Appointment
                        </a>
                        <a
                            href="https://wa.me/233596915333?text=Hello%20I%20want%20to%20learn%20more%20about%20your%20eye%20care%20services"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#004B2E] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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