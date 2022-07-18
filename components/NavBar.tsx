import Link from "next/link"


 const NavBar: React.FC<{}> = ({ }) => {

    return (
        <div>
            <Link href='/'>Home</Link>
            <Link href='/projects'>Projects</Link>
            <Link href='/services'>Services</Link>
            <Link href='/contact'>Contact</Link>
        </div>
    )
}

export default NavBar