import React, { useEffect, useRef, useState } from 'react';
import styled, { } from 'styled-components';
import { getFlashNewsData, getVideoCarouselData } from '../utils/getData';
import { GlassEffect } from '../globalStyles';
import { HiMiniVideoCamera } from 'react-icons/hi2';
import { IoDesktop } from 'react-icons/io5';
import { FaGraduationCap } from 'react-icons/fa';
import { FaHammer } from 'react-icons/fa';


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

const MainVideoCarouselcontainer = styled.div`
  position: relative;
  width: 100%;
  height: 680px;
`;

const VideoInfoContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 250px;
  display: flex;
  flex-direction: column;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SubTitle = styled.span`
  color: #ffa600;
  font-weight: 700;
  font-size: 24px;
`;

const Title = styled.span`
  font-size: 48px;
  max-width: 515px;
  font-weight: 700;
`;

const Description = styled.p`
  max-width: 500px;
`;

const KnowMoreButton = styled.button`
  border: none;
  outline: none;
  padding: 10px 20px;
  font-size: 14px;
  width: fit-content;
  ${GlassEffect};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  color: #FFF;
  transition: all 0.6s ease;
  &:hover{
    background: linear-gradient(to left, #ffa60094, #ffff007f);
    transition: all 0.6s ease;
    letter-spacing: 1.5px;
  }
`; 

const FlashNewsContainer = styled.div`
  ${GlassEffect};
  padding: 10px 0;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  border-radius: 30px;
`;

const Span = styled.span`
  font-size: 14px;
  color: #ffa600;
`;

const News = styled.p`
  margin: 0;
  padding: 0;
`;

const SecondaryText = styled.span`
  color: #a5a5a5;
`;

const KeyLinksWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

const Indicators = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Indicator = styled.div<{isActive: boolean}>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid #FFF;
  background-color: ${({isActive}) => isActive ? '#FFF': ''};
`;

const KeyLinksContainer = styled.div`
  display: flex;
  gap: 14px;
  flex-direction: column;
  width: 60%;
`;

const LinkContainer = styled.div`
  ${GlassEffect};
  flex: 1;
  border-radius: 16px;
  padding: 16px;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 9;
  cursor: pointer;
  position: relative;
  ::before{
    content: '';
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 16px;
    z-index: -1;
    background-color: none;
    opacity: 0;
    filter: blur(4px);
  }
   &:hover ::before {
    background: linear-gradient(
      to left,
      #ffa6007d,
      #ffff006f 
    );
    opacity: 0.5;
    filter: blur(4px);
    transition: all 0.3s ease-in-out;
  }

`;

const LinkName = styled.label`
  font-weight: 500px;
  font-size: 18px;
  margin-top: 10px;
  cursor: pointer;
`;

const LatestNewsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LatestNewsTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

interface IVideoData {
  intro: string,
  title: string,
  description: string,
  videoPath: string,
  link: string
}

const Home = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number>(0);
  const [activeFlashNewsIndex, setActiveFlashNewsIndex] = useState<number>(0);
  const [videos, setVideos] = useState<IVideoData[]>([]);
  const [flashNewsData, setFlasNewsData] = useState<string[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videosList = getVideoCarouselData();
    const flashNewsList = getFlashNewsData();
    setVideos(videosList);
    setFlasNewsData(flashNewsList);
  }, []);

  useEffect(() => {
    if(videoRef.current){
      videoRef.current.load();
    }
  },[activeVideoIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
      setActiveFlashNewsIndex((prevIndex) => (prevIndex + 1) % flashNewsData.length);
    }, 10000);
    return () => clearInterval(interval);
  },[videos, flashNewsData]);

  return (
    <Container>
      <MainVideoCarouselcontainer>
        <Video ref={videoRef} autoPlay muted loop>
          <source src={videos[activeVideoIndex]?.videoPath} type='video/mp4' />
          Your browser does not support the video tag.
        </Video>
        <VideoInfoContainer>
          <SubTitle>{videos[activeVideoIndex]?.intro}</SubTitle>
          <Title>{videos[activeVideoIndex]?.title}</Title>
          {videos[activeVideoIndex]?.description && <Description>{videos[activeVideoIndex]?.description}</Description>}
          {videos[activeVideoIndex]?.link && <KnowMoreButton>Know More 🡢</KnowMoreButton>}
        </VideoInfoContainer>
      </MainVideoCarouselcontainer>
      <FlashNewsContainer>
        <Span>Flash news</Span>
        <News>{flashNewsData[activeFlashNewsIndex]}</News>
        <Indicators>
          {flashNewsData.map((_, index) => (
            <Indicator isActive={index === activeFlashNewsIndex} />
          ))}
        </Indicators>
      </FlashNewsContainer>
      <KeyLinksContainer>
        <Title>Key Links</Title>
        <SecondaryText>All the important portals to exlpore opportunities and information about ISRO.</SecondaryText>
        <KeyLinksWrapper>
          <LinkContainer>
            <HiMiniVideoCamera size={24} color='#cacaca'/>
            <LinkName>Press Release</LinkName>
            <SecondaryText>Find out the latest press release from ISRO.</SecondaryText>
          </LinkContainer>
          <LinkContainer>
            <IoDesktop size={24} color='#cacaca'/>
            <LinkName>Careers</LinkName>
            <SecondaryText>Join ISRO workforce, technical or administrative openings available.</SecondaryText>
          </LinkContainer>
          <LinkContainer>
            <FaGraduationCap size={24} color='#cacaca'/>
            <LinkName>Students</LinkName>
            <SecondaryText>ISRO empowers students for space tech awareness.</SecondaryText>
          </LinkContainer>
          <LinkContainer>
            <FaHammer size={24} color='#cacaca'/>
            <LinkName>Tenders</LinkName>
            <SecondaryText>Portal for ISRO tender notifications. regularly updated.</SecondaryText>
          </LinkContainer>
        </KeyLinksWrapper>
      </KeyLinksContainer>
      <KeyLinksContainer>
        <LatestNewsHeader>
          <LatestNewsTitleWrapper>
            <Title>Latest News</Title>
            <SecondaryText>Stay up to date with the latest from India's space sector.</SecondaryText>
          </LatestNewsTitleWrapper>
          <KnowMoreButton>All News 🡢</KnowMoreButton>
        </LatestNewsHeader>
        
      </KeyLinksContainer>
    </Container>
  );
};

export default Home;
