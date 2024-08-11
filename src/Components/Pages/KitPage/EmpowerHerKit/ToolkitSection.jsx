/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styled from "styled-components";

function ToolkitSection() {
  const toolkitItems = [
    { title: "Salary", active: true },
    { title: "Negotiation 101" },
    { title: "Market Yourself" },
    { title: "Pay Discussion" },
  ];

  return (
    <Section>
      <ToolkitList>
        {toolkitItems.map((item, index) => (
          <ToolkitItem key={index} active={item.active}>
            {item.title}
          </ToolkitItem>
        ))}
      </ToolkitList>
      <Divider />
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  margin-top: 60px;
  width: 100%;
  flex-direction: column;
  padding: 0 47px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const ToolkitList = styled.ul`
  display: flex;
  width: 643px;
  max-width: 100%;
  gap: 40px 64px;
  text-align: center;
  flex-wrap: wrap;
  padding: 1px 16px 1px 52px;
  font: 400 20px Josefin Sans, sans-serif;
  list-style-type: none;
  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;

const ToolkitItem = styled.li`
  color: ${props => props.active ? "#0db4a6" : "#06423d"};
  z-index: 10;
`;

const Divider = styled.div`
  background-color: #92dfbe;
  display: flex;
  margin-top: 10px;
  height: 14px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export default ToolkitSection;