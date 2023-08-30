import React from "react";
import { MdOutlineClose } from "react-icons/md";
import Spacer from "./spacer";
import Logo from "./logo";
import { INavLink } from "../data/navLinks";
import LinkPath from "../utils/linkPath";
import SocialLinks from "./socialLinks";
import { motion } from "framer-motion";
interface Props {
  onClose?: () => void;
  links: INavLink[];
  onLinkClick?: (url: string) => void;
  activeLink?: string;
  visible?: boolean;
}
const Drawer: React.FC<Props> = ({
  onClose,
  links,
  onLinkClick,
  activeLink = "/",
  visible = false,
}) => {
  const closeDrawer = () => onClose && onClose();
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: visible ? "0%" : "100%" }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="overflow-auto fixed top-0 right-0 w-full h-screen  max-w-md z-[999] bg-background bg-opacity-90 flex flex-col justify-between py-6 backdrop-filter backdrop-blur"
    >
      <div>
        <div
          className="text-white text-3xl cursor-pointer flex justify-end px-6"
          onClick={closeDrawer}
        >
          <MdOutlineClose />
        </div>
        <Spacer vertical={20} />
        <div className="flex flex-col items-center gap-3 px-6">
          <Logo />
          <h2 className="text-center text-3xl font-bold">Manick Jamadar</h2>
          <p className="text-center text-sm text-gray-300">
            I build real apps for real users to solve real problems
          </p>
        </div>
        <Spacer vertical={20} />
        <nav className="flex flex-col">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className={`${
                activeLink === link.url ? "bg-primary-500 bg-opacity-20" : ""
              } px-8 py-4 text-sm`}
              onClick={() => onLinkClick && onLinkClick(link.url)}
              aria-label={link.name + " Section"}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col gap-6">
          <a
            href={LinkPath.bookMeeting}
            target="_blank"
            className="primary-btn self-stretch"
            aria-label="Book Meeting"
          >
            Book Meeting
          </a>
          <a
            href={LinkPath.resume}
            target="_blank"
            className="primary-outline-btn self-stretch"
            aria-label="Resume"
          >
            Resume
          </a>
        </div>
        <SocialLinks />
      </div>
    </motion.div>
  );
};

export default Drawer;
