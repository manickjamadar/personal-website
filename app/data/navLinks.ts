import LinkPath from "../utils/linkPath";
export interface INavLink {
  name: string;
  url: string;
}
const navLinks: INavLink[] = [
  { name: "Home", url: LinkPath.hashHome },
  { name: "Skills", url: LinkPath.skills },
  { name: "Projects", url: LinkPath.projects },
  // { name: "Testimonials", url: LinkPath.testimonials },
  { name: "FAQ", url: LinkPath.faq },
];
export default navLinks;
