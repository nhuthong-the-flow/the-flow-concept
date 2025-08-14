import React, { FunctionComponent, ReactNode } from 'react'
import { Stack, Box } from '@mui/material'
import Header from './components/header'
import Footer from './components/footer'
import BackToTop from './components/back-to-top'

interface DefaultLayoutProps {
  children?: ReactNode
}

export const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({
  children,
}) => {
  return (
    <Stack
      width="100%"
      height="100%"
      minHeight="100vh"
      color="white"
      sx={{
        backgroundImage:
          'linear-gradient(to right, #1c034f, #350d83 50%, #7427c7)',
      }}
    >
      <Box id="back-to-top-anchor" />
      <Box minHeight="90vh">
        <Header />
        <Box>{children}</Box>
        <BackToTop />
      </Box>
      <Footer />
    </Stack>
  )
}

DefaultLayout.displayName = 'DefaultLayout'
