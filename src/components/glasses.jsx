import React from "react";

/* ---------------- GLASSES IMAGES ---------------- */
const glassesImages = [
  { src: "/images/glasses/angus-gray-bSjqyqukCjY-unsplash.jpg", alt: "Elegant glasses collection" },
  { src: "/images/glasses/bud-silva-kqguzgvYrtM-unsplash.jpg", alt: "Modern eyewear" },
  { src: "/images/glasses/charlesdeluvio-1-nx1QR5dTE-unsplash.jpg", alt: "Stylish frames" },
  { src: "/images/glasses/claudio-schwarz-e8TtkC5xyv4-unsplash.jpg", alt: "Designer glasses" },
  { src: "/images/glasses/david-travis-aVvZJC0ynBQ-unsplash.jpg", alt: "Premium eyewear" },
  { src: "/images/glasses/dmitry-ratushny-wpi3sDUrSEk-unsplash.jpg", alt: "Luxury frames" },
  { src: "/images/glasses/gerald-hartl-yQpSxKF_ELA-unsplash.jpg", alt: "Contemporary glasses" },
  { src: "/images/glasses/giorgio-trovato-K62u25Jk6vo-unsplash.jpg", alt: "Fashion eyewear" },
  { src: "/images/glasses/irene-kredenets-LaXCHG-yCJg-unsplash.jpg", alt: "Trendy frames" },
  { src: "/images/glasses/jess-bailey-WeCoLo0Rxp4-unsplash.jpg", alt: "Classic eyewear" },
  { src: "/images/glasses/jocelyn-morales-Mv7kokwzIMw-unsplash.jpg", alt: "Modern glasses" },
  { src: "/images/glasses/oli-woodman-s7gRHGEmX78-unsplash.jpg", alt: "Designer frames" },
  { src: "/images/glasses/omid-armin-Zt99Ho5Hq3s-unsplash.jpg", alt: "Luxury eyewear" },
  { src: "/images/glasses/sincerely-media-d05w6_7FaPM-unsplash.jpg", alt: "Premium glasses" },
  { src: "/images/glasses/susan-duran-LHaqQkG_mgQ-unsplash.jpg", alt: "Stylish eyewear" },
];

/* ---------------- GLASSES CARD ---------------- */
const GlassesCard = ({ src, alt }) => (
  <div className="group relative overflow-hidden rounded-xl bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300">
    <div className="aspect-square overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
);

/* ---------------- MAIN ---------------- */
const Glasses = () => {
  return (
    <div className="flex flex-col w-full bg-gray-50">
      {/* -------- Header -------- */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Discover Our Glasses Collection
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore our curated selection of premium eyewear, featuring the latest trends and timeless classics
        </p>
      </div>

      {/* -------- Gallery -------- */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {glassesImages.map((image, index) => (
              <GlassesCard key={index} {...image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glasses;
