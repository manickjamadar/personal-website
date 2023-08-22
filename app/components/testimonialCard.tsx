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
    <div className="relative glass p-8 rounded-lg flex flex-col items-center max-w-xl">
      <Image
        src={imageUrl}
        width={90}
        height={90}
        alt={`${name} Profile Picture`}
        className="hidden sm:block rounded-full object-cover border-4 border-gray-500 border-opacity-20 absolute -top-0 -translate-y-1/2"
      />
      <Image
        src={imageUrl}
        width={76}
        height={76}
        alt={`${name} Profile Picture`}
        className="sm:hidden rounded-full object-cover border-4 border-gray-500 border-opacity-20 absolute -top-0 -translate-y-1/2"
      />
      <Spacer vertical={26} />
      <div className="flex gap-3 items-center text-xl sm:text-2xl">
        <h3>{name}</h3>
      </div>
      <Spacer vertical={6} />
      <p className="text-base sm:text-lg text-orange-gradient font-bold">
        {designation}
      </p>
      <Spacer vertical={20} />
      <p className="text-sm sm:text-base text-slate-300 text-center">
        &quot;{quote}&quot;
      </p>
    </div>
  );
};

export default TestimonialCard;
