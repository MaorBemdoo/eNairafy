"use client"

import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/full-logo.png"
import Icons from "./Icons"
import displayHeaderFooter from "@/utils/displayHeaderFooter"

const Footer = () => {
    return !displayHeaderFooter(location.pathname) && (
        <footer className="bg-slate-950 w-full text-white">
            <div className="container mx-auto p-4 flex md:flex-col md:items-center md:text-center justify-between items-start gap-3 md:gap-5">
                <div>
                    <Link href="/" className="w-fit"><Image src={logo} className="brightness-[90000]" alt="ENairafy Logo" height={70} width={150} priority/></Link>
                    <p>Buy your elctronics at an affodable rate with no hustle</p>
                    <Icons />
                </div>
                <div className="grid gap-2">
                    <h4 className="text-xl">Quick Links</h4>
                    <Link href="/">Home</Link>
                    <Link href="/products">Products</Link>
                    <Link href="">About Us</Link>
                    <Link href="">Contact Us</Link>
                </div>
                <div className="grid gap-2">
                    <h4 className="text-xl">Contact Us</h4>
                    <p><b>Email: </b>bemdoo.maor1@gmail.com</p>
                    <p><b>Phone: </b>+234 912 259 2278</p>
                    <p><b>Address: </b>Plot A06, Nurses Estate, Abuja Nigeria.</p>
                </div>
            </div>
            <div className="bg-slate-300 p-4 text-center text-xl text-black">© {new Date().getFullYear()} ENairafy. All Rights Reserved</div>
        </footer>
    )
}
export default Footer