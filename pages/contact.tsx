import type { NextPage } from 'next'
import Header from '../components/Header'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'

const Contact: NextPage = () => {
  return (
    <Layout>
      <NavBar />
      <Header />
      <div>
        <p>Contact</p>
      </div>
      
    </Layout>
  )
}

export default Contact
