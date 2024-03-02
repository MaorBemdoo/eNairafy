import Link from "next/link";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";

const IconsData = [
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/bemdoo-maor-449698279/",
        Icon: FaLinkedin,
    },
    {
        name: "Instagram",
        link: "https://instagram.com/bemdoomaor",
        Icon: FaInstagram,
    },
];

const Icons = () => {
    return (
        <div className="flex gap-2">
            {IconsData.map(({ name, link, Icon }) => {
                return (
                    <Link className="text-xl" href={link} key={name}>
                        <Icon className="hover:scale-110" />
                    </Link>
                );
            })}
        </div>
    );
};
export default Icons;
