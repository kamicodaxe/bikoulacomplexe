import { useState } from "react"
// import Link from "next/link"
import classNames from "classnames"


const OurServices: React.FC<{}> = ({ }) => {
    const [tabIndex, setTabIndex] = useState(0)
    return (
        <section className="bg-gray-800 text-gray-100 py-16">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-gray-50">Nos Services</h2>
            </div>
            <div className="container max-w-xl p-6 pt-12 mx-auto space-y-8 lg:px-8 lg:max-w-7xl">
                <div className="flex justify-center items-center">
                    {
                        [
                            "Consulting",
                            "Mandat et représentation",
                            "Transfère de Technologie",
                            "Formations"
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
                <div className="max-w-3xl mx-auto">
                    <p className="text-center text-gray-400">
                        {serviceBody[tabIndex]}
                    </p>
                </div>
            </div>
            {/* <div className="flex flex-col space-y-24 items-center justify-center">
                <Link href="/services">
                    <span className="px-8 py-3 text-lg font-semibold rounded text-brown border-brown border">
                        Voir plus
                    </span>
                </Link>
            </div> */}
        </section>
    )
}

const serviceBody = [
    "Nous sommes le lien entre la France et l’Afrique pour toutes les entreprises désireuses de s’implanter sur le continent africain. Nous vous mettons en contact avec les personnes adaptées sur place. Vous bénéficiez d’un carnet d’adresses fourni et de confiance pour mener vos projets à bien. Nous vous aidons à rechercher des investisseurs et à obtenir des prêtes auprès des instituts bancaires africains. Nous sommes notamment spécialistes du Cameroun, un pays où nous aidons des sociétés à se développer depuis longtemps.",
    "Avec une garantie de résultat, nous pouvons nous déplacer en France et en Afrique pour apporter aux entreprises les conseils nécessaires à la réussite de leurs projets. Faites appel à nous pour élaborer une stratégie cohérente et efficace. Ainsi, vous pourrez développer vos activités en Afrique, diminuer vos coûts et créer des emplois. ",
    "Nous vous apporterons des partenaires techniques pour vous faciliter le transfère des nouvelles technologies qui boostera votre productivité.",
    "",
]

export default OurServices