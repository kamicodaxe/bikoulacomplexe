import Image from "next/image"


const WhatWeDid: React.FC<{}> = ({ }) => {
    return (
        <section className="bg-brown text-gray-100 py-12 lg:py-24 space-y-12">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold">Nos réalisations!</h2>
                {/* <p className="text-gray-400">Libero minima optio qui</p> */}
            </div>
            <div className="container mx-auto grid justify-center gap-4 gap-y-6 text-center sm:grid-cols-2 lg:grid-cols-3">

                <div className="flex flex-col items-center p-4">
                    <div className="max-w-[300px] bg-white">
                        <Image src="/partners/banner-01.jpg" width={320} height={220} className="object-cover" alt="partner bikoula complexe" />
                        <div className="p-2 pb-4">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">FONROCHE</h3>
                            <p className="text-gray-800 text-lg md:text-base">
                                Bikoula Complexe International Consulting International Consulting accompagne l&apos;entreprise FONROCHE dans son implantation en Afrique. FONROCHE éclaire plus de 10 000 nouvelles personnes chaque jour en Afrique.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center p-4">
                    <div className="max-w-[300px] bg-white">
                        <Image src="/partners/groupecanaqua.png" width={320} height={220} className="object-contain" alt="partner bikoula complexe" />
                        <div className="p-2 pb-4">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">GROUPE CANAQUA INC</h3>
                            <p className="text-gray-800 text-lg md:text-base">
                                Bikoula Complexe International Consulting SARL est partenaire du projet CamAquaculture avec le GROUPE CANAQUA  Inc dans le cadre de l&apos;implantation d&apos;un projet d&apos;aquaculture et de transformation à Monatélé au Cameroun.
                                {/* Bikoula Complexe International Consulting à participer aux discussions et négociations pour le GROUPE CANAQUA dans le cadre de l&apos;implantation d&apos;un projet d&apos;aquaculture et de transformation à  Monatélé au Cameroun. */}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center p-4">
                    <div className="max-w-[300px] bg-white">
                        <Image src="https://source.unsplash.com/-SKRzGN47iQ/440x620" width={320} height={220} className="object-cover" alt="partner bikoula complexe" />
                        <div className="p-2 pb-4">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">INFRASTEC</h3>
                            <p className="text-gray-800 text-lg md:text-base">
                                Bikoula Complexe International Consulting en partenariat avec l&apos;entreprise INFRASTEC contribue au développement durable de l&apos;Afrique en facilitant l&apos;accès aux énergies photovoltaïques,
                                assemblages des systèmes d&apos;approvisionnements en eau propre, l&apos;éclairage public et la santé.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center p-4">
                    <div className="max-w-[300px] bg-white">
                        <Image src="https://source.unsplash.com/XMRpvKPuAcI/440x620" width={320} height={220} className="object-cover" alt="partner bikoula complexe" />
                        <div className="p-2 pb-4">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">LANDFILL SOLUTIONS & A4 RECYCLAGE </h3>
                            <p className="text-gray-800 text-lg md:text-base">
                                Bikoula Complexe International Consulting, LANDFILL SOLUTIONS et A4 RECYCLAGE, collabore en Afrique pour apporter des solutions dans le traitement et la valorisation des déchets et des ordures ménagères par deux procédés, la thermolyse et l&apos;Hydrolyse.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center p-4">
                    <div className="max-w-[300px] bg-white">
                        {/* Le drapeaux de 12 pays en arfique */}
                        <Image src="/images/africa.png" width={320} height={220} className="object-contain" alt="partner bikoula complexe" />
                        <div className="p-2 pb-4">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Les Partenaires institutionnels</h3>
                            <p className="text-gray-800 text-lg md:text-base">
                                Bikoula Complexe International Consulting contribue au développement des collectivités territoriales africaines par le mandat qui lui est donné (à l&apos;instar de Kinshasa, Monatélé et Sangmelima), dans des projets communautaires et sociaux (Agriculture, Santé,  Éducation, Logement). Il accompagne aussi les états dans la concrétisation des projets structurants et la recherche de partenaire financier et technique.
                            </p>
                            {/* <p className="text-gray-800 text-md">
                                Bikoula Complexe International Consulting accompagne les entreprises partenaires VD3E et A4 RECYCLAGE dans le cadre du développement de l&apos;activité TRADING dans l&apos;achat et revente négoce de fractions D3E (rebuts informatique)
                            </p> */}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center p-4">
                    <div className="max-w-[300px] bg-white">
                        <Image src="/partners/logo-05.png" width={320} height={220} className="object-contain" alt="Partner bikoula complexe" />
                        <div className="p-2 pb-4">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">MIDAS</h3>
                            <p className="text-gray-800 text-lg md:text-base">
                                Bikoula Complexe International Consulting ET LE GROUPE MIDAS apportent un procédé de technologie novateur favorisant le maintien en condition du parc automobile national  tout en permettant son renouvellement par des automobiles plus récent.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default WhatWeDid