import { Smartphone, MapPin, Zap } from "lucide-react";

const features = [
  {
    icon: <Zap size={40} strokeWidth={1.5} />,
    title: "Advanced OCT Technology",
    label: "Book OCT Scan",
    link: "https://haveneye.simplybook.me/v2/",
    description: "Detect eye diseases 5 years earlier with 3D imaging"
  },
  {
    icon: <MapPin size={40} strokeWidth={1.5} />,
    title: "Convenient Location",
    label: "Get Directions",
    link: "https://maps.google.com/maps?q=Haven+Eye+Clinic+Ridge+Accra",
    description: "Located at Ridge, Accra - Easy to find and access"
  },
  {
    icon: <Smartphone size={40} strokeWidth={1.5} />,
    title: "Expert Optometrists",
    label: "Meet Our Team",
    link: "/about",
    description: "15+ years of experience in comprehensive eye care"
  },
];

const Feature = () => {
  return (
    <div className="flex flex-col">

      {/* Section 1 - Why Haven */}
      <div id="eye-tests" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              Why Choose Haven Eye Ltd?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Trusted by thousands for premium eye care with cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center gap-4 border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-[#3d6b1f] transition-all duration-300 bg-[#f5f1e8]"
              >
                {/* Icon */}
                <div className="text-[#3d6b1f] group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {feature.description}
                  </p>

                  <a
                    href={feature.link}
                    target={feature.link.startsWith('http') ? '_blank' : undefined}
                    rel={feature.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1 text-[#3d6b1f] font-bold hover:underline transition-colors"
                  >
                    {feature.label} <span className="transition-transform group-hover:translate-x-1">›</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2 - OCT Highlight with Image */}
      <div className="flex flex-col lg:flex-row w-full bg-white">

        {/* Image */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 mb-8 lg:mb-0 flex items-center justify-center">
          <img
            src="/images/products/image.png"
            alt="Advanced eye health scan"
            className="w-full h-auto max-w-lg object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-8 lg:py-0">
          <span className="text-sm font-semibold text-[#3d6b1f] uppercase tracking-wide mb-3">
            Our Signature Service
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Advanced OCT Eye Scanning
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            Our Optical Coherence Tomography (OCT) technology captures detailed 3D images of the back of your eye, enabling early detection of glaucoma, diabetic eye disease, and other serious conditions—up to 5 years before traditional methods.
          </p>

          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-lg font-bold text-[#3d6b1f] mt-1">✓</span>
              <div>
                <p className="font-semibold text-gray-900">Non-invasive imaging</p>
                <p className="text-gray-600 text-sm">Quick, painless, and highly accurate results</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-lg font-bold text-[#3d6b1f] mt-1">✓</span>
              <div>
                <p className="font-semibold text-gray-900">Early disease detection</p>
                <p className="text-gray-600 text-sm">Catch conditions before they progress</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-lg font-bold text-[#3d6b1f] mt-1">✓</span>
              <div>
                <p className="font-semibold text-gray-900">Comprehensive assessment</p>
                <p className="text-gray-600 text-sm">Part of your complete eye health evaluation</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://haveneye.simplybook.me/v2/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3d6b1f] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#2d5016] transition-colors text-center"
            >
              Book OCT Scan - GH₵1,500
            </a>

            <a
              href="https://wa.me/233557767766?text=Hello%20I%20want%20to%20learn%20about%20OCT%20eye%20tests"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#3d6b1f] text-[#3d6b1f] font-semibold py-3 px-8 rounded-full hover:bg-[#3d6b1f] hover:text-white transition-colors text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;