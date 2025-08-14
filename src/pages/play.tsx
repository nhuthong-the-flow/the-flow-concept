import Head from 'next/head'
import DefaultLayout from '../components/layout/default-layout'
import Play from '../components/pages/play'

const PlaysPage = () => {
  return (
    <>
      <Head>
        <title>PLAY</title>
      </Head>
      <Play />
    </>
  )
}
PlaysPage.Layout = DefaultLayout
export default PlaysPage
