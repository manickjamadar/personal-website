import React from "react";
import Spacer from "../spacer";
import Container from "../Container";

const ContactSection = () => {
  return (
    <div className="w-full max-w-7xl px-8 sm:px-16 md:px-24 absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
      <div className="py-8 px-8 bg-primary-800 bg-opacity-10 backdrop-filter backdrop-blur-sm border border-slate-700 rounded-lg flex flex-col justify-center items-center text-center">
        <h2 className="text-orange-gradient text-4xl font-semibold">
          Start a Conversation
        </h2>
        <Spacer vertical={16} />
        <p className="text-slate-300">
          Im always open to discuss product and design work or partnership
          opportunities
        </p>
        <Spacer vertical={30} />
        <button className="primary-outline-btn">Book a Meeting</button>
      </div>
    </div>
  );
};

export default ContactSection;
