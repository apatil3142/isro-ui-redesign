import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { getVideoCarouselData } from '../utils/getVideoCarouselData';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  border-radius: 8px;
  background: rgba( 255, 255, 255, 0.1 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 6px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
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
  const [videos, setVideos] = useState<IVideoData[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videosList = getVideoCarouselData();
    setVideos(videosList);
  }, []);

  useEffect(() => {
    if(videoRef.current){
      videoRef.current.load();
    }
  },[activeVideoIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 10000); // Change video every 10 seconds
    return () => clearInterval(interval);
  },[videos]);

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
      <FlashNewsContainer></FlashNewsContainer>
    </Container>
  );
};

export default Home;
