import Image from "next/image"
import Link from "next/link"

interface Props {
    active: string
}

const routes = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Projets",
        path: "/projects"
    },
    {
        name: "Services",
        path: "/services"
    },
    {
        name: "Contact",
        path: "/contact"
    }
]
const NavBar: React.FC<Props> = ({ active }) => {

    const activeLink = (routeName: string) => {
        // TODO: Use classnames from npm
        const isActive = active.includes(routeName.toLowerCase())
        if (isActive) return 'flex cursor-pointer link-active'
        return 'flex cursor-pointer'
        // return 'flex ' + active.includes(routeName.toLowerCase()) ? 'link-active' : ''
    }

    return (
        <nav className="p-4 pb-0 bg-gray-800 text-gray-100">
            <div className="container flex justify-between h-12 mx-auto">
                <Link href="/" aria-label="Back to homepage" className="flex items-center p-2">
                    <div className="flex items-center">
                        <div className="h-12 w-12 relative">
                            <Image layout="fill" src={require('../assets/images/logo.png')} alt="Logo Bikoula Complexe" />
                        </div>
                        <h2 className="text-2xl font-bold text-brown">GROUPE BIKOULA COMPLEXE</h2>
                    </div>
                </Link>
                <ul className="items-stretch hidden space-x-3 md:flex">
                    {
                        routes.map(route => (
                            <li className={activeLink(route.path)} key={route.name}>
                                <Link href={route.path} className="flex items-center -mb-1 border-b-2">
                                    <span className="p-4">
                                        {route.name}
                                    </span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <button className="flex justify-end p-4 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

        </nav >
    )
}

export default NavBar