import type { NextPage } from 'next'
import AboutCEO from '../components/AboutCEO'
import Header from '../components/Header'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import OurServices from '../components/OurServices'
import ProblemsWeSolve from '../components/ProblemsWeSolve'
import WhatWeDid from '../components/WhatWeDid'

const Services: NextPage = () => {
  return (
    <Layout>
      <NavBar active="services"/>
      <Header title="Services" />
      <ProblemsWeSolve />
      <OurServices />
      <AboutCEO />
    </Layout>
  )
}

export default Services
