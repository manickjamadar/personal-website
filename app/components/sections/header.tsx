"use client";
import React, { useState } from "react";
import Logo from "../logo";
import navLinks from "@/app/data/navLinks";
import { RiMenu4Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import Spacer from "../spacer";
import SocialLinks from "../socialLinks";
import Link from "next/link";
import LinkPath from "@/app/utils/linkPath";
import Drawer from "../drawer";
const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const openDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);
  return (
    <>
      <div className="flex items-center justify-between">
        <Logo />
        <div className="gap-8 items-center hidden min-[900px]:flex">
          <nav className="flex gap-6 ">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.url} target={link.target}>
                {link.name}
              </Link>
            ))}
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
