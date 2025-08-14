import React, { FC, useRef, useState, useEffect, ReactNode } from 'react'
import { Box } from '@mui/material'

interface FadeInSectionProps {
  children: ReactNode
}
export const FadeInSection: FC<FadeInSectionProps> = ({ children }) => {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef<HTMLElement | undefined>()

  useEffect(() => {
    if (!!domRef && !!domRef.current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting))
      })
      observer.observe(domRef.current)
      return () => observer.disconnect()
    }
  }, [])

  return (
    <Box
      ref={domRef}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      sx={{ width: '100%', height: '100%' }}
    >
      {children}
    </Box>
  )
}

FadeInSection.displayName = 'FadeInSection'
