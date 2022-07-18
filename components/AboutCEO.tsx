import Image from 'next/image'
import ceoImage from '../assets/images/ceo.png'

const AboutCEO: React.FC<{}> = ({ }) => {

    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">

                    <div className="px-4 py-12 rounded-t-lg sm:px-4 md:px-12 dark:bg-gray-900">
                        <p className="relative py-1 text-lg italic text-center dark:text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>
                            
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                            
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                    </div>
                </div>
                <div className="flex p-6">
                    <Image src={ceoImage} height="512px" width="360px" alt="Groupe Bikoula ComplexeCEO image" className="rounded-full" />
                </div>

            </div>
        </section>
    )
}

export default AboutCEO