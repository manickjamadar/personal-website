import LinkPath from "../utils/linkPath";

export interface ITestimonial {
  name: string;
  designation: string;
  imageUrl: string;
  profileUrl?: string;
  quote: string;
}

const myTestimonials: ITestimonial[] = [
  {
    designation: "Freelance UI/UX designer",
    imageUrl: LinkPath.nasrinKhatunProfileImage,
    name: "Nasrin Khatun",
    quote:
      "Manick Jamadar's UI/UX designs are inspiring and exceptional. His attention to detail, user-centric approach, and ability to transform ideas into captivating interfaces make working together an absolute delight",
  },
];

export default myTestimonials;
