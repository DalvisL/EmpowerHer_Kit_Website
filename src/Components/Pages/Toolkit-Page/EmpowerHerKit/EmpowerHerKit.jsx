import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import ToolboxInstructions from "./ToolboxInstructions";
import ToolboxIcon from "./ToolboxIcon";
import Header from "../../../EmpowerHerKit/Header";
import Navigation from "../../../EmpowerHerKit/Navigation";
import { Link } from "react-router-dom";
import MentorshipIcon from '../../../../assets/591891_coach_coaching_management_mentor_mentoring_icon.svg';
import FamilyIcon from '../../../../assets/5149858_couple_family_health_kids_icon.svg';
import EqualPayIcon from '../../../../assets/11443667_equality_money_relatively_financial_equal_icon.svg';

function EmpowerHerKit(props) {
  const { chooseContent } = props;
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
        {showBubbles && <Bubbles visible={bubblesVisible} chooseContent={chooseContent} />}
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

// Bubble component with styled images and links
const Bubbles = (props) => {
  const { visible, chooseContent } = props;
  return (
    <BubbleContainer>
      <BubbleLink data-label="Equal Pay" to={'/kitpage'} $delay="0s" visible={visible} onClick={() => chooseContent('equalPay')}>
        <StyledImage src={EqualPayIcon} alt="Equal Pay" />
      </BubbleLink>
      <BubbleLink data-label="Mentorship" to={'/kitpage'} $delay="0.3s" visible={visible} onClick={() => chooseContent('mentorship')}>
        <StyledImage src={MentorshipIcon} alt="Mentorship" />
      </BubbleLink>
      <BubbleLink data-label="Family & Life Planning" to={'/kitpage'} $delay="0.6s" visible={visible} onClick={() => chooseContent('family')}>
        <StyledImage src={FamilyIcon} alt="Family" />
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
  bottom: 350px; /* Adjust this value to position the bubbles above the ToolboxIcon */
  display: flex;
  justify-content: center;
  gap: 175px; /* Increased gap to spread the bubbles out more */
  z-index: 3; /* Ensure bubbles are above other elements */
  width: 100%; /* Ensure bubbles are centered horizontally */
  
`;

const BubbleLink = styled(Link)`
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
  &::after {
    content: attr(data-label);
    visibility: hidden;
    opacity: 0;
    width: 120px;
    background-color: #06423d;
    font-family: 'Josefin Sans', sans-serif;
    color: white;
    text-align: center;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: 100%; /* Position below the bubble */
    left: 50%;
    transform: translateX(-50%);
    transition: opacity 0.3s, visibility 0.3s;

    /* Arrow adjustments */
    &::before {
      content: "";
      position: absolute;
      bottom: 100%; /* Arrow at the bottom of the tooltip */
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent black transparent;
    }
  }

  &:hover::after, &:hover::before {
    visibility: visible;
    opacity: 1;
  }
`;

const StyledImage = styled.img`
  width: 120px; /* Adjust the SVG size to fit the bubble */
  height: 120px;
  object-fit: contain;
  filter: invert(18%) sepia(6%) saturate(7484%) hue-rotate(130deg) brightness(101%) contrast(95%);
  
`;

export default EmpowerHerKit;