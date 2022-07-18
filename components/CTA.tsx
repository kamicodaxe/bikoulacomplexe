

const CTA: React.FC<{}> = ({ }) => {

    return (
        <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
            <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
                <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left">Nobis a dolores, quia sit ad quasi dolorem in?</h1>
                <button className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
                    Prénez un rdv!
                </button>
            </div>
        </section>
    )
}

export default CTA