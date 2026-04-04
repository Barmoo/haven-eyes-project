import { ShoppingBag, MapPin, Home, Eye } from "lucide-react";

const features = [
  {
    icon: <ShoppingBag size={36} strokeWidth={1.5} />,
    title: "Great offers",
    link: "Browse offers",
  },
  {
    icon: <MapPin size={36} strokeWidth={1.5} />,
    title: "850 local businesses nationwide",
    link: "Find your store",
  },
  {
    icon: <Home size={36} strokeWidth={1.5} />,
    title: "Home eye tests",
    link: "Check eligibility",
  },
  {
    icon: <Eye size={36} strokeWidth={1.5} />,
    title: "Advanced eye tests",
    link: "Find out about OCT",
  },
];

const Feature = () => {
  return (
    <div className="flex flex-col">

      {/* Section 1 - Why choose */}
      <div className="flex flex-col px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
          Why choose Specsavers?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 border border-gray-200 rounded-lg p-4 sm:p-6">
              <div className="text-gray-700 shrink-0">{feature.icon}</div>
              <div className="flex flex-col text-center sm:text-left">
                <span className="text-xs sm:text-sm font-medium text-gray-800">{feature.title}</span>
                <a href="#" className="text-xs sm:text-sm text-green-700 font-semibold underline flex items-center justify-center sm:justify-start gap-1 mt-1">
                  {feature.link} <span>›</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2 - Advanced eye health scan */}
      <div className="flex flex-col lg:flex-row w-full mt-6 sm:mt-8">

        {/* Left - Image placeholder */}
        <div className="w-full lg:w-1/2 min-h-64 sm:min-h-96 lg:min-h-[500px] flex justify-center items-center px-4 sm:pl-6 mb-4 lg:mb-0">
          <img src="/images/products/image.png" alt="Advanced eye health scan" className="w-full max-w-sm sm:max-w-none h-full object-cover rounded-lg" />
        </div>

        {/* Right - Text content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-6 sm:py-8 lg:py-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Advanced eye health scan GH₵1500 or less
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
            OCT technology allows us to take a 3D image of the back of your eye
            to help spot serious eye conditions, including glaucoma, up to four
            years earlier than traditional methods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <a href="#" className="text-green-800 font-semibold underline flex items-center gap-1">
              Book OCT Scan <span>›</span>
            </a>
            <a href="#" className="text-green-800 font-semibold underline flex items-center gap-1">
              Find out more <span>›</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Feature;