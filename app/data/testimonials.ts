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
    designation: "Founder & CEO at Nessvel",
    imageUrl: LinkPath.subhadipMaityProfileImage,
    name: "Subhadip Maity",
    quote:
      "Manick Jamadar is an exceptional software developer at Nessvel IT Services. His technical brilliance, innovative solutions, and collaborative spirit consistently propel our projects to unparalleled success. A true asset to our team",
  },
  {
    designation: "Freelance UI/UX designer",
    imageUrl: LinkPath.nasrinKhatunProfileImage,
    name: "Nasrin Khatun",
    quote:
      "Manick Jamadar's UI/UX designs are inspiring and exceptional. His attention to detail, user-centric approach, and ability to transform ideas into captivating interfaces make working together an absolute delight",
  },
];

export default myTestimonials;
