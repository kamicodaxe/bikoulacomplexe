import Link from "next/link"


const CTA: React.FC<{}> = ({ }) => {

    return (
        <section className="py-6 bg-[#5D8B84] text-gray-100">
            <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-12 py-12 lg:py-12">
                <h1 className="text-4xl font-semibold leading-tight text-center lg:text-left">
                    Vous souhaitez collaborer avec nous?
                </h1>
                <Link href='/contact'>
                    <button className="px-8 py-3 text-lg font-semibold rounded text-gray-100 bg-brown">
                        Prénez un rdv maintenant!
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default CTA