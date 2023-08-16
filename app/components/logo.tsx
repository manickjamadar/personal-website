import Image from "next/image";
import React from "react";
interface Props {
  size?: number;
}
const Logo: React.FC<Props> = ({ size = 50 }) => {
  return (
    <Image
      src={"/assets/images/manick-logo.svg"}
      width={size}
      height={size}
      alt="Manick Logo"
    />
  );
};

export default Logo;
