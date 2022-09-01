import Image from "next/image"


const WhatWeDid: React.FC<{}> = ({ }) => {
    return (
        <section className="bg-brown text-gray-100 py-16 space-y-6">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-bold">Nos réalisations!</h2>
                {/* <p className="text-gray-400">Libero minima optio qui</p> */}
            </div>
            <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">

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
                        <Image src="/partners/groupecanaqua.png" width={320} height={220} className="object-cover" alt="partner bikoula complexe" />
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
                                ,assemblages des systèmes d'approvisionnements en eau propre, l'éclairage public et la santé.
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
                                Le GROUPE BIKOULA COMPLEXE, LANDFILL SOLUTIONS et A4 RECYCLAGE, collabore en Afrique pour apporter des solutions dans le traitement et la valorisation des déchets et des ordures ménagères par deux procédés, la thermolyse et l'Hydrolyse.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center p-4">
                    <div className="max-w-[300px] bg-white">
                        <Image src="/partners/logo-02.png" width={320} height={220} className="object-contain" alt="partner bikoula complexe" />
                        <div className="p-2 pb-4">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">VD3E et A4 RECYCLAGE</h3>
                            <p className="text-gray-800 text-md">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
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
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
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