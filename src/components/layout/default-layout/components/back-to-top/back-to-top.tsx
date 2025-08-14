import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { Box, Stack } from '@mui/material'
import { ArrowUpIcon } from '../../../../../icons'
export const BackToTop: FunctionComponent = () => {
  const [visible, setVisible] = useState(false)

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY
    if (currentScrollPos < 1500) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (e.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor')
    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }, [])

  return (
    <Box
      sx={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        willChange: 'opacity, display',
        position: 'fixed',
        bottom: { xs: 35, md: 65 },
        right: { xs: 40, md: 80 },
        zIndex: 100,
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      <Stack
        onClick={handleClick}
        justifyContent="center"
        alignItems="center"
        sx={{
          width: '3rem',
          height: '3rem',
          border: '1px #000',
          backdropFilter: 'blur(20px)',
          backgroundColor: 'rgba(255, 255, 255, .1)',
          borderRadius: '2.5rem',
          cursor: 'pointer',
          transition: 'height 0.4s cubic-bezier(.165, .84, .44, 1)',
          '&:hover': {
            height: '5rem',
          },
        }}
      >
        <ArrowUpIcon />
      </Stack>
    </Box>
  )
}

BackToTop.displayName = 'BackToTop'
