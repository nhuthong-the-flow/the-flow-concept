import React, { FC, useState } from 'react'
import { Box, Stack } from '@mui/material'
import FadeInSection from '../../shared/fade-in-section'
import {
  HeroPlayButton,
  CloseButton,
  VideoCard,
  Video,
  VideoCardContainer,
} from './home.styled'
import { PlayIcon, CloseIcon } from '../../../icons'
import { HOME_DATA } from './home-data'
import Image from 'next/image'

export const Home: FC = () => {
  const [isOpenHeroVideo, setIsOpenHeroVideo] = useState(false)
  return (
    <Stack>
      <Box
        zIndex={isOpenHeroVideo ? 10 : 0}
        width="100%"
        height="100%"
        bgcolor="#fff"
        sx={{
          opacity: isOpenHeroVideo ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        {isOpenHeroVideo && (
          // inside
          <video
            width="100%"
            height="100%"
            playsInline
            autoPlay
            controls
            data-poster={true}
            style={{
              objectFit: 'cover',
              backgroundSize: 'cover',
              backgroundPosition: '-50%',
              top: '-100%',
              right: '-100%',
              left: '-100%',
              bottom: '-100%',
              margin: 'auto',
              position: 'absolute',
            }}
          >
            <source
              src="https://player.vimeo.com/progressive_redirect/playback/930140644/rendition/1440p/file.mp4?loc=external&signature=863f7a76284c68d9510a705ef885cd7fd299876a415722f05c56c3a2f7c0b475"
              type="video/mp4"
            />
          </video>
        )}
        <CloseButton
          onClick={() => setIsOpenHeroVideo(false)}
          sx={{ top: { xs: 80, md: 146 }, right: { xs: 20, md: 40 } }}
        >
          <CloseIcon />
        </CloseButton>
      </Box>
      <Box width="100%" height="100%" bgcolor="#fff">
        <video
          playsInline
          loop
          muted
          autoPlay
          width="100%"
          height="100%"
          style={{
            objectFit: 'cover',
            backgroundSize: 'cover',
            backgroundPosition: '-50%',
            top: '-100%',
            right: '-100%',
            left: '-100%',
            bottom: '-100%',
            margin: 'auto',
            position: 'absolute',
          }}
        >
          <source
            src="https://player.vimeo.com/progressive_redirect/playback/930133801/rendition/1440p/file.mp4?loc=external&signature=a21d9affc6231a96554f7482a526bc86dd047a02e653e71f283dd617656071fa"
            data-wf-ignore="true"
          />
        </video>
        <Stack
          position="absolute"
          width="100%"
          height="86.5%"
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 1.5, sm: 2, md: 4 }}
        >
          <Box
            fontSize={{ xs: '5rem', sm: '6rem', md: '11rem' }}
            fontWeight={700}
            lineHeight={0.9}
            letterSpacing="-0.1rem"
            className="juana-font"
          >
            Go with us
          </Box>
          <HeroPlayButton onClick={() => setIsOpenHeroVideo(!isOpenHeroVideo)}>
            <PlayIcon />
          </HeroPlayButton>
        </Stack>
      </Box>
      <Stack mt="calc(100vh - 420px)">
        <FadeInSection>
          <Box
            pt={{ xs: 30, sm: 32, xl: 36 }}
            sx={{
              fontWeight: 400,
              marginTop: 0,
              marginBottom: 0,
              lineHeight: 0.9,
            }}
          >
            <video
              playsInline
              loop
              muted
              autoPlay
              width="100%"
              height="100%"
              style={{
                objectFit: 'cover',
                backgroundSize: 'cover',
                backgroundPosition: '-50%',
              }}
            >
              <source
                src="https://player.vimeo.com/progressive_redirect/playback/920800066/rendition/1440p/file.mp4?loc=external&signature=ca00b55c60031001c71d28dfce1cc045f7738764b1dc0f4896e124911a12f42f"
                data-wf-ignore="true"
              />
            </video>
          </Box>
        </FadeInSection>
        <Stack>
          {HOME_DATA?.map((item) => (
            <VideoCardContainer key={item.title}>
              <VideoCard>
                {!!item.videoSrc && (
                  <div
                    data-poster-url=""
                    data-video-urls={item.videoSrc}
                    data-autoplay="true"
                    data-loop="true"
                    data-wf-ignore="true"
                    style={{ width: '100%', height: '100%' }}
                  >
                    <Video
                      playsInline
                      loop
                      muted
                      autoPlay
                      style={{ backgroundImage: "url('')" }}
                      data-wf-ignore="true"
                      data-object-fit="cover"
                    >
                      <source src={item.videoSrc} data-wf-ignore="true" />
                    </Video>
                  </div>
                )}
                {!!item.imgSrc && (
                  <Image
                    src={item.imgSrc}
                    alt={item.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    loading="lazy"
                    sizes="100%"
                  />
                )}
              </VideoCard>
              <Stack
                mx={{ xs: 2, lg: 28 }}
                position="absolute"
                top={{ xs: 100, md: 200 }}
                sx={{ pointerEvents: 'none' }}
                className="video-text"
              >
                <Box
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 700,
                    marginTop: 0,
                    marginBottom: 0,
                    lineHeight: 1.4,
                  }}
                  className="juana-font"
                >
                  {item.title}
                </Box>
                <Box
                  fontSize="1.5rem"
                  fontWeight={700}
                  lineHeight={1.4}
                  mb={{ xs: 2.5, md: 5 }}
                  className="juana-font"
                >
                  {item.name}
                </Box>
                {/*<Box*/}
                {/*  fontSize="1.3rem"*/}
                {/*  lineHeight={1.3}*/}
                {/*  maxWidth={{ xs: '100%', lg: '60%' }}*/}
                {/*>*/}
                {/*  {item.desc}*/}
                {/*</Box>*/}
              </Stack>
            </VideoCardContainer>
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}

Home.displayName = 'Home'
