import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Glasses', href: '/glasses' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 left-0 right-0 z-40 bg-white shadow-sm border-b border-gray-200">

      {/* ── Single navbar row ── */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-18">

        {/* Logo */}
        <NavLink to="/" className="flex-shrink-0">
          <img
            src="/images/logo/haven-logo.jpeg"
            alt="Haven Eye Ltd Logo"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </NavLink>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-6 list-none m-0 p-0">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `text-sm font-medium pb-1 border-b-2 transition-colors duration-200 ${
                    isActive
                      ? 'text-[#1d4f91] border-[#1d4f91]'
                      : 'text-gray-700 border-transparent hover:text-[#1d4f91] hover:border-[#1d4f91]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="https://haveneye.simplybook.me/v2/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-block bg-[#1d4f91] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#133f72] transition-colors duration-200"
        >
          Book Appointment
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <ul className="flex flex-col px-4 py-4 gap-1 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block text-sm font-medium py-3 px-4 rounded-lg border-l-4 transition-all duration-200 ${
                      isActive
                        ? 'text-[#1d4f91] bg-[#eef4fb] border-[#1d4f91]'
                        : 'text-gray-700 border-transparent hover:text-[#1d4f91] hover:bg-gray-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            {/* Mobile CTA */}
            <li className="pt-4 mt-2 border-t border-gray-100">
              <a
                href="https://haveneye.simplybook.me/v2/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#1d4f91] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#133f72] transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Appointment
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;