import React from "react";
import { Tooltip } from "react-tooltip";
import { INavLink } from "../data/navLinks";
interface Props {
  links: INavLink[];
  activeLink?: string;
}
const SideNav: React.FC<Props> = ({ links, activeLink = "/#" }) => {
  return (
    <>
      <div className="hidden md:flex flex-col gap-4 fixed right-10 xl:right-20 top-1/2 translate-x-1/2">
        {links.map(({ name, url }) => (
          <a
            key={name}
            href={url}
            className={`w-3 h-3 ${
              activeLink === url
                ? "scale-125 rotate-45 bg-primary border-primary-800 rounded-sm"
                : "border-2 border-slate-500 rounded-sm hover:bg-white hover:border-white hover:rotate-45"
            } transition-all duration-300 cursor-pointer`}
            data-tooltip-id="side-nav-tooltip"
            data-tooltip-content={name}
            data-tooltip-place="left"
          ></a>
        ))}
      </div>
      <Tooltip id="side-nav-tooltip" />
    </>
  );
};

export default SideNav;
