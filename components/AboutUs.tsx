import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/images/logo.png'

const AboutUs: React.FC<{}> = ({ }) => {

    return (
        <section className="">
            <div className="container flex flex-col p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row">
                <div className="flex flex-1 justify-center align-center">
                    <Image width="300px" height="300px" src={logo} alt="Logo Bikoula Complexe" />
                </div>
                <div className="flex flex-1 flex-col justify-center align-center">
                    <h2 className='text-4xl pb-8 font-semibold text-gray-800'>Des opportunités en Afrique</h2>
                    <p className='text-lg text-gray-600'>
                    Nous sommes le lien entre l&apos;Afrique et l&apos;Occident pour toutes les entreprises désireuses de s&apos;implanter sur le continent africain. Nous vous garantissons la mise en relation et la meilleure approche avec les acteurs économiques privés et publics. Vous bénéficiez d&apos;un carnet d&apos;adresse fiable pour la réussite de vos projets. Nous vous accompagnons dans la recherche des financiers, des potentiels investisseurs et groupes d&apos;investissement à obtenir des financements auprès des instituts financiers. Nous sommes notamment spécialistes de l&apos;Afrique dans l&apos;accompagnement et le conseil du secteur public et privé et des porteurs de projets.
                        {/* Notre société est d&apos;abord basée sur notre relation avec des entreprises étrangères.
                        Notre fonction et notre position issu de la diaspora est de leur apporter des informations fiables,
                        actualisées et de les conseiller en matière d&apos;investissements... */}
                    </p>
                    {/* <div className="flex flex-col mt-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link href="/contact" className="px-8 py-3  rounded text-brown">
                            <span className="text-brown text-lg font-semibold">
                                En savoir plus
                            </span>
                        </Link>
                    </div> */}

                </div>
            </div>
        </section>
    )
}

export default AboutUs