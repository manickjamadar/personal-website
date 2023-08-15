import React from "react";
import SectionHeader from "../sectionHeader";
import TestimonialCarousel from "../testimonialCarousel";
import myTestimonials from "@/app/data/testimonials";

const TestimonialSection = () => {
  return (
    <div className="flex flex-col justify-center gap-8 items-center">
      <SectionHeader
        title="Testimonials"
        subtitle="People I've worked with said something about me"
      />
      <TestimonialCarousel testimonials={myTestimonials} />
    </div>
  );
};

export default TestimonialSection;
