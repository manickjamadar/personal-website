import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import LinkPath from "../utils/linkPath";
const links: { url: string; icon: React.ReactNode; name: string }[] = [
  { url: LinkPath.linkedIn, icon: <FaLinkedinIn />, name: "LinkedIn" },
  { url: LinkPath.mail, icon: <MdEmail />, name: "Mail" },
  { url: LinkPath.github, icon: <FaGithub />, name: "Github" },
];
const SocialLinks = () => {
  return (
    <div className="flex gap-3">
      {links.map(({ icon, name, url }) => (
        <a
          key={name}
          className="p-2 text-slate-300 border border-slate-300 rounded-full hover:scale-105 hover:-translate-y-[2px] hover:border-white hover:text-white cursor-pointer transition-all duration-200 hover:shadow-[0_0px_5px_2px_rgba(255,255,255,0.2)]"
          href={url}
          target="_blank"
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
