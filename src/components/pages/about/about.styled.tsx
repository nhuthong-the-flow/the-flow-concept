import { Box, styled } from '@mui/material'

export const HeroImage = styled('div')`
  width: 100%;
  height: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    background-image: url('/images/about/1.png');
  }
  background-image: url('/images/about/1-phone.png');
  background-position: 50% 100%;
  background-size: cover;
  background-attachment: scroll;
  position: relative;
  object-fit: cover;
`

export const DimFillGradientTop = styled('div')`
  z-index: 10;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    rgba(63, 63, 63, 0.2),
    rgba(255, 255, 255, 0)
  );
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export const SectionHeroImageSideUp = styled(Box)`
  transform-style: preserve-3d;
  z-index: 4;
  position: relative;
  top: -135px;
  height: calc(100vh);
`
