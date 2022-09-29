import type { NextPage } from 'next'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import OurServices from '../components/OurServices'
import ProblemsWeSolve from '../components/ProblemsWeSolve'

const Services: NextPage = () => {
  return (
    <Layout>
      <NavBar active="services"/>
      <OurServices />
      <ProblemsWeSolve />
    </Layout>
  )
}

export default Services
