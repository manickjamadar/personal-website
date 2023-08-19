import React from "react";
import Logo from "../logo";
import Link from "next/link";
import LinkPath from "@/app/utils/linkPath";
import SocialLinks from "../socialLinks";
import ContactSection from "./contactSection";
const Footer = () => {
  return (
    <div className="bg-primary-900 relative z-10">
      <ContactSection />
      <div className="p-12 pt-44 flex flex-col items-center gap-6">
        <Logo />
        <h2 className="text-3xl">Manick Jamadar</h2>
        <p className="text-slate-300">
          I build real apps for real users to solve real problems
        </p>
        <a className="primary-btn" href={LinkPath.resume} download={true}>
          Download Resume
        </a>
        <SocialLinks />
      </div>
      <div className="p-4 border-t border-slate-400 flex flex-col md:flex-row item-center justify-between gap-3">
        <p className="text-center">
          &copy; 2023 Manick Jamadar All Rights Reserved
        </p>
        <p className="text-center">
          Design and built with ❤️ by{" "}
          <span className="text-orange-gradient">Manick Jamadar</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
