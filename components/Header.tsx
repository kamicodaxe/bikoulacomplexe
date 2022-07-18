
interface Props {
    title: string
}

const Header: React.FC<Props> = ({ title }) => {

    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                <h1 className="text-4xl font-bold leading-none sm:text-5xl">
                    {title}
                    {/* <span className="dark:text-violet-400"> Us</span> */}
                </h1>
            </div>
        </section>
    )
}

export default Header