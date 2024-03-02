import Image from "next/image"
import logo from "../../../public/full-logo.png"
import Link from "next/link"
import NavLinks from "./NavLinks"

const Header = () => {
    return (
        <header className="py-4 flex justify-between items-center">
            <Link href="/"><Image src={logo} alt="ENairafy Logo" height={70} width={150} priority/></Link>
            <NavLinks />
        </header>
    )
}
export default Header