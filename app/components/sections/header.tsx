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
}
const Header: React.FC<Props> = ({ activeLink = "/#", onLinkClick }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const openDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);
  const linkClickHandler = (url: string) => {
    closeDrawer();
    onLinkClick && onLinkClick(url);
  };
  return (
    <>
      <div className="flex items-center justify-between fixed top-0 left-0 w-full box-border">
        <Logo />
        <div className="gap-8 items-center hidden min-[900px]:flex">
          <nav className="flex gap-6 ">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className={`${
                  activeLink === link.url
                    ? "border-b-2 border-primary-500 pb-1"
                    : "text-white"
                }`}
                onClick={() => linkClickHandler(link.url)}
              >
                {link.name}
              </a>
            ))}
            <a href={LinkPath.resume} target="_blank">
              Resume
            </a>
          </nav>
          <button className="primary-btn">Book Meeting</button>
        </div>
        <div
          className="text-white text-3xl min-[900px]:hidden cursor-pointer"
          onClick={openDrawer}
        >
          <RiMenu4Fill />
        </div>
      </div>
      {drawerVisible && (
        <Drawer
          links={navLinks}
          onClose={closeDrawer}
          onLinkClick={linkClickHandler}
          activeLink={activeLink}
        />
      )}
    </>
  );
};

export default Header;
