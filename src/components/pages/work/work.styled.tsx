import { Box, ButtonBase, styled } from '@mui/material'
export const ImgCard = styled(Box)`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  transform: translate3d(0px, 0px, 0px) scale3d(1.05, 1.05, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  will-change: opacity, transform;
  transition: all 0.4s ease-in-out;
  &:hover {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px) scale3d(1.07, 1.07, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
`
export const ImgCardContainer = styled(Box)`
  width: 100%;
  min-height: 34rem;
  max-height: 34rem;
  flex-direction: column;
  justify-content: center;
  display: flex;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`

export const DimBackPlate = styled(Box)`
  opacity: 0.4;
  &:hover {
    opacity: 0;
  }
  will-change: opacity;
  transition: all 0.5s ease-in-out;
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export const TagContainer = styled(ButtonBase)<{ selected: boolean }>`
  font-size: 1.1rem;
  background-color: ${({ selected }) =>
    selected ? '#8b17ff' : 'rgba(255, 255, 255, 0.05)'};
  border-style: none;
  border-radius: 2.2rem;
  box-shadow: 0 7px 60px rgba(0, 0, 0, 0.2);
  font-weight: 700;
  padding: 12px 20px;
  cursor: pointer;
  &:hover {
    background-color: ${({ selected }) =>
      selected ? '#8b17ff' : 'rgba(255, 255, 255, 0.1)'};
  }
`
