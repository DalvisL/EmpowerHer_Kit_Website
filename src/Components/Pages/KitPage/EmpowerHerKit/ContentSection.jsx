import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faVideo } from '@fortawesome/free-solid-svg-icons';

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
        <ResourcesColumn>
          <ResourcesBackground>
            <ScrollableContent>
              <ResourceTitle>{tabContent[index].title}</ResourceTitle>
              <ResourceText>
                {contents && contents.map((resource, idx) => {
                  if (resource.type === 'video') {
                    return (
                      <ResourceItem key={idx}>
                        <ActionIcon style={{alignSelf: 'flex-start'}}>
                          <FontAwesomeIcon icon={faVideo} />
                        </ActionIcon>
                        <VideoContainer>
                          <VideoEmbed videoId={resource.videoId} />
                        </VideoContainer>
                      </ResourceItem>
                    );
                  } else if (resource.type === 'link') {
                    const isTedTalk = /ted\.com/.test(resource.href); // Using regex to check for TedTalk
                    return (
                      <ResourceItem key={idx}>
                        <ActionIcon>
                          <FontAwesomeIcon icon={faBook} />
                          {isTedTalk && <FontAwesomeIcon icon={faVideo} style={{ marginLeft: '8px' }} />}
                        </ActionIcon>
                        <ResourceLink href={resource.href} target="_blank" rel="noopener noreferrer">
                          {resource.content}
                        </ResourceLink>
                      </ResourceItem>
                    );
                  } else if (resource.type === 'text') {
                    return (
                      <p key={idx}>{resource.content}</p>
                    );
                  } else if (resource.type === 'image') {
                    return (
                      <StyledImage key={idx} src={resource.src} alt={resource.content} />
                    );
                  } else {
                    return null;
                  }
                })}
              </ResourceText>
            </ScrollableContent>
          </ResourcesBackground>
        </ResourcesColumn>
        <DescriptionColumn>
          {/* New Text Box */}
          <AdditionalTextBox>
            {tabContent[index].additionalText}
          </AdditionalTextBox>
          <Description>
            {tabContent[index].description}
          </Description>
        </DescriptionColumn>
      </ContentColumns>
    </ContentWrapper>
  );
}

// New styled component for the additional text box
const AdditionalTextBox = styled.div`
  background-color: #ffffff;
  color: #000000;
  text-align: center;
  max-width: 100%;
  padding: 20px 30px;
  font: 400 20px Josefin Sans, sans-serif;
  margin-bottom: 20px; // Add some space between the additional text box and the description box
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 20px;
    padding: 10px 20px;
  }
`;

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
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
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
  margin-left: 0;
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

const ResourceText = styled.div`
  font-size: 16px;
  margin-top: 40px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 30px;
  }
`;

const ResourceItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`;

const ActionIcon = styled.span`
  margin-right: 10px;
  font-size: 18px;
`;

const VideoContainer = styled.div`
  flex: 1;
`;

const ResourceLink = styled.a`
  display: block;
  margin: 10px 0;
  color: #06423d;
  text-decoration: underline;
`;

const StyledImage = styled.img`
  max-width: 100%; // Ensures image does not overflow its container
  height: auto; // Maintains aspect ratio
  display: block; // Prevents inline spacing issues
  margin: 0 auto; // Centers image if it's not as wide as the container
`;

export default ContentSection;
