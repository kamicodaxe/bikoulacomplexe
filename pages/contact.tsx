import classNames from 'classnames'
import type { NextPage } from 'next'
import { useState } from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'

// TODO: Add forms plugin
// npm install -D @tailwindcss/forms

// tailwind.config.js
// module.exports = {
//   theme: {
//     // ...
//   },
//   plugins: [
//     require('@tailwindcss/forms'),
//     // ...
//   ],
// }

const Contact: NextPage = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const contactInfo = CONTACT_INFOS[tabIndex]
  return (
    <Layout>
      <NavBar active="contact" />
      <Header title="Contact" />
      <section className="py-6 bg-gray-800 text-gray-50">
        {/* <section className="py-6"> */}
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Contactez-nous</h1>
            {/* <p className="pt-2 pb-4">Fill in the form to start a conversation</p> */}
            <div className="container max-w-xl p-6 pt-12 mx-auto space-y-8 lg:px-8 lg:max-w-7xl">
              <div className="flex justify-center items-center">
                {
                  [
                    "France",
                    "Cameroun",
                  ].map((title, index) => (
                    <span
                      key={title}
                      onClick={() => setTabIndex(index)}
                      className={classNames([
                        "px-5 border-b-2 border-gray-700 hover:cursor-pointer text-lg",
                        tabIndex === index && "border-b-[#5D8B84] text-[#5D8B84]",
                      ])}>{title}</span>
                  ))
                }
              </div>
            </div>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
                {contactInfo.address.map(title => <span key={title}>{title}</span>)}
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <div>
                  {
                    contactInfo.tel.map(contact => <span key={contact} className="block">{contact}</span>)
                  }
                </div>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>{contactInfo.email}</span>
              </p>
            </div>
          </div>
          <form
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
            action="https://bikoulacomplexe.com/api/form" method="POST"
          >
            <label className="block">
              <span className="mb-1">Noms et Prénoms</span>
              <input
                name="name" type="text"
                placeholder="Leroy Jenkins"
                className="block w-full rounded-md border-b border-white focus:outline-none focus:border-brown bg-gray-800" />
            </label>
            <label className="block">
              <span className="mb-1">Numéro de Téléphone</span>
              <input name="phone" type="phone" placeholder="+1 (840) 541-2563" className="block w-full rounded-md border-b border-white focus:outline-none focus:border-brown bg-gray-800" />
            </label>
            <label className="block">
              <span className="mb-1">Adresse Email</span>
              <input name="email" type="email" placeholder="leroy@jenkins.com" className="block w-full rounded-md border-b border-white focus:outline-none focus:border-brown bg-gray-800" />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea name="message" rows={5} className="block w-full rounded-md border-b border-white focus:outline-none focus:border-brown bg-gray-800"></textarea>
            </label>

            <input type="hidden" name="_next" value="https://www.bikoulacomplexe.com/"></input>
            <input type="hidden" name="_email" value="info@bikoulacomplexe.com"></input>
            {/* <input type="hidden" name="_email" value="lkami@bogital.com"></input> */}
            <input type="hidden" name="_subject" value="NOUVEAU MESSAGE (bikoulacomplexe.com)"></input>

            <button type="submit" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-brown text-gray-100 focus:ring-brown hover:ring-brown">
              Envoyez
            </button>
          </form>
        </div>
      </section>
    </Layout >
  )
}

const CONTACT_INFOS = [
  {
    address: [
      "Siège social : Quartier Monavebe, BP 729 Sangmelima, Cameroun",
      "RCCM : RC/EBWA/2022/B/129/"
    ],
    tel: ["Bureau: (+33) 9 62 59 36 76", "Portable 1: (+33) 7 87 83 71 93", "Portable 2: (+33) 6 63 87 54 46"],
    email: "info@bikoulacomplexe.com"
  },
  {
    address: [
      "Siège fonctionnel: 15 Rue Antoine de Saint-Exupéry",
      "94270 Le Kremlin-Bicêtre, France",
      "N° SIRET : 79931625200029"
    ],
    tel: ["Bureau: (+33) 9 62 59 36 76", "Portable 1: (+33) 7 87 83 71 93", "Portable 2: (+33) 6 63 87 54 46"],
    email: "info@bikoulacomplexe.com"
  },

]

export default Contact
