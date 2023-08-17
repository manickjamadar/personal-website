import LinkPath from "@/app/utils/linkPath";
import React from "react";
import SocialLinks from "../socialLinks";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <p>Hello! 👋 My Name is</p>
      <h2 className="text-5xl font-bold">Manick Jamadar</h2>
      <h1 className="font-bold text-6xl text-orange-gradient">
        Full Stack Web Developer
      </h1>
      <p>I build real apps for users to solve real problems</p>
      <div className="flex gap-4 flex-wrap justify-center">
        <button className="primary-btn">Book Meeting</button>
        <a href={LinkPath.projects} className="primary-outline-btn">
          See My Work
        </a>
      </div>
      <SocialLinks />
    </div>
  );
};

export default Hero;
