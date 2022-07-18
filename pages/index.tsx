import type { NextPage } from 'next'
import AboutCEO from '../components/AboutCEO'
import HomeHeader from '../components/HomeHeader'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import OurServices from '../components/OurServices'
import ProblemsWeSolve from '../components/ProblemsWeSolve'
import WhatWeDid from '../components/WhatWeDid'

const Home: NextPage = () => {
  return (
    <Layout>
      <NavBar />
      <HomeHeader />
      <WhatWeDid />
      <ProblemsWeSolve />
      <OurServices />
      <AboutCEO />
    </Layout>
  )
}

export default Home
