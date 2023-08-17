import Image from "next/image";
import React from "react";
import LinkPath from "../utils/linkPath";
interface Props {
  size?: number;
}
const Logo: React.FC<Props> = ({ size = 50 }) => {
  return (
    <Image src={LinkPath.logo} width={size} height={size} alt="Manick Logo" />
  );
};

export default Logo;
