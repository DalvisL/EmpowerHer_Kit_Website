/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import ToolkitTabs from "./ToolkitTabs";
import ContentSection from "./ContentSection";

function EmpowerHerKit() {
  return (
    <StyledMain>
      <Header>EmpowerHer Kit</Header>
      <NavBar />
      <ToolkitTabs />
      <ContentSection />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  background-color: #dcd4c7;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 55px 0;
`;

const Header = styled.h1`
  color: #06423d;
  align-self: center;
  font: 400 60px Josefin Sans, sans-serif;
  margin-bottom: 30px;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

export default EmpowerHerKit;