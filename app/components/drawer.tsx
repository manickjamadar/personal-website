import React from "react";
import { MdOutlineClose } from "react-icons/md";
import Spacer from "./spacer";
import Logo from "./logo";
import navLinks, { INavLink } from "../data/navLinks";
import Link from "next/link";
import LinkPath from "../utils/linkPath";
import SocialLinks from "./socialLinks";
interface Props {
  onClose?: () => void;
  links: INavLink[];
}
const Drawer: React.FC<Props> = ({ onClose, links }) => {
  const closeDrawer = () => onClose && onClose();
  return (
    <div className="fixed top-0 right-0 w-full h-screen bg-primary-900 max-w-md z-50 flex flex-col justify-between py-6">
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
          <h2 className="text-center text-3xl">Manick Jamadar</h2>
          <p className="text-center text-sm">
            I build real apps for real users to solve real problems
          </p>
        </div>
        <Spacer vertical={20} />
        <nav className="flex flex-col">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className="hover:bg-primary-500 p-4 px-8"
              onClick={closeDrawer}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex flex-col items-center gap-4">
        <button className="primary-btn">Book Meeting</button>
        <a
          href={LinkPath.resume}
          target="_blank"
          className="primary-outline-btn"
        >
          Resume
        </a>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Drawer;
