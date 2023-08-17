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
      <section id="specilization">
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
      <section id="contact">
        <Spacer vertical={90} />
        <ContactSection />
      </section>
    </Container>
  );
};

export default HomePage;
