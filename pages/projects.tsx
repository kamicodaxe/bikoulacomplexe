import type { NextPage } from 'next'
import Header from '../components/Header'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import WhatWeDid from '../components/WhatWeDid'

const Projects: NextPage = () => {
  return (
    <Layout>
      <NavBar active="projects" />
      <Header title="Projets"/>
      <WhatWeDid />
    </Layout>
  )
}

export default Projects
