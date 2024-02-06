import { useEffect } from "react"

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null

const TrustedBy: React.FC<{}> = ({ }) => {

    useEffect(() => {
        console.log(WOW)
        // @ts-ignore
        new WOW.WOW({
            live: false
        }).init()
    }, [])

    return (
        <section className="bg-gray-800 space-y-12 py-12 lg:py-24 text-gray-100">
            <div className="container p-4 mx-auto text-center">
                <h2 className="text-4xl font-bold">Nos partenaires</h2>
            </div>
            <div className="container flex flex-wrap justify-center mx-auto text-gray-400">
                {/* <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img className="wow fadeInUp object-contain" src={"/partners/logo-01.png"} alt="Partner logo" />
                </div> */}
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img className="wow fadeInUp object-contain" src={"/partners/logo-02.png"} alt="Partner logo" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img className="wow fadeInUp object-contain" src={"/partners/logo-03.png"} alt="Partner logo" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img className="wow fadeInUp object-contain" src={"/partners/logo-04.png"} alt="Partner logo" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img className="wow zoomIn object-contain" src={"/partners/ecti.png"} alt="Partner ecti" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img className="wow zoomIn object-contain" src={"/partners/logo-05.png"} alt="Partner logo" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img className="wow zoomIn object-contain" src={"/partners/groupecanaqua.png"} alt="Partner logo groupecanaqua.png" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img className="wow zoomIn object-contain" src={"/partners/hydraform.png"} alt="Partner logo hydraform" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img className="wow zoomIn object-contain" src={"/partners/tricenter.png"} alt="Partner logo tricenter" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img className="wow zoomIn object-contain" src={"/partners/articstore.png"} alt="Partner articstore" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img className="wow zoomIn object-contain" src={"/partners/logo-06.jpeg"} alt="Partner logo" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img className="wow zoomIn object-contain" src={"/partners/bogital.png"} alt="Partner bogital cameroon, web development company" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img className="wow zoomIn object-contain" src={"/partners/camaqua.png"} alt="Partner GROUP CAMAQUA" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img className="wow zoomIn object-contain" src={"/partners/cochrane.png"} alt="Partner Cochrane" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img className="wow zoomIn object-contain" src={"/partners/ese.png"} alt="Partner ese" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img className="wow zoomIn object-contain" src={"/partners/machineseeker.png"} alt="Partner Machine Seeker" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img className="wow zoomIn object-contain" src={"/partners/cycleterre.png"} alt="Partner Cycle terre" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img className="wow zoomIn object-contain" src={"/partners/serv.PNG"} alt="Partner Serv" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img className="wow zoomIn object-contain" src={"/partners/alfalaval.png"} alt="Partner Alpha Laval" />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <img className="wow zoomIn object-contain" src={"/partners/sy.jpg"} alt="Partner Alpha Laval" />
                </div>
            </div>
        </section>
    )
}

export default TrustedBy