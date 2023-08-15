import React from "react";
import { ITestimonial } from "../data/testimonials";
import Image from "next/image";
import { RxExternalLink } from "react-icons/rx";
import Link from "next/link";
import Spacer from "./spacer";
interface Props {
  testimonial: ITestimonial;
}
const TestimonialCard: React.FC<Props> = ({ testimonial }) => {
  const { designation, imageUrl, name, profileUrl, quote } = testimonial;
  return (
    <div className="p-6 bg-gray-800 rounded-lg flex flex-col items-center max-w-lg">
      <Image
        src={imageUrl}
        width={100}
        height={100}
        alt={`${name} Profile Picture`}
        objectFit="cover"
        className="rounded-full"
      />
      <Spacer vertical={10} />
      <div className="flex gap-3 items-center text-2xl">
        <p>{name}</p>
        <Link href={profileUrl} target="_blank">
          <RxExternalLink />
        </Link>
      </div>
      <Spacer vertical={6} />
      <p className="text-lg text-orange-gradient">{designation}</p>
      <Spacer vertical={20} />
      <p>&quot;{quote}&quot;</p>
    </div>
  );
};

export default TestimonialCard;
