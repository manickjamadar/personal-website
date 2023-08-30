import { HiOutlinePaintBrush } from "react-icons/hi2";
import { GoDatabase, GoDeviceDesktop } from "react-icons/go";
export interface ISpecilization {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}
const mySpecilizations: ISpecilization[] = [
  {
    title: "Frontend Development",
    description:
      "Experienced in expertly crafting user-centric and responsive frontend apps for seamless digital experiences",
    icon: <GoDeviceDesktop />,
    color: "#bd3a71",
  },
  {
    title: "Backend Development",
    description:
      "Proficient in creating robust and efficient server-side solutions for seamless application functionality",
    icon: <GoDatabase />,
    color: "#6655D0",
  },
  {
    title: "UI/UX Design",
    description:
      "Passionate about crafting captivating designs that seamlessly blend aesthetics and functionality for exceptional user experiences",
    icon: <HiOutlinePaintBrush />,
    color: "#0284C7",
  },
  //Upcoming
  //---------------------
  //Mobile App Development
  //Project Management
  //Digital Marketing
  //Content Creation
  //Entrepreneurship
];

export default mySpecilizations;
