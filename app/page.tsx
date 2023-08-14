import React from "react";
import Container from "./components/Container";
import Header from "./components/sections/header";
import Hero from "./components/sections/hero";
import Spacer from "./components/spacer";

const HomePage = () => {
  return (
    <Container>
      <Header />
      <Spacer vertical={90} />
      <Hero />
    </Container>
  );
};

export default HomePage;
