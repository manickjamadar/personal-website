import React from "react";
import Logo from "../logo";
import navLinks from "@/app/data/navLinks";
import { RiMenu4Fill } from "react-icons/ri";
const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <Logo />
      <div className="gap-8 items-center hidden min-[900px]:flex">
        <nav className="flex gap-6 ">
          {navLinks.map((link) => (
            <a key={link.name} href={link.url} target={link.target}>
              {link.name}
            </a>
          ))}
        </nav>
        <button className="primary-btn">Book Meeting</button>
      </div>
      <div className="text-white text-3xl min-[900px]:hidden">
        <RiMenu4Fill />
      </div>
    </div>
  );
};

export default Header;
