import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0066cc] text-white">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4">
                <img src="/images/logo/haven-logo.jpeg" alt="Haven Eye Logo" className="h-10 w-auto mr-3" />
                <div>
                  <h3 className="text-xl font-bold">Haven Eye</h3>
                  <p className="text-sm text-white/80">Your Vision, Our Mission</p>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Professional eye care services with advanced technology and personalized care.
                Located at Ridge, Accra, serving the community with excellence since our founding.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/18fgviwgh7/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34V22c4.78-.76 8.44-4.89 8.44-9.93z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/haveneyeltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="1.5"/>
                    <path d="M16 11.37a4 4 0 1 1-7.999-.001A4 4 0 0 1 16 11.37z" strokeWidth="1.5"/>
                    <path d="M17.5 6.5h.01" strokeWidth="1.5"/>
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@haveneyeltd?_r=1&_t=ZS-96Bm35hu9aS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 3.06v6.44a3.5 3.5 0 01-3.48-3.06A3.5 3.5 0 016 9.5c0 1.93 1.57 3.5 3.5 3.5a3.49 3.49 0 003.43-2.6V16a5.5 5.5 0 11-5.5-5.5v2.03A3.5 3.5 0 0013 16.5 3.5 3.5 0 0016.5 13V3.06h-3.5z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/services" className="text-white/80 hover:text-white transition-colors">Optical Coherence Tomography</a></li>
                <li><a href="/services" className="text-white/80 hover:text-white transition-colors">Comprehensive Eye Exams</a></li>
                <li><a href="/services" className="text-white/80 hover:text-white transition-colors">Contact Lens Services</a></li>
                <li><a href="/services" className="text-white/80 hover:text-white transition-colors">Glaucoma Management</a></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/glasses" className="text-white/80 hover:text-white transition-colors">Designer Frames</a></li>
                <li><a href="#contact-lenses" className="text-white/80 hover:text-white transition-colors">Contact Lenses</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Prescription Sunglasses</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Eye Care Products</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors"></a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <svg className="w-4 h-4 mt-0.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <div>
                    <p className="text-white/80">Ridge, Accra</p>
                    <p className="text-white/80">Greater Accra Region, Ghana</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <a href="tel:+233596915333" className="text-white/80 hover:text-white transition-colors">
                    +233 596 915 333
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <a href="mailto:info@haveneyeltd.com" className="text-white/80 hover:text-white transition-colors">
                    info@haveneyeltd.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="text-white/70 mb-4 md:mb-0">
              © {new Date().getFullYear()} Haven Eye. All rights reserved.
            </div>
            <div className="flex space-x-6 text-white/70">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;