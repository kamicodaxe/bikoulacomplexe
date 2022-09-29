import Image from 'next/image'
import ceoImage from '../assets/images/ceo.jpeg'

const AboutCEO: React.FC<{}> = ({ }) => {

    return (
        <section className="bg-gray-800 text-gray-100">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">

                    <div className="px-4 py-12 rounded-t-lg sm:px-4 md:px-12 bg-gray-900">
                        <p className="relative py-1 text-lg italic text-center text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-[#5D8B84]">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>

                            Nous concevons le monde comme étant un grand réseau planétaire inter connecté, la société Groupe Bikoula Complexe SARL permet L’interaction entre les atomes et les hémisphères.
                            Nous sommes une plateforme qui apporte aussi le conseil, l’accompagnement aux entrepreneurs venant de divers horizons dans des domaines d’activités différents.
                            Nombreux sont ceux d’entre vous ont effleuré l’idée d’aller entreprendre vers d’autres cieux.
                            La société GBC SARL vous apporte des solutions vers ce monde qui vous semble lointain, mais aussi proche de vous. La géopolitique mondiale est une équation à plusieurs variantes, qui va nous obliger à penser différemment, changer nos habitudes et nos rapports avec les autres. Nous vous garantissons une approche différente dans la recherche des partenariats stratégiques en sortant des sentiers battus avec le concours d’une équipe jeune, atypique et dynamique.

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-[#5D8B84]">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                    </div>
                </div>
                <div className="flex p-6">
                    <Image src={ceoImage} height="512px" width="512px" alt="Groupe Bikoula Complexe CEO Jean-Luc ENGONO" className="rounded-full object-cover" />
                </div>

            </div>
        </section>
    )
}

export default AboutCEO