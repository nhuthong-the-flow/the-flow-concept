import Head from 'next/head'
import DefaultLayout from '../components/layout/default-layout'
import About from '../components/pages/about'

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>BE</title>
      </Head>
      <About />
    </>
  )
}
AboutPage.Layout = DefaultLayout
export default AboutPage
