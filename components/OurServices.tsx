import Link from "next/link"


const OurServices: React.FC<{}> = ({ }) => {

    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">Our Services</h2>
            </div>
            <div className="container max-w-xl p-6 pt-12 mx-auto space-y-8 lg:px-8 lg:max-w-7xl">
                <div className="flex justify-center items-center">
                    <span className="px-5 border-b-2 dark:border-violet-400 dark:text-violet-400">Architecto</span>
                    <span className="px-5 border-b-2 dark:border-gray-700">Corrupti</span>
                    <span className="px-5 border-b-2 dark:border-gray-700">Excepturi</span>
                    <span className="px-5 border-b-2 dark:border-gray-700">Consectetur</span>
                </div>
                <div className="max-w-md mx-auto">
                    <p className="text-center dark:text-gray-400">
                        At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                    </p>
                </div>
            </div>
            <div className="flex flex-col space-y-24 items-center justify-center">
                <Link href="/services">
                    <span className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
                        See all Services
                    </span>
                </Link>
            </div>
        </section>
    )
}

export default OurServices