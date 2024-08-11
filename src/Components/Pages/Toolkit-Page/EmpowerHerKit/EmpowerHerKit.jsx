import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import ToolboxInstructions from "./ToolboxInstructions";
import ToolboxIcon from "./ToolboxIcon";
import Header from "../../../EmpowerHerKit/Header";
import Navigation from "../../../EmpowerHerKit/Navigation";

function EmpowerHerKit() {
  const [active, setActive] = useState(false);
  const [showBubbles, setShowBubbles] = useState(false);
  const [bubblesVisible, setBubblesVisible] = useState(false);

  const handleClick = () => {
    if (!active) {
      setShowBubbles(true);
      setBubblesVisible(true); // Make bubbles visible when active is true
    } else {
      setBubblesVisible(false); // Trigger bubbles disappearance when active is false
    }
    setActive(!active);
  };

  // Automatically remove bubbles from DOM after they have disappeared
  useEffect(() => {
    if (!bubblesVisible) {
      const timer = setTimeout(() => setShowBubbles(false), 600); // Adjust the delay to match the animation duration
      return () => clearTimeout(timer);
    }
  }, [bubblesVisible]);

  return (
    <ToolkitFrame>
      <Header />
      <Navigation />
      <MainContent>
        {!active && <ToolboxInstructions />} {/* Hide instructions when active is true */}
        <ToolboxIconWrapper onClick={handleClick}>
          <ToolboxIcon active={active} />
        </ToolboxIconWrapper>
        {showBubbles && <Bubbles visible={bubblesVisible} />}
      </MainContent>
    </ToolkitFrame>
  );
}

// Keyframes for the bubble animations
const bubbleAnimationIn = keyframes`
  0% { opacity: 0; transform: scale(0); }
  100% { opacity: 1; transform: scale(1); }
`;

const bubbleAnimationOut = keyframes`
  0% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(0); }
`;

// Bubble component with inline SVG and links
const Bubbles = ({ visible }) => {
  return (
    <BubbleContainer>
      <BubbleLink href="#link1" $delay="0s" visible={visible}>
        <PlaceholderSVG />
      </BubbleLink>
      <BubbleLink href="#link2" $delay="0.3s" visible={visible}>
        <PlaceholderSVG />
      </BubbleLink>
      <BubbleLink href="#link3" $delay="0.6s" visible={visible}>
        <PlaceholderSVG />
      </BubbleLink>
    </BubbleContainer>
  );
};

// Styles
const ToolkitFrame = styled.main`
  background-color: #dcd4c7;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 51px 47px 0;
  min-height: 100vh;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const MainContent = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 100%;
`;

const ToolboxIconWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px; /* Adjust this value as needed for spacing */
  cursor: pointer;
  z-index: 2; /* Ensure the icon is above other elements */
`;

const BubbleContainer = styled.div`
  position: absolute;
  bottom: 400px; /* Adjust this value to position the bubbles above the ToolboxIcon */
  display: flex;
  justify-content: center;
  gap: 175px; /* Increased gap to spread the bubbles out more */
  z-index: 3; /* Ensure bubbles are above other elements */
  width: 100%; /* Ensure bubbles are centered horizontally */
`;

const BubbleLink = styled.a`
  width: 240px; /* 3 times larger than the original size */
  height: 240px;
  background-color: #F2C758; /* Yellow color from your toolkit */
  border-radius: 50%;
  animation: ${props => (props.visible ? bubbleAnimationIn : bubbleAnimationOut)} 0.6s ease-in forwards;
  animation-delay: ${props => props.$delay};
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const PlaceholderSVG = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
})`
  width: 120px; /* Adjust the SVG size to fit the smaller bubble */
  height: 120px;
  color: #fff; /* Set SVG color to white */
`;

const PlaceholderSVGContent = () => (
  <PlaceholderSVG>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </PlaceholderSVG>
);

export default EmpowerHerKit;
 