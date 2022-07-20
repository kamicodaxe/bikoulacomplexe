import Image from "next/image"


const WhatWeDid: React.FC<{}> = ({ }) => {
    return (
        <section className="bg-brown text-gray-100 py-16 space-y-6">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-bold">Nos réalisations!</h2>
                {/* <p className="dark:text-gray-400">Libero minima optio qui</p> */}
            </div>
            <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">

                <div className="flex flex-col items-center p-4">
                    <div className="max-w-[300px] bg-white">
                        <Image src="https://source.unsplash.com/HMrXzWby3eM/440x620" width={320} height={220} className="object-cover" />
                        <div className="p-2 pb-4">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Canaqua</h3>
                            <p className="text-gray-800 text-md">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center p-4">
                    <div className="max-w-[300px] bg-white">
                        <Image src="https://source.unsplash.com/TlRQin0iwjE/440x620" width={320} height={220} className="object-cover" />
                        <div className="p-2 pb-4">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Canaqua</h3>
                            <p className="text-gray-800 text-md">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center p-4">
                    <div className="max-w-[300px] bg-white">
                        <Image src="https://source.unsplash.com/cVEOh_JJmEE/440x620" width={320} height={220} className="object-cover" />
                        <div className="p-2 pb-4">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Canaqua</h3>
                            <p className="text-gray-800 text-md">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center p-4">
                    <div className="max-w-[300px] bg-white">
                        <Image src="https://source.unsplash.com/XMRpvKPuAcI/440x620" width={320} height={220} className="object-cover" />
                        <div className="p-2 pb-4">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Canaqua</h3>
                            <p className="text-gray-800 text-md">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center p-4">
                    <div className="max-w-[300px] bg-white">
                        <Image src="https://source.unsplash.com/PlBsJ5MybGc/440x620" width={320} height={220} className="object-cover" />
                        <div className="p-2 pb-4">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Canaqua</h3>
                            <p className="text-gray-800 text-md">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center p-4">
                    <div className="max-w-[300px] bg-white">
                        <Image src="https://source.unsplash.com/zHhFKYYas7o/440x620" width={320} height={220} className="object-cover" />
                        <div className="p-2 pb-4">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Canaqua</h3>
                            <p className="text-gray-800 text-md">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default WhatWeDid