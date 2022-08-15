import Link from "next/link"
import MapView from "../features/MapView"


const HomeHeader: React.FC<{}> = ({ }) => {

    return (
        <section className="bg-gray-800 text-gray-100">
            {/* <MapView /> */}
            <div className="container flex flex-col justify-center p-6 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-start p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-xl font-bold leading-none sm:text-6xl">
                        Votre consultant pour vos activités en
                        <span className="text-brown"> Afrique</span>
                    </h1>
                    {/* <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
                        <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
                    </p> */}
                    <div className="flex flex-col mt-8 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:mt-16 lg:justify-start">
                        <Link href='/contact'>
                            <span className="px-8 py-3 text-lg font-semibold rounded bg-brown text-white hover:cursor-pointer">
                                Réserver un rdv
                            </span>
                        </Link>
                    </div>

                </div>
                <div className="flex bg-transparent w-full overflow-hidden">
                    <div className="-translate-x-1/4">
                        <MapView />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHeader