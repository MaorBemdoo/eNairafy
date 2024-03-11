"use client"

import Image from "next/image"
import logo from "../../../public/full-logo.png"
import Link from "next/link"
import NavLinks from "./NavLinks"
import displayHeaderFooter from "@/utils/displayHeaderFooter"
import { usePathname } from "next/navigation"

const Header = () => {

    const pathname = usePathname()

    return !displayHeaderFooter(pathname) && (
        <header className="container py-4 flex justify-between items-center mobile:justify-center">
            <Link href="/"><Image src={logo} alt="ENairafy Logo" height={70} width={150} priority/></Link>
            <NavLinks />
        </header>
    )
}
export default Header