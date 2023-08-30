import LinkPath from "@/app/utils/linkPath";
import React from "react";
import SocialLinks from "../socialLinks";
import MorphTexts from "../MorphTexts";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <p className="border border-primary-500 border-opacity-20 bg-primary-500 bg-opacity-5 text-sm sm:text-base px-8 py-2 sm:px-12 sm:py-2 rounded-full">
        Hello! 👋 My Name is
      </p>
      <h2 className="text-4xl md:text-5xl font-bold font-sans">
        Manick Jamadar
      </h2>
      <MorphTexts
        texts={["Full Stack Developer", "UI/UX Designer", "Problem Solver"]}
      />
      <p className="text-gray-400 text-base sm:text-lg md:text-xl">
        I build real apps for real users to solve real problems
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <a href={LinkPath.bookMeeting} target="_blank" className="primary-btn">
          Book Meeting
        </a>
        <a href={LinkPath.projects} className="primary-outline-btn">
          See My Work
        </a>
      </div>
      <SocialLinks />
    </div>
  );
};

export default Hero;
