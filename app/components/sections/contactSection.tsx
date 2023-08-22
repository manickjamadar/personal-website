import React from "react";
import Spacer from "../spacer";
import Container from "../Container";

const ContactSection = () => {
  return (
    <div className="w-full max-w-7xl px-8 sm:px-16 md:px-24 absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
      <div className="py-8 px-8 glass rounded-lg flex flex-col justify-center items-center text-center">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold">
          Start a <span className="text-orange-gradient">Conversation</span>
        </h2>
        <Spacer vertical={16} />
        <p className="text-slate-300 text-sm sm:text-base max-w-md">
          I would love to discuss any product and design-related work and also
          share my knowledge
        </p>
        <Spacer vertical={30} />
        <button className="primary-outline-btn">Book a Meeting</button>
      </div>
    </div>
  );
};

export default ContactSection;
