import { Box, ButtonBase, styled } from '@mui/material'

export const HeroPlayButton = styled(ButtonBase)`
  z-index: 2;
  width: 5rem;
  height: 5rem;
  border: 1px none white;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  color: white;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  display: flex;
  position: relative;
  &:hover {
    transform: scale(1.2);
  }
`
export const CloseButton = styled(ButtonBase)`
  z-index: 1;
  width: 3rem;
  height: 3rem;
  border: 1px none white;
  background-color: white;
  color: #000;
  cursor: pointer;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  box-shadow: #350d83 0 5px 15px;
`
export const VideoCard = styled(Box)`
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(40px);
  opacity: 0;
  transform: translate3d(0px, 0px, 0px) scale3d(1.2, 1.2, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  will-change: opacity, filter, transform;
  transition: all 0.5s ease-in-out;
  &:hover {
    opacity: 1;
    filter: blur(0);
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
`

export const Video = styled('video')`
  width: 100%;
  height: 100%;
  //max-height: 40rem;
  object-fit: cover;
  background-position: 50%;
  background-size: cover;
  margin: auto;
`
export const VideoCardContainer = styled(Box)`
  background-image: linear-gradient(to right, #1c034f, #350d83 50%, #7427c7);
  width: 100%;
  min-height: 30rem;
  max-height: 30rem;
  flex-direction: column;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: flex;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  .video-text {
    opacity: 0.1;
    will-change: opacity;
    transition: opacity 0.5s ease-in-out;
  }
  &:hover {
    min-height: 40rem;
    max-height: 40rem;
    .video-text {
      opacity: 1;
    }
  }
`
