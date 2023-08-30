import Image from "next/image";
import React from "react";
import LinkPath from "../utils/linkPath";
interface Props {
  size?: number;
  className?: string;
}
const Logo: React.FC<Props> = ({ size = 50, className }) => {
  return (
    <Image
      src={LinkPath.logo}
      width={size}
      height={size}
      alt="Manick Logo"
      className={className}
    />
  );
};

export default Logo;
