import React from "react";

const ContactSection = () => {
  return (
    <div className="bg-primary bg-opacity-30 border border-slate-700 flex flex-col items-center p-10 rounded-lg gap-8">
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-orange-gradient text-3xl">Start a Conversation</h2>
        <p>Find out some common questions people ask me</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <button className="primary-btn">Book a Meeting</button>
        <p>or contact me at contact@manickjamadar.com</p>
      </div>
    </div>
  );
};

export default ContactSection;
