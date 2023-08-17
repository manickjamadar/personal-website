"use client";
import React, { useState } from "react";
import Logo from "../logo";
import navLinks from "@/app/data/navLinks";
import { RiMenu4Fill } from "react-icons/ri";
import Link from "next/link";
import Drawer from "../drawer";
import { usePathname, useRouter } from "next/navigation";
import LinkPath from "@/app/utils/linkPath";
const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const openDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);
  const onLinkClick = (url: string) => {
    closeDrawer();
    setActiveLink(url);
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <Logo />
        <div className="gap-8 items-center hidden min-[900px]:flex">
          <nav className="flex gap-6 ">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                className={`${
                  activeLink === link.url
                    ? "border-b-2 border-primary-500 pb-1"
                    : "text-white"
                }`}
                onClick={() => onLinkClick(link.url)}
              >
                {link.name}
              </Link>
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
      {drawerVisible && <Drawer links={navLinks} onClose={closeDrawer} />}
    </>
  );
};

export default Header;
