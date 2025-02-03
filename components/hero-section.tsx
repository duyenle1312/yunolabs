import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative">
      {/* Background Image */}
      <Image
        src="/hero-img.jpg"
        alt="Cosmetic treatment results"
        // width={1440}
        // height={960}
        fill
        className="w-full h-full object-cover opacity-75"
        quality={100}
        unoptimized={true}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/20" />

      {/* Content */}
      <div className="relative flex flex-row items-end w-full h-full py-16 min-h-screen">
        <div className="px-16">
          <div className="w-full">
            <h1 className="lg:block hidden lg:text-[64px] md:text-[48px] text-[24px] font-medium text-white md:leading-[76.8px] tracking-wide w-full">
              Unveil Your Best Self with <br /> Cosmedix Clinics&apos; Expert
              Care <br /> and Cutting-Edge Treatments
            </h1>
            <h1 className="lg:hidden block md:text-[48px] text-[24px] font-medium text-white tracking-wide w-full">
              Unveil Your Best Self with Cosmedix Clinics&apos; Expert
              Care and Cutting-Edge Treatments
            </h1>
            <Link
              href="/"
              className="text-[16px] font-[500px] text-white leading-[24px] mt-12 inline-block px-8 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 rounded-full"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
