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

const HomePage = () => {
  return (
    <Container>
      <Header />
      <Spacer vertical={90} />
      <Hero />
      <Spacer vertical={90} />
      <SpecilizationSection />
      <Spacer vertical={90} />
      <SkillSection />
      <Spacer vertical={90} />
      <ProjectSection />
      <Spacer vertical={90} />
      <TestimonialSection />
      <Spacer vertical={90} />
      <FAQSection />
    </Container>
  );
};

export default HomePage;
