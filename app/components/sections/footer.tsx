import React from "react";
import Logo from "../logo";
import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  const footerLinks = [{}];
  return (
    <div className="bg-primary-900">
      <div className="p-12 flex flex-col items-center gap-3">
        <Logo />
        <h2 className="text-3xl">Manick Jamadar</h2>
        <p>I build real apps for real users to solve real problems</p>
        <div className="flex gap-6 text-gray-300">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Skills</Link>
          <Link href={"/"}>Work</Link>
          <Link href={"/"}>Resume</Link>
        </div>
        <button className="primary-btn">Download Resume</button>
        <div className="flex gap-3">
          <div className="p-2 border rounded-full">
            <FaLinkedinIn />
          </div>
          <div className="p-2 border rounded-full">
            <MdEmail />
          </div>
          <div className="p-2 border rounded-full">
            <FaGithub />
          </div>
        </div>
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
