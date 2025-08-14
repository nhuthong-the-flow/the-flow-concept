import Head from 'next/head'
import DefaultLayout from '../components/layout/default-layout'
import Work from '../components/pages/work'

const WorkPage = () => {
  return (
    <>
      <Head>
        <title>FEATURED WORK</title>
      </Head>
      <Work />
    </>
  )
}
WorkPage.Layout = DefaultLayout
export default WorkPage
