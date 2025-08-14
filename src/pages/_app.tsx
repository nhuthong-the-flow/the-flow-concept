import React, { ComponentType, PropsWithChildren } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createCache from '@emotion/cache'
import { NextPage } from 'next'
import { createTheme } from '../theme'
import '../global.css'

export type ParentComponentType<P = NonNullable<unknown>> = ComponentType<
  PropsWithChildren<P>
>
const clientSideEmotionCache = createCache({ key: 'css', prepend: true })
export type NextPageWithLayout<P = NonNullable<unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  Layout?: ParentComponentType
}

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
  Component: AppProps['Component'] & NextPageWithLayout
}

export function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) {
  const theme = createTheme()
  const Layout = Component.Layout
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {!!Layout ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeProvider>
    </>
  )
}

export default MyApp
