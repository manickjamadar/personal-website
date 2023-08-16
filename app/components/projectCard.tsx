import React from "react";
import { IProject } from "../data/projects";
import Image from "next/image";
import Spacer from "./spacer";
import { RxExternalLink } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
interface Props {
  project: IProject;
}
const ProjectCard: React.FC<Props> = ({ project }) => {
  const { category, description, imageUrl, skills, title, liveUrl, sourceUrl } =
    project;
  return (
    <div className="p-8 bg-[#252537] rounded-lg border border-gray-600">
      <div className="aspect-video relative rounded-lg overflow-clip bg-primary-950">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`${title} Image`}
            objectFit="cover"
            fill={true}
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
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start">
          <p className="text-primary uppercase text-sm font-bold">{category}</p>
          <h3 className="text-lg border-b-2 border-primary pb-2">{title}</h3>
        </div>
        <p>{description}</p>
        <div className="flex gap-3">
          {skills.map(({ icon, name, color }) => (
            <div key={name} className="" style={{ color: color, fontSize: 20 }}>
              {icon}
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          {liveUrl && (
            <Link href={liveUrl} target="_blank" className="icon-btn">
              <RxExternalLink />
            </Link>
          )}
          {sourceUrl && (
            <Link href={sourceUrl} target="_blank" className="icon-btn">
              <FaGithub />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
