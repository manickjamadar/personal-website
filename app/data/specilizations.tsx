import { FaDatabase } from "react-icons/fa";
import { MdDesktopWindows, MdDraw } from "react-icons/md";
export interface ISpecilization {
  title: string;
  description: string;
  icon: React.ReactNode;
}
const mySpecilizations: ISpecilization[] = [
  {
    title: "Frontend Development",
    description:
      "A single-page application that helps filmmakers learn more about who their film might be suitable for.",
    icon: <MdDesktopWindows />,
  },
  {
    title: "Backend Development",
    description:
      "A single-page application that helps filmmakers learn more about who their film might be suitable for.",
    icon: <FaDatabase />,
  },
  {
    title: "UI/UX Design",
    description:
      "A single-page application that helps filmmakers learn more about who their film might be suitable for.",
    icon: <MdDraw />,
  },
];

export default mySpecilizations;
