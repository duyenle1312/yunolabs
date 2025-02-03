"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Concerns", href: "/concerns" },
  { name: "Treatments", href: "/treatments" },
  { name: "Shop", href: "/shop" },
  { name: "Locate Us", href: "/locate-us" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const leftColumnItems = menuItems.slice(0, 3);
  const rightColumnItems = menuItems.slice(3);

  return (
    <nav className="z-40 sticky top-0 bg-white shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="/logo-nav.png" alt="Logo" width={180} height={120} />
          </div>

          {/* Hamburger menu */}
          <div className="flex">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Image src="/menu.png" alt="Menu" width={35} height={35} />
              )}
            </button>
          </div>

          {/* Button */}
          <div>
            <button
              className={`text-[#F4F4F4] px-6 py-3 rounded-full lg:text-[16px] md:text-[14px] text-[12px] font-[500px] ${
                isMenuOpen ? "bg-primary" : "bg-[#434343]"
              }`}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`min-h-screen ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="bg-[#F4F4F4] flex items-center justify-left px-12 md:py-32 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 md:gap-y-8 gap-y-4">
            {/* Left Column */}
            <div className="md:space-y-8 space-y-4">
              {leftColumnItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="lg:text-[64px] md:text-[48px] text-[32px] md:leading-[76.8px] font-medium text-primary hover:text-[#6B573D] transition-colors"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="md:space-y-8 space-y-4">
              {rightColumnItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="lg:text-[64px] md:text-[48px] text-[32px] md:leading-[76.8px] font-medium text-primary hover:text-[#6B573D] transition-colors"
                  >
                    {item.name}
                  </Link>{" "}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-end items-center h-16 mx-12">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="/" className="inline-block">
              <Image
                src="/Fb-nav.png"
                alt="Facebook"
                width={22}
                height={22}
              />
            </Link>
            <Link href="/" className="inline-block">
              <Image
                src="/Ig-nav.png"
                alt="Instagram"
                width={22}
                height={22}
              />
            </Link>
            <Link href="/" className="inline-block">
              <Image src="/Tiktok-nav.png" alt="Tiktok" width={20} height={20} />
            </Link>
            <Link href="/" className="inline-block">
              <Image src="/Yt-nav.png" alt="Youtube" width={28} height={28} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
