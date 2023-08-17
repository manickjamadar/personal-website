import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import LinkPath from "../utils/linkPath";

const SocialLinks = () => {
  return (
    <div className="flex gap-3">
      <a
        className="p-2 border rounded-full"
        href={LinkPath.linkedIn}
        target="_blank"
      >
        <FaLinkedinIn />
      </a>
      <a className="p-2 border rounded-full" href={LinkPath.mail}>
        <MdEmail />
      </a>
      <a
        className="p-2 border rounded-full"
        href={LinkPath.github}
        target="_blank"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default SocialLinks;
