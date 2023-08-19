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
      "A single-page application that helps filmmakers learn more about who their film might be suitable for.",
    icon: <GoDeviceDesktop />,
    color: "#bd3a71",
  },
  {
    title: "Backend Development",
    description:
      "A single-page application that helps filmmakers learn more about who their film might be suitable for.",
    icon: <GoDatabase />,
    color: "#6655D0",
  },
  {
    title: "UI/UX Design",
    description:
      "A single-page application that helps filmmakers learn more about who their film might be suitable for.",
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
