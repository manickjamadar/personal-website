import React from "react";
import Logo from "../logo";
import navLinks from "@/app/data/navLinks";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <Logo />
      <div className="flex gap-8 items-center">
        <nav className="flex gap-6 ">
          {navLinks.map((link) => (
            <a key={link.name} href={link.url} target={link.target}>
              {link.name}
            </a>
          ))}
        </nav>
        <button className="primary-btn">Book Meeting</button>
      </div>
    </div>
  );
};

export default Header;
