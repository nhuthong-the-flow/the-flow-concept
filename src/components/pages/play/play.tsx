import React, { FC } from 'react'
import { Grid, Stack } from '@mui/material'
import { PLAY_DATA } from './play-data'
import { Video } from '../home/home.styled'

export const Play: FC = () => {
  return (
    <Stack maxWidth={1450} mx="auto">
      <Grid container spacing={{ xs: 1, md: 1.5 }}>
        {PLAY_DATA.map((video) => (
          <Grid item xs={4} key={video}>
            <div
              data-poster-url=""
              data-video-urls={video}
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
                <source src={video} data-wf-ignore="true" />
              </Video>
            </div>
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}

Play.displayName = 'Play'
