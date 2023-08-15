export interface ITestimonial {
  name: string;
  designation: string;
  imageUrl: string;
  profileUrl: string;
  quote: string;
}

const myTestimonials: ITestimonial[] = [
  {
    designation: "Founder & CEO at Nessvel",
    imageUrl: "/assets/images/profile-1.png",
    name: "Subhadip Maity",
    profileUrl: "https://linkedin.com",
    quote:
      "Manick was a real pleasure to work with and we look forward to working with him again. He's definitely the kind of designer you can trust with a project from start to finish",
  },
  {
    designation: "UI/UX designer at Promptyland",
    imageUrl: "/assets/images/profile-2.png",
    name: "Nasrin Khatun",
    profileUrl: "https://linkedin.com",
    quote:
      "Manick was a real pleasure to work with and we look forward to working with him again. He's definitely the kind of designer you can trust with a project from start to finish",
  },
];

export default myTestimonials;
