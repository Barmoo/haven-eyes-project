import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/', isRoute: true },
    { label: 'Glasses', href: '#' },
    { label: 'Contact Lenses', href: '#contact-lenses' },
    { label: 'Eye Tests', href: '#eye-tests' },
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
          href="#find-store"
          className="hidden sm:inline-flex items-center gap-2 text-xs sm:text-sm text-gray-700 hover:text-black"
          aria-label="Find a store"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
          </svg>
          <span>Find a store</span>
        </a>

        {/* Center: logo */}
        <img src="/images/logo/haven-logo.jpeg" alt="Haven Eye Logo" className="h-8 sm:h-10 lg:h-12" />

        {/* Right: actions */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          <button
            className="hidden md:inline-block px-4 lg:px-10 py-1 sm:py-2 rounded-full bg-white text-xs sm:text-sm border border-[#016C42] text-[#016C42]"
            aria-label="Re-order contact lenses"
          >
            Re-order
          </button>
          <button className="hidden sm:block px-2 py-1 text-xs sm:text-sm">Log in</button>

          {/* Heart (favorites) */}
          <button
            aria-label="Favorites"
            className="p-2 rounded hover:bg-gray-100 text-gray-700"
            title="Favorites"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
              <path d="M12.1 21.35l-1.1-1.01C5.14 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.14 6.86-8.99 11.84l-1.9 1.01z"/>
            </svg>
          </button>

          {/* Shopping bag (cart) */}
          <button
            aria-label="Cart"
            className="p-2 rounded hover:bg-gray-100 text-gray-700"
            title="Cart"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
              <path d="M6 2h12l-1.2 6H7.2L6 2z" fill="currentColor"/>
              <path d="M6 8h12v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8z" stroke="currentColor" strokeWidth="1" fill="none"/>
              <path d="M9 11a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop navigation row (hidden on mobile) */}
      <div className="hidden lg:block">
        <div className="max-w-screen-2xl mx-auto px-4">
          <ul className="flex gap-8 items-center justify-center pl-130 list-none m-0 p-4">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.isRoute ? (
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `text-sm transition border-b-2 pb-0.5 ${
                        isActive
                          ? 'text-[#004B2E] font-semibold border-[#004B2E]'
                          : 'text-gray-700 hover:text-black border-transparent'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <a href={item.href} className="text-sm text-gray-700 hover:text-black border-b-2 border-transparent pb-0.5">
                    {item.label}
                  </a>
                )}
              </li>
            ))}
            <li className="ml-8">
              <a
                href="https://wa.me/233557767766?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#004B2E] text-white px-6 py-2 rounded-full text-sm hover:bg-green-800 transition inline-block"
              >
                Book Appointment
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile menu (visible when open) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4">
            <ul className="flex flex-col gap-4 list-none m-0 p-0">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.isRoute ? (
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `text-base block py-2 border-l-4 pl-3 transition ${
                          isActive
                            ? 'text-[#004B2E] font-semibold border-[#004B2E] bg-green-50'
                            : 'text-gray-700 hover:text-green-800 border-transparent'
                        }`
                      }
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  ) : (
                    <a
                      href={item.href}
                      className="text-base text-gray-700 hover:text-green-800 block py-2 border-l-4 border-transparent pl-3"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
              <li className="pt-4 border-t border-gray-200">
                <a
                  href="https://wa.me/233557767766?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#004B2E] text-white px-6 py-3 rounded-full text-sm hover:bg-green-800 transition block text-center"
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

