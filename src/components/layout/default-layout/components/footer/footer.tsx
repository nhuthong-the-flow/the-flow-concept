import React from 'react'
import { Avatar, Stack } from '@mui/material'
import Link from 'next/link'

export const Footer = () => {
  return (
    <Stack
      minHeight={{ xs: 100, md: 147.95 }}
      justifyContent="center"
      width="100%"
      px={{ xs: 2.5, md: 5 }}
    >
      <Link href="/" legacyBehavior>
        <Avatar
          src="/images/logo-white.png"
          sx={{
            width: { xs: 100, md: 150 },
            height: '100%',
            cursor: 'pointer',
          }}
        />
      </Link>
    </Stack>
  )
}

Footer.displayName = 'Footer'
