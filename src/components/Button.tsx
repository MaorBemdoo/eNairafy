import { ButtonProps } from "@/types"

const Button = ({ children, color="green" }: ButtonProps) => {
    return (
        <button className={`p-3 rounded-md text-white ${color == "green" ? "bg-green-600 hover:bg-slate-950" : "bg-slate-950 hover:bg-green-600"}`}>{children}</button>
    )
}
export default Button