import Image from "next/image"


const WhatWeDid: React.FC<{}> = ({ }) => {
    return (
        <section className="bg-brown text-gray-100 py-16 space-y-6">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-bold">Nos réalisations!</h2>
                {/* <p className="text-gray-400">Libero minima optio qui</p> */}
            </div>
            <div className="container mx-auto grid justify-center gap-4 text-center sm:grid-cols-2 lg:grid-cols-3">

                <div className="flex flex-col items-center p-4">
                    <div className="max-w-[300px] bg-white">
                        <Image src="/partners/banner-01.jpg" width={320} height={220} className="object-cover" alt="partner bikoula complexe" />
                        <div className="p-2 pb-4">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">FONROCHE</h3>
                            <p className="text-gray-800 text-md">
                                LE GROUPE BIKOULA COMPLEXE accompagne l&apos;entreprise FONROCHE dans son implantation en Afrique. FONROCHE éclaire plus de 10 000 nouvelles personnes chaque jour en Afrique.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center p-4">
                    <div className="max-w-[300px] bg-white">
                        <Image src="/partners/groupecanaqua.png" width={320} height={220} className="object-contain" alt="partner bikoula complexe" />
                        <div className="p-2 pb-4">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">GROUPE CANAQUA INC</h3>
                            <p className="text-gray-800 text-md">
                                LE GROUPE BIKOULA COMPLEXE SARL est partenaire du projet CamAquaculture avec le GROUPE CANAQUA  Inc dans le cadre de l&apos;implantation d&apos;un projet d&apos;aquaculture et de transformation à Monatélé au Cameroun.
                                {/* LE GROUPE BIKOULA COMPLEXE à participer aux discussions et négociations pour le GROUPE CANAQUA dans le cadre de l&apos;implantation d&apos;un projet d&apos;aquaculture et de transformation à  Monatélé au Cameroun. */}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center p-4">
                    <div className="max-w-[300px] bg-white">
                        <Image src="https://source.unsplash.com/-SKRzGN47iQ/440x620" width={320} height={220} className="object-cover" alt="partner bikoula complexe" />
                        <div className="p-2 pb-4">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">INFRASTEC</h3>
                            <p className="text-gray-800 text-md">
                                LE GROUPE BIKOULA COMPLEXE en partenariat avec l&apos;entreprise INFRASTEC contribue au développement durable de l&apos;Afrique en facilitant l&apos;accès aux énergies photovoltaïques,
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
                            <p className="text-gray-800 text-md">
                                Le GROUPE BIKOULA COMPLEXE, LANDFILL SOLUTIONS et A4 RECYCLAGE, collabore en Afrique pour apporter des solutions dans le traitement et la valorisation des déchets et des ordures ménagères par deux procédés, la thermolyse et l&apos;Hydrolyse.
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
                            <p className="text-gray-800 text-md">
                                Le GROUPE BIKOULA COMPLEXE contribue au développement des collectivités territoriales africaines par le mandat qui lui est donné (à l&apos;instar de Kinshasa, Monatélé et Sangmelima), dans des projets communautaires et sociaux (Agriculture, Santé,  Éducation, Logement). Il accompagne aussi les états dans la concrétisation des projets structurants et la recherche de partenaire financier et technique.
                            </p>
                            {/* <p className="text-gray-800 text-md">
                                LE GROUPE BIKOULA COMPLEXE accompagne les entreprises partenaires VD3E et A4 RECYCLAGE dans le cadre du développement de l&apos;activité TRADING dans l&apos;achat et revente négoce de fractions D3E (rebuts informatique)
                            </p> */}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center p-4">
                    <div className="max-w-[300px] bg-white">
                        <Image src="/partners/logo-05.png" width={320} height={220} className="object-contain" alt="Partner bikoula complexe" />
                        <div className="p-2 pb-4">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">MIDAS</h3>
                            <p className="text-gray-800 text-md">
                                Le GROUPE BIKOULA COMPLEXE ET LE GROUPE MIDAS apportent un procédé de technologie novateur favorisant le maintien en condition du parc automobile national  tout en permettant son renouvellement par des automobiles plus récent.
                            </p>
                            {/* <p className="text-gray-800 text-md">
                            MIDAS (master franchise) est l&apos;une des nombreuses entreprises à succès qu&apos;accompagne LE GROUPE BIKOULA COMPLEXE. Cette entreprise a pour mission de prendre soin de la mobilité de de chaque conducteur sur le long terme.
                            </p> */}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default WhatWeDid