import Image from "next/image";
import React from "react";
import LinkPath from "./utils/linkPath";
import Container from "./components/Container";

const HomePage = () => {
  return (
    <Container>
      <Image src={LinkPath.logo} width={50} height={50} alt="Main Logo" />
    </Container>
  );
};

export default HomePage;
