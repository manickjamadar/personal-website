import LinkPath from "@/app/utils/linkPath";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <Image src={LinkPath.logo} width={50} height={50} alt="Main Logo" />
    </div>
  );
};

export default Header;
