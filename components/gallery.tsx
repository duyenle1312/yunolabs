"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ConcernCard {
  title: string;
  image: string;
}

const concerns: ConcernCard[] = [
  {
    title: "Facial\nAnti-Ageing",
    image: "/gallery-1.png",
  },
  {
    title: "Acne Scarring & Acne Clearance",
    image: "/gallery-2.png",
  },
  {
    title: "Melasma,\nPigmentation &\nFreckles",
    image: "/gallery-3.png",
  },
  {
    title: "Rosacea",
    image: "/gallery-4.png",
  },
  {
    title: "Moles, Skin Tags & Lumps",
    image: "/gallery-5.png",
  },
  {
    title: "Surgical & Burns Scars",
    image: "/gallery-6.png",
  },
  {
    title: "Stretch Marks",
    image: "/gallery-7.png",
  },
  {
    title: "Laser Tattoo Removal",
    image: "/gallery-8.png",
  },
  {
    title: "Spider Veins",
    image: "/gallery-9.png",
  },
];

export default function ConcernsGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    // loop: true
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(true);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("reInit", onInit);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="md:py-[112px] py-12 md:px-[64px] px-6 bg-white">
      <div className="">
        <div className="mb-20">
          <h2 className="lg:text-[64px] md:text-[48px] text-[48px] font-medium leading-[76.8px] text-black mb-5">Concerns</h2>
          <p className="lg:text-[18px] md:text-[16px] text-[16px] font-[400px] leading-[27px] text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {concerns.map((concern, index) => (
                <div key={index} className="md:flex-[0_0_444px] flex-[0_0_208px] min-w-0">
                  <div className="relative md:h-[616px] md:w-[416px] h-[308px] w-[208px] rounded-3xl overflow-hidden group">
                    <Image
                      src={concern.image || "/placeholder.svg"}
                      alt={concern.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8">
                      <h3 className="text-[#F4F4F4] font-[400px] md:text-[48px] text-[24px] md:leading-[57.6px] whitespace-pre-line">
                        {concern.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex w-full justify-between my-12">
            {/* Dot navigation */}
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center gap-2">
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === selectedIndex
                        ? "bg-[#434343]"
                        : "bg-[#CCCCCC] hover:bg-gray-400"
                    }`}
                    onClick={() => scrollTo(index)}
                    aria-label={`Scroll to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="">
              <button
                onClick={scrollPrev}
                className={`rounded-full p-2 bg-white border-black border-[1px] mr-3 ${
                  !canScrollPrev
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-50"
                }`}
                disabled={!canScrollPrev}
              >
                <ArrowLeft className="w-6 h-6 text-black" />
              </button>

              <button
                onClick={scrollNext}
                className={`rounded-full p-2 bg-white border-black border-[1px] ${
                  !canScrollNext
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-50"
                }`}
                disabled={!canScrollNext}
              >
                <ArrowRight className="w-6 h-6 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
