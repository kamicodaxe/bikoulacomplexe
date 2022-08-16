import type { NextPage } from 'next'
import AboutCEO from '../components/AboutCEO'
import AboutUs from '../components/AboutUs'
import CTA from '../components/CTA'
import HomeHeader from '../components/HomeHeader'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import OurServices from '../components/OurServices'
import ProblemsWeSolve from '../components/ProblemsWeSolve'
import Testimonials from '../components/Testimonials'
import TrustedBy from '../components/TrustedBy'
import WhatWeDid from '../components/WhatWeDid'
import MapView from '../features/MapView'

const Home: NextPage = () => {
  return (
    <Layout>
      <NavBar active="home" />
      <HomeHeader />
      <MapView />
      <AboutUs />
      <WhatWeDid />
      <OurServices />
      <CTA />
      <ProblemsWeSolve />
      <Testimonials />
      <AboutCEO />
      <TrustedBy />
    </Layout>
  )
}

export default Home
