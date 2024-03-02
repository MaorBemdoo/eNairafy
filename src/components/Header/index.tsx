import Image from "next/image"
import logo from "../../../public/full-logo.png"
import Link from "next/link"
import NavLinks from "./NavLinks"

const Header = () => {
    return (
        <header>
            <Link href="/"><Image src={logo} alt="ENairafy Logo" height={100} width={200} priority/></Link>
            <NavLinks />
        </header>
    )
}
export default Header