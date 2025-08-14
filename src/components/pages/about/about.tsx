import React, { FC } from 'react'
import { Stack, Box } from '@mui/material'
import {
  SectionHeroImageSideUp,
  HeroImage,
  DimFillGradientTop,
} from './about.styled'
import FadeInSection from '../../shared/fade-in-section'
import Image from 'next/image'

export const About: FC = () => {
  return (
    <Box>
      <FadeInSection>
        <SectionHeroImageSideUp>
          <DimFillGradientTop />
          <HeroImage />
        </SectionHeroImageSideUp>
      </FadeInSection>
      <Stack spacing="2.5rem" width="100%" maxWidth={1200} mx="auto" px={2}>
        <FadeInSection>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            spacing={5}
          >
            <Stack spacing={3}>
              <Stack>
                <h1
                  style={{
                    fontSize: '3.5rem',
                    fontWeight: 700,
                    marginTop: 0,
                    marginBottom: 0,
                    lineHeight: 0.9,
                  }}
                  className="juana-font"
                >
                  Elevating Tech Companies
                </h1>
                <Box className="juana-font" fontSize="1.7rem" fontWeight={700}>
                  Through Captivating Motion and Sustainable Growth
                </Box>
              </Stack>
              <Box fontSize="1.3rem" maxWidth="90%">
                In today's fast paced digital landscape, standing out from the
                crowd is essential for tech companies seeking to thrive. At The
                Flow, we understand the power of compelling visuals and
                strategic growth planning to propel businesses to new heights
              </Box>
              <Box fontSize="1.3rem" maxWidth="90%">
                Our team of experts specializes in crafting mesmerizing motion
                graphic designs that breathe life into your brand, captivating
                audiences and leaving a lasting impression.
              </Box>
            </Stack>
            <Box
              width={{ xs: '100%', md: '70%' }}
              height={{ xs: 400, md: 400 }}
              position="relative"
            >
              <Image
                fill
                src="/images/about/2.png"
                alt="/images/about/2.png"
                loading="lazy"
                style={{
                  borderRadius: '8px',
                  position: 'absolute',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Stack>
        </FadeInSection>
        <FadeInSection>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            spacing={5}
          >
            <Stack direction="row" spacing={1} width="100%" height="100%">
              <Box width="100%" height={400} position="relative">
                <Image
                  fill
                  src="/images/about/3.png"
                  alt="/images/about/3.png"
                  loading="lazy"
                  style={{
                    borderRadius: '8px',
                    position: 'absolute',
                    objectFit: 'cover',
                  }}
                />
              </Box>
              <Box width="100%" height={400} position="relative">
                <Image
                  fill
                  src="/images/about/4.png"
                  alt="/images/about/4.png"
                  loading="lazy"
                  style={{
                    borderRadius: '8px',
                    position: 'absolute',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Stack>
            <Stack spacing={3} alignItems="flex-end" textAlign="end">
              <Box fontSize="1.3rem" maxWidth="90%">
                We offer comprehensive growth consulting tailored to the unique
                needs of tech companies.
              </Box>
              <Box fontSize="1.3rem" maxWidth="90%">
                We believe that responsible practices are not only ethical but
                also essential for cultivating a thriving tech ecosystem.
              </Box>
            </Stack>
          </Stack>
        </FadeInSection>
        <FadeInSection>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            spacing={5}
          >
            <Stack justifyContent="space-between" spacing={2}>
              <Stack spacing={0.5}>
                <Box
                  fontSize="1.3rem"
                  lineHeight="1.5"
                  px={1}
                  borderLeft="0.4rem solid white"
                >
                  “The idea flow from the human spirit is absolutely unlimited.
                  All you have to do is tap into that well.”
                </Box>
                <Box  fontSize="1.3rem" px={2}>– Jack Welch</Box>
              </Stack>
              <Stack spacing={0.5}>
                <Box fontSize="1.3rem" lineHeight="1.5" px={1}>
                  By integrating environmentally conscious principles into our
                  processes and recommendations, we empower you to make a
                  positive impact while achieving your business goals
                </Box>
              </Stack>
            </Stack>

            <Box
              width={{ xs: '100%', md: '75%' }}
              height={300}
              position="relative"
            >
              <Image
                fill
                src="/images/about/5.png"
                alt="/images/about/5.png"
                loading="lazy"
                style={{
                  borderRadius: '8px',
                  position: 'absolute',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Stack>
        </FadeInSection>
        <FadeInSection>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            spacing={5}
          >
            <Stack width="100%" spacing={2} justifyContent="space-between">
              <Box fontSize="1.3rem" maxWidth="90%">
                At The Flow, we are dedicated to helping tech companies harness
                the full potential of motion graphics, strategic growth
                planning, and sustainable practices.
              </Box>
              <Box fontSize="1.3rem" maxWidth="90%">
                Partner with us and experience the transformative power of our
                holistic approach, where creativity, innovation, and
                responsibility converge to elevate your brand to new heights.
              </Box>
            </Stack>
            <Stack direction="row" width="100%" height="100%" spacing={1}>
              <Stack width="100%" height="100%" spacing={1} alignItems="center">
                <Box width="100%" height={350} position="relative">
                  <Image
                    fill
                    src="/images/about/6.png"
                    alt="/images/about/6.png"
                    loading="lazy"
                    style={{
                      borderRadius: '8px',
                      position: 'absolute',
                      objectFit: 'cover',
                      objectPosition: '25% 100%',
                    }}
                  />
                </Box>
                <Box fontSize="1.2rem">Nhut Hong</Box>
                <Box fontSize="1.1rem" textAlign="center">
                  Co-founder. Visual Director
                </Box>
              </Stack>
              <Stack width="100%" height="100%" spacing={1} alignItems="center">
                <Box width="100%" height={350} position="relative">
                  <Image
                    fill
                    src="/images/about/7.png"
                    alt="/images/about/7.png"
                    loading="lazy"
                    style={{
                      borderRadius: '8px',
                      position: 'absolute',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <Box fontSize="1.2rem">Katie Van</Box>
                <Box fontSize="1.1rem">Co-founder. CEO</Box>
              </Stack>
            </Stack>
          </Stack>
        </FadeInSection>
      </Stack>
    </Box>
  )
}

About.displayName = 'About'
