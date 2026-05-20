import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/', isRoute: true },
    { label: 'Glasses', href: '/glasses', isRoute: true },
    { label: 'Services', href: '/services', isRoute: true },
    { label: 'About', href: '/about', isRoute: true },
    { label: 'Contact', href: '/contact', isRoute: true },
  ];

  return (
    <nav className="sticky top-8 z-40 bg-white shadow-md border-b border-gray-100">
      {/* Main navbar row */}
      <div className="flex items-center justify-between w-full max-w-screen-2xl mx-auto px-2 sm:px-4 py-2 sm:py-3">
        {/* Left: Hamburger menu (mobile only) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded hover:bg-gray-100 text-gray-700"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Center: logo */}
        <img src="/images/logo/haven-logo.jpeg" alt="Haven Eye Ltd Logo" className="h-8 sm:h-10 lg:h-12" />

        {/* Right: Book button (desktop only) */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://haveneye.simplybook.me/v2/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#3d6b1f] text-white font-semibold py-2 px-5 rounded-full hover:bg-[#2d5016] transition-colors text-sm"
          >
            Book Appointment
          </a>
        </div>
      </div>

      {/* Desktop navigation row (hidden on mobile) */}
      <div className="hidden lg:block border-t border-gray-100">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="flex items-center justify-center py-2 gap-8">
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
                            ? 'text-[#3d6b1f] font-semibold border-[#3d6b1f]'
                            : 'text-gray-700 hover:text-[#3d6b1f] border-transparent hover:border-[#3d6b1f]'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ) : (
                    <a href={item.href} className="text-sm font-medium text-gray-700 hover:text-[#3d6b1f] border-b-2 border-transparent pb-1 hover:border-[#3d6b1f] transition-colors duration-200">
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
              className="bg-[#3d6b1f] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#2d5016] transition-colors duration-200 shadow-sm hover:shadow-md"
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
                            ? 'text-[#3d6b1f] font-semibold bg-[#f5f1e8] border-l-4 border-[#3d6b1f]'
                            : 'text-gray-700 hover:text-[#3d6b1f] hover:bg-gray-50 border-l-4 border-transparent'
                        }`
                      }
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  ) : (
                    <a
                      href={item.href}
                      className="text-base font-medium text-gray-700 hover:text-[#3d6b1f] block py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200 border-l-4 border-transparent"
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
                  className="w-full bg-[#3d6b1f] text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#2d5016] transition-colors duration-200 block text-center shadow-sm hover:shadow-md"
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

