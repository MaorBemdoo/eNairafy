import Link from "next/link"
import Button from "../Button"

const NavLinksData = [
    {
        name: "Products",
        link: "/products"
    },
    {
        name: "Cart",
        link: "/cart"
    },
    {
        name: "Login",
        link: "/login"
    },
    {
        name: "Sign Up",
        link: "/signup",
        type: "button",
    },
]

const NavLinks = () => {
    return (
        <div className="flex gap-5 items-center">
            {
            NavLinksData.map(({ name, link, type}) => {
                    return (
                        <Link href={link} className="font-semibold hover:text-green-600" key={name}>
                            {
                                type && type == "button" ? <Button color="green">{name}</Button> : name
                            }
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default NavLinks