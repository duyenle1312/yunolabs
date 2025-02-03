"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Sample testimonial data
const testimonials = [
  {
    quote:
      "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    quote:
      "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    quote:
      "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    quote:
      "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    quote:
      "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    quote:
      "6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    quote:
      "7 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    quote:
      "8 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
    name: "Name Surname",
    position: "Position, Company name",
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 2 >= testimonials.length ? 0 : prev + 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev - 2 < 0 ? testimonials.length - 2 : prev - 2
    );
  };

  return (
    <section className="md:py-[112px] py-12 md:px-[64px] px-6 bg-[#CDBCAB]">
      <div className="">
        <h2 className="lg:text-[64px] md:text-[48px] text-[48px] font-medium leading-[76.8px] text-center text-[#6B6356] mb-16">
          Don&apos;t just take our word for it
        </h2>

        <div className="relative flex flex-row items-center ">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="p-2 rounded-full border-[#6B6356] border-[1px] text-gray-400 hover:border-gray-600 hover:text-gray-600 transition-colors"
            aria-label="Previous testimonials"
          >
            <ArrowLeft className="h-6 w-6 text-[#6B6356]" />
          </button>

          {/* Testimonials Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto ">
            {testimonials
              .slice(currentSlide, currentSlide + 2)
              .map((testimonial, index) => (
                <div key={currentSlide + index} className="text-center">
                  <blockquote className="text-[18px] font-[400px] leading-[27px] text-[#6B6356] mb-6">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <cite className="not-italic">
                    <div className="text-[24px] font-medium leading-[28.8px] text-[#6B6356] mb-1">
                      {testimonial.name}
                    </div>
                    <div className="text-[18px] font-[400px] leading-[27px] text-[#6B6356]">
                      {testimonial.position}
                    </div>
                  </cite>
                </div>
              ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full border-[#6B6356] border-[1px] text-gray-400 hover:border-gray-600 hover:text-gray-600 transition-colors"
            aria-label="Next testimonials"
          >
            <ArrowRight className="h-6 w-6 text-[#6B6356]" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-12">
          {Array.from({ length: testimonials.length / 2 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index * 2)}
              className={`h-2 w-2 rounded-full transition-all ${
                currentSlide === index * 2 ? "bg-[#6B6356]" : "bg-[#CCCCCC]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
