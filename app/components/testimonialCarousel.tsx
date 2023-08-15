"use client";
import React, { useState } from "react";
import TestimonialCard from "./testimonialCard";
import Spacer from "./spacer";
import { ITestimonial } from "../data/testimonials";
interface Props {
  testimonials: ITestimonial[];
}
const TestimonialCarousel: React.FC<Props> = ({ testimonials }) => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  if (testimonials.length === 0) {
    return null;
  }
  const activeTestimonial = testimonials[activeTestimonialIndex];
  return (
    <div className="flex flex-col items-center gap-6">
      <TestimonialCard testimonial={activeTestimonial} />
      <div className="flex gap-4">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              activeTestimonialIndex === i ? "bg-primary-500" : "bg-slate-500"
            }`}
            onClick={() => setActiveTestimonialIndex(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
