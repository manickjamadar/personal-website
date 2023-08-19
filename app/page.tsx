"use client";
import React, { useEffect, useState } from "react";
import Container from "./components/Container";
import Header from "./components/sections/header";
import Hero from "./components/sections/hero";
import Spacer from "./components/spacer";
import SpecilizationSection from "./components/sections/specilizationSection";
import SkillSection from "./components/sections/skillSection";
import ProjectSection from "./components/sections/projectSection";
import TestimonialSection from "./components/sections/testimonialSection";
import FAQSection from "./components/sections/faqSection";
import ContactSection from "./components/sections/contactSection";
import SideNav from "./components/sideNav";
import navLinks from "./data/navLinks";

const HomePage = () => {
  const [activeLink, setActiveLink] = useState("/#");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section"); // Assuming your sections have the <section> tag
      const scrollPosition = window.scrollY;
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Adjust the offset if needed
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          if (!section.getAttribute("id")) {
            return;
          }
          const hash = `#${section.getAttribute("id")}`;
          const actualHash = hash === "#home" ? "#" : hash;
          window.history.replaceState(null, "", actualHash);
          setActiveLink("/" + actualHash);
        }
      });
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full z-50 ${
          scrolled &&
          "bg-primary-500 bg-opacity-10 backdrop-filter backdrop-blur-xl border-b border-white/10"
        }`}
      >
        <Header activeLink={activeLink} />
      </div>
      <Container>
        <section id="home">
          <Spacer vertical={120} />
          <Hero />
        </section>
        <section>
          <Spacer vertical={90} />
          <SpecilizationSection />
        </section>
        <section id="skills">
          <Spacer vertical={90} />
          <SkillSection />
        </section>
        <section id="projects">
          <Spacer vertical={90} />
          <ProjectSection />
        </section>
        <section id="testimonials">
          <Spacer vertical={90} />
          <TestimonialSection />
        </section>
        <section id="faq">
          <Spacer vertical={90} />
          <FAQSection />
        </section>
        <Spacer vertical={150} />
      </Container>
      <SideNav links={navLinks} activeLink={activeLink} />
    </div>
  );
};

export default HomePage;
