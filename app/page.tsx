import React from "react";
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

const HomePage = () => {
  return (
    <Container>
      <Header />
      <Spacer vertical={90} />
      <Hero />
      <div id="specilization">
        <Spacer vertical={90} />
        <SpecilizationSection />
      </div>
      <div id="skills">
        <Spacer vertical={90} />
        <SkillSection />
      </div>
      <div id="projects">
        <Spacer vertical={90} />
        <ProjectSection />
      </div>
      <div id="testimonials">
        <Spacer vertical={90} />
        <TestimonialSection />
      </div>
      <div id="faq">
        <Spacer vertical={90} />
        <FAQSection />
      </div>
      <div>
        <Spacer vertical={90} />
        <ContactSection />
      </div>
    </Container>
  );
};

export default HomePage;
