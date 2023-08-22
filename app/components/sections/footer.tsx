import React from "react";
import Logo from "../logo";
import Link from "next/link";
import LinkPath from "@/app/utils/linkPath";
import SocialLinks from "../socialLinks";
import ContactSection from "./contactSection";
const Footer = () => {
  return (
    <div className="relative z-10">
      <div className="bg-primary-800 bg-opacity-10 backdrop-filter backdrop-blur text-center">
        <div className="p-12 pt-44 flex flex-col items-center gap-6 border-t border-slate-50 border-opacity-[0.03]">
          <Logo />
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl">Manick Jamadar</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              I build real apps for real users to solve real problems
            </p>
          </div>
          <a className="primary-btn" href={LinkPath.resume} download={true}>
            Download Resume
          </a>
          <SocialLinks />
        </div>
        <div className="p-4 border-t border-slate-50 border-opacity-5 bg flex flex-col md:flex-row item-center justify-between gap-3 text-sm text-slate-300">
          <p className="text-center">
            &copy; 2023 Manick Jamadar All Rights Reserved
          </p>
          <p className="text-center">
            Design and built with ❤️ by{" "}
            <span className="text-orange-gradient font-bold">
              Manick Jamadar
            </span>
          </p>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default Footer;
