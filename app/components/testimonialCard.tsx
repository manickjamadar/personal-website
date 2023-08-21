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
    <div className="relative p-8 bg-primary bg-opacity-10 border border-gray-700  rounded-lg flex flex-col items-center max-w-xl backdrop-filter backdrop-blur">
      <Image
        src={imageUrl}
        width={90}
        height={90}
        alt={`${name} Profile Picture`}
        className="rounded-full object-cover border-4 border-primary-500 border-opacity-20 absolute -top-0 -translate-y-1/2"
      />
      <Spacer vertical={26} />
      <div className="flex gap-3 items-center text-2xl">
        <h3>{name}</h3>
      </div>
      <Spacer vertical={6} />
      <p className="text-base text-orange-gradient font-semibold">
        {designation}
      </p>
      <Spacer vertical={20} />
      <p className="text-slate-300 text-center">&quot;{quote}&quot;</p>
    </div>
  );
};

export default TestimonialCard;
