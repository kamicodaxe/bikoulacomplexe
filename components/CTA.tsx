

const CTA: React.FC<{}> = ({ }) => {

    return (
        <section className="py-6 bg-yellow-800 text-gray-100">
            <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
                <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left">
                    Vous souhaitez collaborer avec nous?
                </h1>
                <button className="px-8 py-3 text-lg font-semibold rounded text-brown bg-gray-100">
                    Prénez un rdv!
                </button>
            </div>
        </section>
    )
}

export default CTA