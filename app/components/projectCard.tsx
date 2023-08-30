import React from "react";
import { IProject } from "../data/projects";
import Image from "next/image";
import Spacer from "./spacer";
import { RxExternalLink } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Tooltip } from "react-tooltip";
interface Props {
  project: IProject;
}
const ProjectCard: React.FC<Props> = ({ project }) => {
  const { category, description, imageUrl, skills, title, liveUrl, sourceUrl } =
    project;
  return (
    <div className="glass max-w-sm p-5 rounded-lg flex flex-col">
      <div className="aspect-square relative rounded-lg overflow-clip bg-background">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`${title} Image`}
            fill={true}
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <Image
              src={"/assets/images/manick-logo.svg"}
              width={60}
              height={60}
              alt="Placeholder Logo"
              className="opacity-50"
            />
          </div>
        )}
      </div>
      <Spacer vertical={20} />
      <div className="flex flex-col gap-4 flex-1 justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col items-start gap-2">
            <p className="uppercase text-xs font-bold border border-orange-500 border-opacity-50 text-orange-500 px-3 py-1 rounded-full bg-orange-800 bg-opacity-20">
              {category}
            </p>
            <h3 className="text-xl sm:text-2xl">{title}</h3>
          </div>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 flex-wrap">
            {skills.map(({ icon, name, color }) => (
              <div
                key={name}
                className="cursor"
                style={{ color: color, fontSize: 20 }}
                data-tooltip-id="small-skill-tooltip"
                data-tooltip-content={name}
                data-tooltip-place="bottom"
              >
                {icon}
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                className="icon-btn"
                data-tooltip-id="link-tooltip"
                data-tooltip-content="Live"
                data-tooltip-place="bottom"
                aria-label={title + " Live Url"}
              >
                <RxExternalLink />
              </Link>
            )}
            {sourceUrl && (
              <Link
                href={sourceUrl}
                target="_blank"
                className="icon-btn"
                data-tooltip-id="link-tooltip"
                data-tooltip-content="Source"
                data-tooltip-place="bottom"
                aria-label={title + "Source Url"}
              >
                <FaGithub />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
