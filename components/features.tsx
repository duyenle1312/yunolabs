import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="md:py-[112px] py-12 md:px-[64px] px-6 bg-white">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-y-6">
          {/* Feature 1 */}
          <div className="relative bg-white md:rounded-bl-[120px] md:p-16 p-6 shadow-sm border-black border-l-[1px] border-b-[1px] border-t-[1px] md:border-r-[0px] border-r-[1px]">
            <h2 className="lg:text-[48px] md:text-[32px] text-[24px] md:leading-[57.5px] font-[400px] text-[#434343] md:h-1/2 ">
              Specialise in non-surgical corrective and cosmetic treatments
            </h2>
            <div className="flex flex-row md:justify-between justify-end items-end">
              <div className="lg:block hidden mb-12">
                <span className="lg:text-[48px] md:text-[32px] text-[32px] leading-[57.5px] font-[400px] text-[#434343]">1</span>
              </div>
              <div className="relative md:h-[234px] md:w-[288px] h-[117px] w-[144px] rounded-3xl overflow-hidden pb-16 lg:-mt-10 md:mt-5 mt-6">
                <Image
                  src="/feature1.jpeg"
                  alt="Non-surgical cosmetic treatment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="relative bg-white md:rounded-bl-[120px] md:p-16 p-6 shadow-sm border-black border-l-[1px] border-b-[1px] border-t-[1px] md:border-r-[0px] border-r-[1px]">
            <h2 className="lg:text-[48px] md:text-[32px] text-[24px] md:leading-[57.5px] font-[400px] text-[#434343] md:h-1/2">
              Option between In-Clinic and Virtual Consultation
              <br />
            </h2>
            <div className="flex flex-row md:justify-between justify-end items-end md:pb-16 pb-3">
              <div className="lg:block hidden mb-12">
                <span className="lg:text-[48px] md:text-[32px] text-[32px] leading-[57.5px] font-[400px] text-[#434343]">2</span>
              </div>
              <div className="relative md:h-[234px] md:w-[288px] h-[117px] w-[144px] rounded-3xl overflow-hidden pb-16 lg:-mt-10 md:mt-5 mt-6">
                <Image
                  src="/feature2.png"
                  alt="Virtual consultation setup"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
