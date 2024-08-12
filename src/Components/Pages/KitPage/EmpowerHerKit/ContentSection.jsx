/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styled from "styled-components";

function ContentSection(props) {
  const { tabContent, index } = props;

  // Check if tabContent is defined and has an item at the given index
  if (!tabContent || !tabContent[index]) {
    return <p>Loading content...</p>; // Or handle this case as needed
  }

  const contents = tabContent[index].contents;

  return (
    <ContentWrapper>
      <ContentColumns>
        <DescriptionColumn>
          <Description>
            {tabContent[index].description}
          </Description>
        </DescriptionColumn>
        <ResourcesColumn>
          <ResourcesBackground>
            <ScrollableContent>
              <ResourceTitle>{tabContent[index].title}</ResourceTitle>
              <ResourceText>
                {contents && contents.map((resource, index) => {
                  if (resource.type === 'video') {
                    return (
                      <VideoEmbed key={index} videoId={resource.videoId} />
                    );
                  } else if (resource.type === 'link') {
                    return (
                      <ResourceLink key={index} href={resource.href}>{resource.content}</ResourceLink>
                    );
                  } else if (resource.type === 'text') {
                    return (
                      <p key={index}>{resource.content}</p>
                    );
                  } else if (resource.type === 'image') {
                    return (
                      <img key={index} src={resource.src} alt={resource.content} />
                    );
                  } else {
                    return null;
                  }
                })}
              </ResourceText>
            </ScrollableContent>
          </ResourcesBackground>
        </ResourcesColumn>
      </ContentColumns>
    </ContentWrapper>
  );
}

// Styled component for the video container
const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #000;

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const VideoEmbed = ({ videoId }) => {
  return (
    <VideoWrapper>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
      />
    </VideoWrapper>
  );
};


const ContentWrapper = styled.section`
  background-color: #d9d9d9;
  padding: 60px 50px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const ContentColumns = styled.div`
  gap: 10%;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 30px;
  }
`;

const DescriptionColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 35%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Description = styled.p`
  background-color: #ffffff;
  align-self: stretch;
  color: #000000;
  text-align: center;
  max-width: 100%;
  margin: auto 0;
  padding: 40px 30px 90px;
  font: 400 24px Josefin Sans, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 30px;
    padding: 0 20px 80px;
  }
`;

const ResourcesColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 55%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
  }
`;

const ResourcesBackground = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  font-family: Josefin Sans, sans-serif;
  color: #06423d;
  font-weight: 400;
  text-align: center;
  width: 100%;
  padding: 30px 7px 0;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 30px;
  }
`;

const ScrollableContent = styled.div`
  background-color: #ffffff;
  z-index: 10;
  display: flex;
  min-height: 100px;
  flex-direction: column;
  height: 350px;
  overflow-y: auto;
  align-items: center;
  justify-content: start;
  padding: 35px 40px 90px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px 80px;
  }
`;

const ResourceTitle = styled.h2`
  font-size: 28px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ResourceText = styled.p`
  font-size: 16px;
  margin-top: 40px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 30px;
  }
`;

const ResourceLink = styled.a`
  display: block;
  margin: 10px 0;
  color: #06423d;
  text-decoration: underline;
`;

export default ContentSection;