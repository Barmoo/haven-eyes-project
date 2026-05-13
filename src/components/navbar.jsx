import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/', isRoute: true },
    { label: 'Glasses', href: '/glasses', isRoute: true },
    { label: 'Contact Lenses', href: '#contact-lenses' },
    { label: 'Eye Tests', href: '#eye-tests' },
    { label: 'Services', href: '/services', isRoute: true },
    { label: 'Contact Us', href: '/contact', isRoute: true },
    { label: 'About', href: '/about', isRoute: true },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top row: Find a store on the left, logo centered, actions on the right */}
      <div className="flex items-center justify-between w-full max-w-screen-2xl mx-auto px-2 sm:px-4 py-2 sm:py-4">
        {/* Left: Hamburger menu (mobile only) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded hover:bg-gray-100 text-gray-700"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Left: Find a store (desktop only) */}
        <a
          href="https://www.google.com/maps/search/?api=1&query=Haven+Eye+Clinic+near+Bank+of+Ghana"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 text-xs sm:text-sm text-gray-700 hover:text-[#0066cc] transition-colors"
          aria-label="Find Haven Eye Clinic near Bank of Ghana"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
          </svg>
          <span>Find a store</span>
        </a>

        {/* Center: logo */}
        <img src="/images/logo/haven-logo.jpeg" alt="Haven Eye Ltd Logo" className="h-8 sm:h-10 lg:h-12" />

        {/* Right: actions */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          {/* Actions removed as requested */}
        </div>
      </div>

      {/* Desktop navigation row (hidden on mobile) */}
      <div className="hidden lg:block">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="flex items-center justify-end py-3 gap-8">
            {/* Navigation Links */}
            <ul className="flex gap-8 items-center list-none m-0 p-0">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.isRoute ? (
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `text-sm font-medium transition-colors duration-200 border-b-2 pb-1 ${
                          isActive
                            ? 'text-[#0066cc] font-semibold border-[#0066cc]'
                            : 'text-gray-700 hover:text-[#0066cc] border-transparent hover:border-[#0066cc]'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ) : (
                    <a href={item.href} className="text-sm font-medium text-gray-700 hover:text-[#0066cc] border-b-2 border-transparent pb-1 hover:border-[#0066cc] transition-colors duration-200">
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="https://haveneye.simplybook.me/v2/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0066cc] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#004399] transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu (visible when open) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg">
          <div className="px-4 py-6">
            <ul className="flex flex-col gap-1 list-none m-0 p-0">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.isRoute ? (
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `text-base font-medium block py-3 px-4 rounded-lg transition-all duration-200 ${
                          isActive
                            ? 'text-[#0066cc] font-semibold bg-blue-50 border-l-4 border-[#0066cc]'
                            : 'text-gray-700 hover:text-[#0066cc] hover:bg-gray-50 border-l-4 border-transparent'
                        }`
                      }
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  ) : (
                    <a
                      href={item.href}
                      className="text-base font-medium text-gray-700 hover:text-[#0066cc] block py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200 border-l-4 border-transparent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
              <li className="pt-6 border-t border-gray-200 mt-4">
                <a
                  href="https://haveneye.simplybook.me/v2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#0066cc] text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#004399] transition-colors duration-200 block text-center shadow-sm hover:shadow-md"
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

