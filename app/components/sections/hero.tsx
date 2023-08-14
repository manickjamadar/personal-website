import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <p>Hello! 👋 My Name is</p>
      <p className="text-5xl font-bold">Manick Jamadar</p>
      <p className="font-bold text-6xl text-orange-gradient">
        Full Stack Web Developer
      </p>
      <p>I build real apps for users to solve real problems</p>
      <div className="flex gap-4">
        <button className="primary-btn">Book Meeting</button>
        <button className="primary-outline-btn">See My Work</button>
      </div>
    </div>
  );
};

export default Hero;
