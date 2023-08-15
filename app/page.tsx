import React from "react";
import Container from "./components/Container";
import Header from "./components/sections/header";
import Hero from "./components/sections/hero";
import Spacer from "./components/spacer";
import SpecilizationSection from "./components/sections/specilizationSection";
import SkillSection from "./components/sections/skillSection";
import ProjectSection from "./components/sections/projectSection";

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
    </Container>
  );
};

export default HomePage;
