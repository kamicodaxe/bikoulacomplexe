import type { NextPage } from 'next'
import AboutCEO from '../components/AboutCEO'
import Header from '../components/Header'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import ProblemsWeSolve from '../components/ProblemsWeSolve'
import WhatWeDid from '../components/WhatWeDid'

const Projects: NextPage = () => {
  return (
    <Layout>
      <NavBar active="projects" />
      <Header title="Projects"/>
      <WhatWeDid />
      <ProblemsWeSolve />
      <AboutCEO />
    </Layout>
  )
}

export default Projects
