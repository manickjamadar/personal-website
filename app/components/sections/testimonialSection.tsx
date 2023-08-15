import React from "react";
import SectionHeader from "../sectionHeader";
import TestimonialCard from "../testimonialCard";
import Spacer from "../spacer";

const TestimonialSection = () => {
  return (
    <div className="flex flex-col justify-center gap-8 items-center">
      <SectionHeader
        title="Testimonials"
        subtitle="People I've worked with said something about me"
      />
      <TestimonialCard
        testimonial={{
          designation: "Founder & CEO at Nessvel",
          imageUrl: "/assets/images/profile-1.png",
          name: "Subhadip Maity",
          profileUrl: "https://linkedin.com",
          quote:
            "Manick was a real pleasure to work with and we look forward to working with him again. He's definitely the kind of designer you can trust with a project from start to finish",
        }}
      />
      <div className="flex gap-4">
        <div className="w-3 h-3 rounded-full bg-primary-500"></div>
        <div className="w-3 h-3 rounded-full bg-slate-500"></div>
        <div className="w-3 h-3 rounded-full bg-slate-500"></div>
        <div className="w-3 h-3 rounded-full bg-slate-500"></div>
      </div>
    </div>
  );
};

export default TestimonialSection;
