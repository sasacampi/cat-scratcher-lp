import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#f3ede7] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-[#1b140e] text-lg font-bold mb-4">
              About Katz
            </h3>
            <p className="text-[#97704e] text-sm">
              Crafting premium cat scratchers that combine modern design with
              feline-approved functionality.
            </p>
          </div>

          <div>
            <h3 className="text-[#1b140e] text-lg font-bold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { path: "/shop", label: "Shop" },
                { path: "/testimonials", label: "Testimonials" },
                { path: "/about", label: "About" },
                { path: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[#97704e] text-sm hover:text-[#e88630] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[#1b140e] text-lg font-bold mb-4">
              Contact Us
            </h3>
            <div className="space-y-2 text-[#97704e] text-sm">
              <p>123 Catnip Street</p>
              <p>Meowville, SP 90210</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:hello@scratchme.com"
                  className="hover:text-[#e88630] transition-colors"
                >
                  hello@scratchme.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+551112344567"
                  className="hover:text-[#e88630] transition-colors"
                >
                  (11) 1234-4567
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-[#1b140e] text-lg font-bold mb-4">
              Stay Updated
            </h3>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-full border border-[#f3ede7] text-sm focus:outline-none focus:ring-2 focus:ring-[#e88630]"
              />
              <button
                type="submit"
                className="w-full bg-[#f47b25] text-white text-sm font-bold py-2 px-4 rounded-full hover:bg-[#d87a28] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-[#f3ede7] mt-12 pt-8 text-center">
          <p className="text-[#97704e] text-sm">
            © {new Date().getFullYear()} KATZ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
