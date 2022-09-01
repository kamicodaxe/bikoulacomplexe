

const TrustedBy: React.FC<{}> = ({ }) => {

    return (
        <section className="p-6 bg-gray-800 text-gray-100">
            <div className="container p-4 mx-auto text-center">
                <h2 className="text-4xl font-bold">Nos partenaires</h2>
            </div>
            <div className="container flex flex-wrap justify-center mx-auto text-gray-400">
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img src={"/partners/logo-01.png"} alt="Partner logo" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img src={"/partners/logo-02.png"} alt="Partner logo" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img src={"/partners/logo-03.png"} alt="Partner logo" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img src={"/partners/logo-04.png"} alt="Partner logo" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img src={"/partners/logo-06.jpeg"} alt="Partner logo" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img src={"/partners/logo-05.png"} alt="Partner logo" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img src={"/partners/groupecanaqua.png"} alt="Partner logo groupecanaqua.png" />
                </div>
                {/* <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                <img src={"/partners/logo-01.png"} alt="Partner logo" />
                </div> */}
            </div>
        </section>
    )
}

export default TrustedBy