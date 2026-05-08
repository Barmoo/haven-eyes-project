import { ShoppingBag, MapPin, Eye } from "lucide-react";

const features = [
  {
    icon: <ShoppingBag size={36} strokeWidth={1.5} />,
    title: "Great offers",
    label: "Browse offers",
    link: "#",
  },
  {
    icon: <MapPin size={36} strokeWidth={1.5} />,
    title: "Located at Ridge, Accra",
    label: "Find your store",
    link: "#",
  },
  {
    icon: <Eye size={36} strokeWidth={1.5} />,
    title: "Advanced eye tests",
    label: "Find out about OCT", // 👈 what user sees
    link: "https://wa.me/233557767766?text=Hello%20I%20want%20to%20learn%20about%20OCT%20eye%20tests", // 👈 where it goes
  },
];

const Feature = () => {
  return (
    <div className="flex flex-col">

      {/* Section 1 */}
      <div id="eye-tests" className="px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-10">
          Why choose Haven Eye?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center sm:items-start text-center sm:text-left gap-4 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-green-200 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-[#004B2E] group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>

                {/* 👇 FIXED: label shows, link redirects */}
                <a
                  href={feature.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-green-700 font-semibold hover:underline"
                >
                  {feature.label} <span className="transition-transform group-hover:translate-x-1">›</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col lg:flex-row w-full mt-10">

        {/* Image */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 mb-6 lg:mb-0">
          <img
            src="/images/products/image.png"
            alt="Advanced eye health scan"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 lg:px-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Advanced eye health scan GH₵1500 or less
          </h2>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
            OCT technology allows us to take a 3D image of the back of your eye
            to detect serious eye conditions like glaucoma much earlier than
            traditional methods.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="https://calendly.com/haveneyeltd-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-800 font-semibold underline flex items-center gap-1"
            >
              Book OCT Scan <span>›</span>
            </a>

            <a
              href="https://wa.me/233557767766?text=Hello%20I%20want%20to%20learn%20more%20about%20OCT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-800 font-semibold underline flex items-center gap-1"
            >
              Find out more <span>›</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Feature;