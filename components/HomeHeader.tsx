import { useEffect, useRef, useState } from "react";
import Link from "next/link"
import dynamic from 'next/dynamic';
const Cobe = dynamic(() => import('../features/Cobe'), { ssr: false });

const HomeHeader: React.FC<{}> = ({ }) => {
    const [isInView, setIsInView] = useState(true)
    const headerRef = useRef<HTMLElement>()

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (!headerRef.current) return
            const mouseenter = () => {
                setIsInView(true)
            }
            headerRef.current.addEventListener('mousemove', mouseenter)
            const mouseleave = () => {
                setTimeout(() => setIsInView(false), 3000)
            }
            headerRef.current.addEventListener('mouseleave', mouseleave)

            return () => {
                headerRef.current && headerRef.current.removeEventListener('mouseenter', mouseenter)
                headerRef.current && headerRef.current.removeEventListener('mouseleave', mouseleave)
            }
        }
    }, [])

    return (
        // @ts-ignore
        <section className="bg-gray-800 text-gray-100" ref={headerRef}>
            <div className="container flex flex-col p-6 mx-auto sm:py-12 lg:py-12 lg:flex-row">

                <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">

                    <div className="w-full space-y-4">
                        <h1 className="text-xl font-bold leading-none sm:text-4xl md:text-5xl w-full">
                            Votre consultant pour vos activités en
                            <span className="text-brown"> Afrique</span>
                        </h1>
                        <p>
                            Façonnez l&apos;avenir de vos projets d&apos;entreprise en Afrique avec nous. Partenaire incontournable,
                            Bikoula Complexe International Consulting vous guide vers le succès. Réservez votre rendez-vous
                            dès maintenant pour concrétiser vos ambitions entrepreunariale en Afrique.
                        </p>
                    </div>

                    <div className="flex flex-col mt-8 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:mt-16 lg:justify-start">
                        <Link href='/contact'>
                            <span className="px-8 py-3 text-lg font-semibold rounded bg-brown text-white hover:cursor-pointer">
                                Réserver un rdv
                            </span>
                        </Link>
                        <button>
                            <Link href="/projets">
                                <span className="px-8 py-3 text-lg font-semibold rounded border-2 border-brown text-brown hover:cursor-pointer">
                                    Nos réalisations
                                </span>
                            </Link>
                        </button>
                    </div>

                </div>

                <div className="flex bg-transparent w-full overflow-hidden relative">
                    <Cobe rotate={isInView} />
                </div>

            </div>
        </section>

    )
}

export default HomeHeader