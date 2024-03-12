import { ButtonProps } from "@/types";

const Button = ({ children, color = "green", onClick, className}: ButtonProps) => {
    return (
        <button
            className={`p-3 rounded-md text-white dark:text-black border-2 border-slate-950 dark:border-slate-50 ${
                color == "green"
                    ? "bg-green-600 hover:bg-slate-950 dark:hover:bg-slate-50"
                    : "bg-slate-950 dark:bg-slate-50 hover:bg-green-600"
            } btn ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
export default Button;
