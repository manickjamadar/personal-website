import LinkPath from "../utils/linkPath";

const navLinks: { name: string; url: string; target: "_self" | "_blank" }[] = [
  { name: "Home", url: LinkPath.home, target: "_self" },
  { name: "Skills", url: LinkPath.skills, target: "_self" },
  { name: "Projects", url: LinkPath.projects, target: "_self" },
  { name: "Testimonials", url: LinkPath.testimonials, target: "_self" },
  { name: "FAQ", url: LinkPath.faq, target: "_self" },
  { name: "Resume", url: LinkPath.resume, target: "_blank" },
];
export default navLinks;
