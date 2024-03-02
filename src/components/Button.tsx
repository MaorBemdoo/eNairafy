import { ButtonProps } from "@/types"

const Button = ({ children, color="green" }: ButtonProps) => {
    return (
        <button className="">{children}</button>
    )
}
export default Button