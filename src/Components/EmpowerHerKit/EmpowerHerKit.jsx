/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Navigation from "./Navigation";
import IntroSection from "./IntroSection";
import CallToAction from "./CallToAction";

function EmpowerHerKit() {
  return (
    <HomeFrame>
      <Header />
      <Navigation />
      <main>
        <IntroSection />
        <CallToAction />
      </main>
    </HomeFrame>
  );
}

const HomeFrame = styled.div`
  background-color: #dcd4c7;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 51px 20px 96px;
  box-sizing: border-box;
  margin: 0;
`;

export default EmpowerHerKit;
