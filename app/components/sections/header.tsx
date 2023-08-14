import LinkPath from "@/app/utils/linkPath";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <Image src={LinkPath.logo} width={50} height={50} alt="Main Logo" />
      <div className="flex gap-8 items-center">
        <nav className="flex gap-6 ">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Skills</Link>
          <Link href={"/"}>Work</Link>
          <Link href={"/"}>Resume</Link>
        </nav>
        <button className="primary-btn">Book Meeting</button>
      </div>
    </div>
  );
};

export default Header;
