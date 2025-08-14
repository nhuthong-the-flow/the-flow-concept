import React, { FC, useState, useMemo } from 'react'
import { Box, Stack, Dialog, SlideProps } from '@mui/material'
import {
  ImgCard,
  ImgCardContainer,
  DimBackPlate,
  TagContainer,
} from './work.styled'
import { WORK_DATA } from './work-data'
import Image from 'next/image'
import FadeInSection from '../../shared/fade-in-section'
import Transition from '../../shared/transition'
import { CloseButton } from '../home/home.styled'
import { CloseIcon } from '../../../icons'

const TAGS = ['3D', 'Motion', 'VFX']

export const Work: FC = () => {
  const [openVideo, setOpenVideo] = useState<string | null>(null)
  const [selectedTag, setSelectedTag] = useState('all')

  const filteredData = useMemo(() => {
    // if (selectedTag === 'Feature') {
    //   const newData = WORK_DATA.filter(
    //     (item) => !item.tag.includes(selectedTag)
    //   )
    //   return [
    //     ...WORK_DATA.filter((item) => item.tag.includes(selectedTag)),
    //     ...newData,
    //   ]
    // }
    if (selectedTag === 'all') {
      return WORK_DATA
    }
    return WORK_DATA.filter((item) => item.tag.includes(selectedTag))
  }, [selectedTag])

  return (
    <>
      <FadeInSection>
        <Stack py={{ xs: 4, md: 18 }} px={{ xs: 2.5, md: 35 }} spacing={3}>
          <Box
            fontSize={{ xs: '4rem', md: '5rem' }}
            letterSpacing={'-0.05rem'}
            lineHeight={1.1}
            className="juana-font"
          >
            Featured Work
          </Box>
          <Box
            fontSize="1.3rem"
            lineHeight={1.3}
            maxWidth={{ xs: '100%', md: '60%' }}
            pb={4}
          >
            Enter a journey through a world of imagination, filled with
            experiments and adventures across animation and design realms
          </Box>
          <Stack
            bgcolor="rgba(255, 255, 255, 0)"
            direction="row"
            alignItems="center"
            spacing={2}
          >
            {TAGS.map((item) => (
              <TagContainer
                key={item}
                selected={selectedTag === item}
                onClick={() =>
                  selectedTag === item
                    ? setSelectedTag('all')
                    : setSelectedTag(item)
                }
              >
                {item}
              </TagContainer>
            ))}
          </Stack>
        </Stack>
        <Stack>
          {filteredData?.map((item, index) => (
            <ImgCardContainer
              key={index}
              onClick={() => setOpenVideo(item.videoSrc)}
            >
              <ImgCard>
                <Image
                  src={item.imgSrc}
                  alt={item.imgSrc}
                  fill
                  loading="lazy"
                  sizes="100%"
                  style={{ objectFit: 'cover' }}
                />
                <DimBackPlate />
              </ImgCard>
              <Stack
                // spacing={{ xs: 0, md: 2 }}
                mx={{ xs: 4, md: 35 }}
                position="absolute"
                sx={{ pointerEvents: 'none' }}
              >
                <Box
                  sx={{
                    fontSize: '3.5rem',
                    fontWeight: 700,
                    marginTop: 0,
                    marginBottom: 0,
                    lineHeight: 1.4,
                  }}
                  className="juana-font"
                  suppressHydrationWarning
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
                  {item.author}
                </Box>
              </Stack>
            </ImgCardContainer>
          ))}
        </Stack>
      </FadeInSection>
      {!!openVideo && (
        <Dialog
          fullScreen
          open={!!openVideo}
          onClose={() => setOpenVideo(null)}
          TransitionComponent={(props: SlideProps) => (
            <Transition {...props} direction="up" />
          )}
        >
          <Stack>
            <CloseButton
              onClick={() => setOpenVideo(null)}
              sx={{ top: { xs: 80, md: 146 }, right: { xs: 20, md: 40 } }}
            >
              <CloseIcon />
            </CloseButton>
            <video
              controls
              playsInline
              loop
              autoPlay
              width="100%"
              height="100%"
              style={{
                objectFit: 'contain',
                backgroundSize: 'contain',
                backgroundPosition: '100%',
                top: '-100%',
                right: '-100%',
                left: '-100%',
                bottom: '-100%',
                margin: 'auto',
                position: 'absolute',
              }}
            >
              <source src={openVideo} data-wf-ignore="true" />
            </video>
          </Stack>
        </Dialog>
      )}
    </>
  )
}

Work.displayName = 'Work'
