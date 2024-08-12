/**
 * This code was generated by Builder.io.
 */
import React, { useState } from "react";
import styled from "styled-components";

function ToolkitTabs(props) {
  const { tabs, setActiveTab, activeTab } = props;

  console.log(activeTab)

  return (
    <TabsWrapper>
      <TabList>
        <SubTabList>
        <SubTab
            active={activeTab.tabName === tabs[0]}
            onClick={() => setActiveTab({tabName: tabs[0], index: 0})}
          >
            {tabs[0]}
          </SubTab>
          <SubTab
            active={activeTab.tabName === tabs[1]}
            onClick={() => setActiveTab({tabName: tabs[1], index: 1})}
          >
            {tabs[1]}
          </SubTab>
          <SubTab
            active={activeTab.tabName === tabs[2]}
            onClick={() => setActiveTab({tabName: tabs[2], index: 2})}
          >
            {tabs[2]}
          </SubTab>
          <SubTab
            active={activeTab.tabName === tabs[3]}
            onClick={() => setActiveTab({tabName: tabs[3], index: 3})}
          >
            {tabs[3]}
          </SubTab>
        </SubTabList>
      </TabList>
      <TabIndicator />
    </TabsWrapper>
  );
}

const TabsWrapper = styled.section`
  display: flex;
  margin-top: 40px;
  width: 100%;
  flex-direction: column;
  padding: 0 40px;
  margin-bottom: 30px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 30px;
    padding: 0 20px;
  }
`;

const TabList = styled.div`
  display: flex;
  width: 90%;
  max-width: 600px;
  gap: 30px 50px;
  color: #06423d;
  text-align: center;
  flex-wrap: wrap;
  padding: 1px 16px 1px 40px;
  font: 400 18px Josefin Sans, sans-serif;
  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;

const Tab = styled.button`
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const SubTabList = styled.div`
  display: flex;
  align-items: start;
  gap: 20px;
  flex-grow: 1;
  flex-basis: auto;
`;

const SubTab = styled.button`
  background: none;
  border: none;
  color: ${props => (props.active ? "#0db4a6" : "inherit")};
  font: inherit;
  cursor: pointer;
  z-index: 10;
  padding: 1px 0;
`;

const TabIndicator = styled.div`
  background-color: #92dfbe;
  display: flex;
  margin-top: 10px;
  height: 10px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export default ToolkitTabs;