import React from "react";
import Container from "./components/Container";
import Header from "./components/sections/header";
import Hero from "./components/sections/hero";
import Spacer from "./components/spacer";
import Specilization from "./components/sections/specilization";

const HomePage = () => {
  return (
    <Container>
      <Header />
      <Spacer vertical={90} />
      <Hero />
      <Spacer vertical={90} />
      <Specilization />
    </Container>
  );
};

export default HomePage;
