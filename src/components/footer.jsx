import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 sm:py-8 lg:py-12 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4">Browse</h4>
            <ul className="list-none m-0 p-0 space-y-1 text-xs sm:text-sm">
              <li>Glasses</li>
              <li>Prescription Sunglasses</li>
              <li>Contact Lenses</li>
              <li>Hearing Aids</li>
              <li>Offers</li>
              <li>Gift Vouchers</li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4">Services</h4>
            <ul className="list-none m-0 p-0 space-y-1 text-xs sm:text-sm">
              <li>OTC scans in store</li>
              <li>Eye test at home</li>
              <li>Corporate eye care</li>
              <li>Ear wax removal</li>
              <li>Hearing tests at home</li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4">Eye & ear health</h4>
            <ul className="list-none m-0 p-0 space-y-1 text-xs sm:text-sm">
              <li>Eye health</li>
              <li>Ear health</li>
              <li>Information for GPs</li>
              <li>Children's eyecare</li>
              <li>Help and FAQs</li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4">About</h4>
            <ul className="list-none m-0 p-0 space-y-1 text-xs sm:text-sm">
              <li>About Haven eye</li>
              <li>Contact us</li>
              <li>Careers</li>
              <li>Reports</li>
              <li>Annual review</li>
              <li>Sustainability</li>
              <li>Sitemap</li>
              <li>Haven eye promise</li>
            </ul>
          </div>
        </div>

        {/* Social media handles */}
        <div className="mt-6 sm:mt-8 lg:mt-12 flex items-center justify-center gap-3 sm:gap-4">
          <span className="sr-only">Follow us</span>

          <a
            href="https://www.facebook.com/YourPage"
            aria-label="Facebook (opens in new tab)"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 rounded text-gray-500 hover:text-black"
          >
            {/* Facebook SVG */}
            <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
              <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34V22c4.78-.76 8.44-4.89 8.44-9.93z"/>
            </svg>
          </a>

          <a
            href="https://x.com/YourHandle"
            aria-label="X (opens in new tab)"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 rounded text-gray-500 hover:text-black"
          >
            {/* X (formerly Twitter) SVG */}
            <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
              <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </a>

          <a
            href="https://www.instagram.com/YourHandle"
            aria-label="Instagram (opens in new tab)"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 rounded text-gray-500 hover:text-black"
          >
            {/* Instagram SVG */}
            <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M16 11.37a4 4 0 1 1-7.999-.001A4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/your-page"
            aria-label="LinkedIn (opens in new tab)"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 rounded text-gray-500 hover:text-black"
          >
            {/* LinkedIn SVG */}
            <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
              <path d="M20.45 20.45h-3.6v-5.4c0-1.29 0-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.5h-3.6V9h3.46v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.47v6.82zM5.34 7.43a2.09 2.09 0 1 1 0-4.18 2.09 2.09 0 0 1 0 4.18zM6.14 20.45H4.54V9h1.6v11.45z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;