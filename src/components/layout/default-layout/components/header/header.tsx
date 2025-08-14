import React, {
  FunctionComponent,
  useCallback,
  useState,
  useEffect,
} from 'react'
import {
  Avatar,
  Stack,
  Box,
  Slide,
  IconButton,
  Drawer,
  useTheme,
} from '@mui/material'
import { AppBar } from './header.styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CloseIcon, MenuIcon } from '../../../../../icons'
import { useResponsiveValue } from '../../../../../hooks/use-responsive-value'
import FormInput from '../../../../shared/form-input'

const MENU_ITEMS = [
  {
    name: 'Work',
    path: '/work-page',
  },
  {
    name: 'Be',
    path: '/be',
  },
  {
    name: 'Play',
    path: '/play',
  },
]

export const Header: FunctionComponent = () => {
  const router = useRouter()
  const theme = useTheme()
  const isMobile = useResponsiveValue({ xs: true, md: false })
  const [isOpen, setIsOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY

    if (currentScrollPos > prevScrollPos) {
      setVisible(false)
    } else {
      setVisible(true)
    }

    setPrevScrollPos(currentScrollPos)
  }, [prevScrollPos])

  useEffect(() => {
    if (!isOpen) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll, isOpen])

  return (
    <>
      <AppBar
        sx={{ top: visible ? 0 : '-200px', zIndex: theme.zIndex.drawer + 1 }}
      >
        <Stack
          width="100%"
          height={{ xs: 80, md: 135 }}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          pr={{ xs: 2.5, md: 9.375 }}
          pl={{ xs: 0, md: 4 }}
        >
          <Link href="/" legacyBehavior>
            <Stack
              direction="row"
              alignItems="center"
              spacing={0}
              sx={{ cursor: 'pointer' }}
            >
              <Avatar
                src="/images/logo-white.png"
                sx={{
                  width: { xs: 120, md: 200 },
                  height: '100%',
                  cursor: 'pointer',
                }}
              />
              {!isMobile && (
                <Box
                  fontSize={16}
                  ml={-5}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  The FLow
                </Box>
              )}
            </Stack>
          </Link>
          {isMobile ? (
            <Stack direction="row" alignItems="center" spacing={1}>
              <Stack
                onClick={() =>
                  window.open('https://astro-research.vercel.app/', '_blank')
                }
                alignItems="center"
                justifyContent="center"
                border="1px rgba(255, 255, 255, .6)"
                bgcolor={isOpen ? 'white' : 'rgba(255, 255, 255, .1)'}
                color={isOpen ? 'black' : 'white'}
                borderRadius="100px"
                p="0.75rem 2.3rem .95rem"
                minWidth={110}
                sx={{
                  letterSpacing: 0,
                  transition: 'color .2s, background-color .2s, border .2s',
                  cursor: 'pointer',
                  ':hover': { bgcolor: 'white', color: 'black' },
                }}
              >
                {isOpen ? 'Close' : 'Work With Us'}
              </Stack>
              <IconButton
                sx={{ color: 'white' }}
                size="small"
                onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
              >
                {isOpenMobileMenu ? (
                  <CloseIcon sx={{ fontSize: 28 }} />
                ) : (
                  <MenuIcon sx={{ fontSize: 28 }} />
                )}
              </IconButton>
            </Stack>
          ) : (
            <Stack
              direction="row"
              alignItems="center"
              spacing={4.2}
              px={4.375}
              bgcolor="rgba(255, 255, 255, .1)"
              borderRadius="100px"
              sx={{ backdropFilter: 'blur(30px)' }}
            >
              {MENU_ITEMS.map(({ path, name }) => (
                <Link key={name} href={path} legacyBehavior>
                  <Box
                    sx={{ cursor: 'pointer', letterSpacing: 0 }}
                    color={
                      router.pathname === path
                        ? 'rgba(255, 255, 255, .5)'
                        : 'white'
                    }
                    py={3.6}
                  >
                    {name}
                  </Box>
                </Link>
              ))}
              <Stack
                onClick={() =>
                  window.open('https://astro-research.vercel.app/', '_blank')
                }
                alignItems="center"
                justifyContent="center"
                border="1px rgba(255, 255, 255, .6)"
                bgcolor={isOpen ? 'white' : 'rgba(255, 255, 255, .1)'}
                color={isOpen ? 'black' : 'white'}
                borderRadius="100px"
                p="0.75rem 2.3rem .95rem"
                minWidth={164.15}
                sx={{
                  letterSpacing: 0,
                  transition: 'color .2s, background-color .2s, border .2s',
                  cursor: 'pointer',
                  ':hover': { bgcolor: 'white', color: 'black' },
                }}
              >
                {isOpen ? 'Close' : 'Work With Us'}
              </Stack>
            </Stack>
          )}
        </Stack>
      </AppBar>
      <Slide direction="up" in={isOpen} mountOnEnter unmountOnExit>
        <Stack
          justifyContent="center"
          width="100%"
          height="100vh"
          overflow="auto"
          position="fixed"
          top={0}
          sx={{
            backgroundImage:
              'linear-gradient(135deg, #1c034f, #350d83 50%, #7427c7)',
          }}
          zIndex={100}
        >
          <Stack maxWidth={1450} mx="auto" width="100%" spacing={5} px={2}>
            <Stack
              width="100%"
              direction={{ xs: 'column', md: 'row' }}
              justifyContent="space-between"
              alignItems="center"
            >
              <Box className="juana-font" fontSize="6.5rem" fontWeight={700}>
                Work With Us
              </Box>
              <Stack spacing={1.5}>
                <Box pl={1.5} fontSize="0.9rem">
                  Subscribe for news, invites, special events
                </Box>
                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  spacing={{ xs: 2, md: 1 }}
                >
                  <FormInput placeholder="Name" />
                  <FormInput placeholder="Email" />
                  <FormInput placeholder="Company" />
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    border="1px rgba(255, 255, 255, .6)"
                    bgcolor="rgba(255, 255, 255, .1)"
                    color="white"
                    borderRadius="100px"
                    p={{
                      xs: '1rem 2.3rem .95rem',
                      md: '0.75rem 2.3rem .95rem',
                    }}
                    sx={{
                      transition: 'color .2s, background-color .2s, border .2s',
                      cursor: 'pointer',
                      ':hover': { bgcolor: 'white', color: 'black' },
                    }}
                  >
                    Submit
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              justifyContent="space-between"
              alignItems={{ xs: 'center', md: 'baseline' }}
            >
              <Stack>
                <Box fontWeight={700} fontSize="2.5rem" className="juana-font">
                  California
                </Box>
                <Box sx={{ opacity: 0.6 }} maxWidth="70%">
                  California, CA 95825 3400 COTTAGE WAY, STE G2 #23103
                  SACRAMENTO , CA 95825
                </Box>
                <Box pt={1}>katie.van@theflowconcept.co</Box>
                <Box pt={1} sx={{ opacity: 0.6 }}>
                  +1 760 877 3790
                </Box>
              </Stack>
              <Stack>
                <Box fontWeight={700} fontSize="2.5rem" className="juana-font">
                  Ho Chi Minh City
                </Box>
                <Box sx={{ opacity: 0.6 }} maxWidth="70%">
                  Ho Chi Minh City, 70000 212 Cho Lon St, W11, D6, Ho Chi Minh
                  City, VietNam (70000)
                </Box>
                <Box pt={1}>katie.van@theflowconcept.co</Box>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Slide>
      <Drawer
        anchor="right"
        open={isOpenMobileMenu}
        onClose={() => setIsOpenMobileMenu(false)}
        PaperProps={{
          sx: { maxWidth: '100%', minWidth: '100%' },
        }}
      >
        <Stack
          height="100%"
          alignItems="center"
          justifyContent="center"
          color="white"
          fontSize="3rem"
          sx={{
            backgroundImage:
              'linear-gradient(to right, #1c034f, #350d83 50%, #7427c7)',
          }}
        >
          {MENU_ITEMS.map(({ name, path }) => (
            <Link key={name} href={path} legacyBehavior>
              <Box
                sx={{ cursor: 'pointer', letterSpacing: 0 }}
                color={
                  router.pathname === path ? 'rgba(255, 255, 255, .5)' : 'white'
                }
                onClick={() => setIsOpenMobileMenu(false)}
              >
                {name}
              </Box>
            </Link>
          ))}
        </Stack>
      </Drawer>
    </>
  )
}

Header.displayName = 'Header'
