import { useState } from "react";
import headerLogo from '../assets/images/b_mobile_logo.webp';

const navLink =
  "text-gray-700 hover:text-green-600 transition font-medium";

const mobileLink =
  "block text-gray-700 hover:text-green-600 font-medium";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-100 border-b">
      <nav
        className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <a href="/" aria-label="Homepage">
          <img
            src={headerLogo}
            alt="bMobile Route Software"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="menu_desktop hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          <li><a href="#" className={navLink}>Products</a></li>
          <li><a href="#" className={navLink}>Industry</a></li>
          <li><a href="#" className={navLink}>Resources</a></li>
          <li><a href="#" className={navLink}>Contact us</a></li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <div className="relative w-6 h-6">
            <span
              className={`absolute w-6 h-0.5 bg-black transition ${
                isOpen ? "rotate-45 top-3" : "top-1"
              }`}
            />
            <span
              className={`absolute w-6 h-0.5 bg-black transition ${
                isOpen ? "opacity-0" : "top-3"
              }`}
            />
            <span
              className={`absolute w-6 h-0.5 bg-black transition ${
                isOpen ? "-rotate-45 top-3" : "top-5"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-4">
          <li><a href="#" className={mobileLink}>Products</a></li>
          <li><a href="#" className={mobileLink}>Industry</a></li>
          <li><a href="#" className={mobileLink}>Resources</a></li>
          <li><a href="#" className={mobileLink}>Contact us</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;