

const ProblemsWeSolve: React.FC<{}> = ({ }) => {

    return (
        <section className="bg-gray-800 text-gray-100">
            <div className="container p-6 py-12 lg:py-24 mx-auto space-y-12 lg:px-8">
                <div>
                    <h2 className="text-4xl font-bold tracking-tight text-center text-gray-50">Nos solutions</h2>
                    {/* <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-400">Quando cetero his ne, eum admodum sapientem ut.</p> */}
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        {/* <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-50">Ad vix debet docendi</h3> */}
                        {/* <p className="mt-3 text-lg text-gray-400">Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.</p> */}
                        <div className="space-y-6">
                            {
                                [
                                    "Evaluation et stratégie de l’équipe de vente ;",
                                    "Nous vous aidons à trouver des fournisseurs de matière première en Afrique ;",
                                    "Le Bikoula Complexe International Consulting vous assiste dans le déploiement de votre activité en Afrique ;",
                                    "Planification efficace, établissement de buts et d’objectifs et prévisions ;",
                                    "Le Bikoula Complexe International Consulting vous aide dans la recherche des investisseurs et des capitaux pour financer vos projets ;",
                                    "Nous vous présenterons les meilleures opportunités d'investissements en Afrique."
                                ].map(title => (
                                    <div className="flex align-center" key={title}>
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-6 h-6 text-brown">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg md:text-base text-gray-50">{title}</h4>
                                            {/* <p className="mt-2 text-gray-400">Description.</p> */}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0 hidden lg:block">
                        <img src="https://source.unsplash.com/vPtbBNlKRBw/360x480" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProblemsWeSolve