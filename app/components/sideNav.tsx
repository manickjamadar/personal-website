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
      <div className="hidden md:flex flex-col gap-4 fixed right-10 xl:right-20 top-1/2 translate-x-1/2 z-20">
        {links.map(({ name, url }) => (
          <a
            key={name}
            href={url}
            className={`w-3 h-3 ${
              activeLink === url
                ? "scale-110 rotate-45 bg-primary-500 rounded-sm border border-primary-400"
                : "border border-white border-opacity-30 rounded-sm hover:bg-white hover:border-white hover:rotate-45 hover:-translate-y-[2px]"
            } transition-all duration-200 cursor-pointer`}
            data-tooltip-id="side-nav-tooltip"
            data-tooltip-content={name}
            data-tooltip-place="left"
            aria-label={name + " Section"}
          ></a>
        ))}
      </div>
      <Tooltip id="side-nav-tooltip" />
    </>
  );
};

export default SideNav;
