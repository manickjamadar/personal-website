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
    imageUrl: "/assets/images/profile-1.png",
    name: "Subhadip Maity",
    quote:
      "Manick was a real pleasure to work with and we look forward to working with him again. He's definitely the kind of designer you can trust with a project from start to finish",
  },
  {
    designation: "UI/UX designer at Promptyland",
    imageUrl: "/assets/images/profile-2.png",
    name: "Nasrin Khatun",
    profileUrl: "https://linkedin.com",
    quote:
      "Working with Manick was an absolute delight, and we eagerly anticipate the opportunity to collaborate with him once more. Undoubtedly, he exemplifies the type of designer",
  },
  {
    designation: "UI/UX Developer at Promptyland",
    imageUrl: "/assets/images/profile-2.png",
    name: "Adil Mirda",
    profileUrl: "https://linkedin.com",
    quote:
      "Working with Manick was an absolute delight, and we eagerly anticipate the opportunity to collaborate with him once more. Undoubtedly, he exemplifies the type of designer",
  },
  {
    designation: "Data Engineer at IBM",
    imageUrl: "/assets/images/profile-2.png",
    name: "Happy Sharma",
    profileUrl: "https://linkedin.com",
    quote:
      "Working with Manick was an absolute delight, and we eagerly anticipate the opportunity to collaborate with him once more. Undoubtedly, he exemplifies the type of designer",
  },
];

export default myTestimonials;
