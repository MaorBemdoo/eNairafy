import Link from "next/link"
import Button from "../Button"
import { BiCart, BiLogIn } from "react-icons/bi"
import { GrTechnology } from "react-icons/gr"

const NavLinksData = [
    {
        name: "Products",
        link: "/products",
        Icon: GrTechnology
    },
    {
        name: "Cart",
        link: "/cart",
        Icon: BiCart
    },
    {
        name: "Login",
        link: "/login",
        Icon: BiLogIn
    },
    {
        name: "Sign Up",
        link: "/signup",
        type: "button",
    },
]

const NavLinks = () => {
    return (
        <div className="flex gap-5 items-center z-20 sm:gap-1 mobile:fixed left-0 bottom-0 mobile:w-full mobile:justify-between mobile:bg-white mobile:h-[10vh] mobile:p-4">
            {
                NavLinksData.map(({ name, link, type, Icon}) => {
                    return (
                        <Link href={link} className="font-semibold hover:text-green-600" key={name}>
                            {
                                type && type == "button" ? <Button color="green">{name}</Button> : (
                                    <div className="flex gap-2 items-center first:*:hover:rotate-12">
                                        {
                                            typeof Icon !== 'undefined' ? <Icon className="text-4xl transition-all"/> : ""
                                        }
                                        <p className="sm:none">{name}</p>
                                    </div>
                                )
                            }
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default NavLinks