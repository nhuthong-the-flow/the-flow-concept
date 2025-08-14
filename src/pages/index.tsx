import Head from 'next/head'
import DefaultLayout from '../components/layout/default-layout'
import Home from '../components/pages/home'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>THE FLOW CONCEPT</title>
      </Head>
      <Home />
    </>
  )
}
HomePage.Layout = DefaultLayout
export default HomePage
