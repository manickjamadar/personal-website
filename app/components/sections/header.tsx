"use client";
import React, { useState } from "react";
import Logo from "../logo";
import navLinks from "@/app/data/navLinks";
import { RiMenu4Fill } from "react-icons/ri";
import Drawer from "../drawer";
import LinkPath from "@/app/utils/linkPath";
interface Props {
  activeLink?: string;
  onLinkClick?: (url: string) => void;
  onMenuClick?: () => void;
}
const Header: React.FC<Props> = ({
  activeLink = "/#",
  onLinkClick,
  onMenuClick,
}) => {
  return (
    <div className="w-full mx-auto max-w-7xl px-8 sm:px-16 md:px-24 py-3 md:py-4">
      <div className="flex items-center justify-between">
        <Logo size={50} className="hidden sm:block" />
        <Logo size={40} className="sm:hidden" />
        <div className="gap-8 items-center hidden min-[900px]:flex">
          <nav className="flex gap-6 ">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className={`${
                  activeLink === link.url
                    ? "text-white"
                    : "text-zinc-400 hover:text-white transition duration-200"
                } text-sm font-semibold`}
                onClick={() => onLinkClick && onLinkClick(link.url)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={LinkPath.resume}
              target="_blank"
              className="text-zinc-400 text-sm hover:text-white transition duration-300"
            >
              Resume
            </a>
          </nav>
          <button className="primary-btn">Book Meeting</button>
        </div>
        <div
          className="text-white text-2xl sm:text-3xl min-[900px]:hidden cursor-pointer"
          onClick={onMenuClick}
        >
          <RiMenu4Fill />
        </div>
      </div>
    </div>
  );
};

export default Header;
