"use client";
import React, { useEffect, useState } from "react";
import TestimonialCard from "./testimonialCard";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { ITestimonial } from "../data/testimonials";
import { FaRProject } from "react-icons/fa";
interface Props {
  testimonials: ITestimonial[];
}
const TestimonialCarousel: React.FC<Props> = ({ testimonials }) => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const next = () => {
    setActiveTestimonialIndex((index) =>
      index < testimonials.length - 1 ? index + 1 : index
    );
  };
  const prev = () => {
    setActiveTestimonialIndex((index) => (index > 0 ? index - 1 : index));
  };
  const isPrevAvailable = activeTestimonialIndex > 0;
  const isNextAvailable = activeTestimonialIndex < testimonials.length - 1;
  const activeTestimonial = testimonials[activeTestimonialIndex];
  if (testimonials.length === 0) {
    return null;
  }
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <TestimonialCard testimonial={activeTestimonial} />
      <div className="flex gap-4 items-center">
        <div
          className={`p-2 rounded-full transition duration-200 ${
            isPrevAvailable
              ? "bg-primary-500 bg-opacity-80 hover:bg-opacity-100 active:scale-90 cursor-pointer text-white"
              : "bg-slate-700 bg-opacity-60 text-slate-400"
          }`}
          onClick={prev}
        >
          <MdKeyboardArrowLeft />
        </div>
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
              activeTestimonialIndex === i
                ? "bg-primary-500 scale-125"
                : "bg-gray-700 hover:bg-gray-500"
            } `}
            onClick={() => setActiveTestimonialIndex(i)}
          ></div>
        ))}
        <div
          className={`p-2 rounded-full transition duration-200 ${
            isNextAvailable
              ? "bg-primary-500 bg-opacity-80 hover:bg-opacity-100 active:scale-90 cursor-pointer text-white"
              : "bg-slate-700 bg-opacity-60 text-slate-400"
          }`}
          onClick={next}
        >
          <MdKeyboardArrowRight />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
