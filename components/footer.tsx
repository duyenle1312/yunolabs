"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#2A2A2A] text-white md:py-[112px] py-12 md:px-[64px] px-6">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 gap-y-12">
          {/* Logo and Navigation */}
          <div className="space-y-14 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-footer.png"
                alt="Cosmedix Skin Specialists"
                width={240}
                height={80}
                className="h-20 w-auto"
              />
            </Link>
            <nav className="space-y-4 ">
              <div className="flex flex-wrap gap-x-4 text-[32px] font-medium">
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
                <span className="text-[#F4F4F4] mx-3">/</span>
                <Link href="/blog" className="hover:text-gray-300">
                  Blog
                </Link>
                <span className="text-[#F4F4F4] mx-3">/</span>
                <Link href="/concerns" className="hover:text-gray-300">
                  Concerns
                </Link>
              </div>
              <div className="flex flex-wrap gap-x-4 text-[32px] font-medium">
                <Link href="/treatments" className="hover:text-gray-300">
                  Treatments
                </Link>
                <span className="text-[#F4F4F4] mx-3">/</span>
                <Link href="/shop" className="hover:text-gray-300">
                  Shop
                </Link>
                <span className="text-[#F4F4F4] mx-3">/</span>
                <Link href="/locate-us" className="hover:text-gray-300">
                  Locate Us
                </Link>
              </div>
            </nav>
          </div>

          <div className="col-span-1 flex flex-col">
            <div className="grid grid-rows-2 space-y-8">
              {/* Contact Information */}
              <div className="row-span-1 grid grid-cols-1 md:grid-cols-2">
                <div className="col-span-1">
                  <h3 className="text-[#F4F4F4] text-[10px] font-medium leading-[13px] mb-2">
                    CONTACT US
                  </h3>
                  <p className="text-[#F4F4F4] text-[24px] font-medium leading-[28.8px]">
                    +02 8006 3344
                  </p>
                </div>
                <div className="col-span-1">
                  <h3 className="text-[#F4F4F4] text-[10px] font-medium leading-[13px] mb-2">
                    ADDRESS
                  </h3>
                  <p className="text-[#F4F4F4] text-[18px] font-[400px] leading-[27px]">
                    169 William Street - Darlinghurst
                    <br />
                    Sydney, NSW
                  </p>
                </div>
              </div>

              {/* Address and Hours */}
              <div className="row-span-1 grid grid-cols-1 md:grid-cols-2">
                <div className="col-span-1">
                  <h3 className="text-[#F4F4F4] text-[10px] font-medium leading-[13px] mb-2">
                    EMAIL
                  </h3>
                  <a
                    href="mailto:robert@cosmedixclinics.com.au"
                    className="text-[#F4F4F4] text-[18px] font-[400px] leading-[27px]"
                  >
                    robert@cosmedixclinics.com.au
                  </a>
                </div>

                <div className="col-span-1">
                  <h3 className="text-[#F4F4F4] text-[10px] font-medium leading-[13px] mb-2">
                    OPENING HOURS
                  </h3>
                  <p className="text-[#F4F4F4] text-[24px] font-medium leading-[28.8px]">
                    9am—6pm
                  </p>
                </div>
              </div>
            </div>
            {/* Social Media Icons */}
            <div className="flex justify-end mt-14">
              <div className="w-1/2 flex flex-col md:flex-row justify-between items-center gap-y-5">
                <div className="flex justify-center items-center space-x-6">
                  <Link href="/" className="inline-block">
                    <Image
                      src="/Facebook.png"
                      alt="Facebook"
                      width={22}
                      height={22}
                    />
                  </Link>
                  <Link href="/" className="inline-block">
                    <Image
                      src="/Instagram.png"
                      alt="Instagram"
                      width={22}
                      height={22}
                    />
                  </Link>
                  <Link href="/" className="inline-block">
                    <Image
                      src="/Tiktok.png"
                      alt="Tiktok"
                      width={20}
                      height={20}
                    />
                  </Link>
                  <Link href="/" className="inline-block">
                    <Image
                      src="/Youtube.png"
                      alt="Youtube"
                      width={28}
                      height={28}
                    />
                  </Link>
                </div>
                <p className="text-[10px] font-medium leading-[13px] text-[#F4F4F4]">
                  © 2024 — COPYRIGHT
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-white text-black rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      </div>
    </footer>
  );
}
