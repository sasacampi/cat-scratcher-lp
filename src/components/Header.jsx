import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="flex items-center justify-between border-b border-solid border-b-[#f3ede7] px-6 py-3 md:px-10 relative bg-white">
      <div className="flex items-center gap-4 text-[#1b140e]">
        <div className="size-4">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <Link
          to="/"
          className="text-2xl font-bold leading-tight tracking-[-0.015em]"
        >
          Katz
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <div className="flex items-center gap-9">
          <Link
            to="/shop"
            className="text-sm font-medium hover:text-[#e88630] transition-colors"
          >
            Shop
          </Link>
          <a
            href="#"
            className="text-sm font-medium hover:text-[#e88630] transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#"
            className="text-sm font-medium hover:text-[#e88630] transition-colors"
          >
            About
          </a>
        </div>
        <button className="flex items-center justify-center rounded-full h-10 px-4 bg-[#e88630] text-sm font-bold hover:bg-[#d87a28] transition-colors">
          Contact Us
        </button>
      </nav>

      {/* mobile ham button */}
      <button
        ref={buttonRef}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <svg
          className="w-6 h-6 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* li menu */}
      <div
        ref={menuRef}
        className={`md:hidden absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl z-50 border border-gray-100 transition-all duration-200 ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[-10px] pointer-events-none"
        }`}
      >
        <div className="flex flex-col py-2">
          <a
            href="#"
            className="px-4 py-3 text-sm hover:bg-orange-50 hover:text-[#e88630] transition-colors"
          >
            Shop
          </a>
          <a
            href="#"
            className="px-4 py-3 text-sm hover:bg-orange-50 hover:text-[#e88630] transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#"
            className="px-4 py-3 text-sm hover:bg-orange-50 hover:text-[#e88630] transition-colors"
          >
            About
          </a>
          <div className="px-4 py-3 border-t border-gray-100 mt-2">
            <button className="w-full text-sm bg-[#e88630] text-white py-2 rounded-full hover:bg-[#d87a28] transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
