import Button from "@/components/Button";
import { FaBackward } from "react-icons/fa6";
import Link from "next/link";

const notFound = () => {
    return (
        <main className="flex flex-col items-center justify-center gap-0 w-full h-[75vh]">
            <h1 className="text-9xl">404</h1>
            <p className="text-2xl">Looks like you missed your way</p>
            <Link href="/">
                <Button color="green" className="flex items-center gap-2 text-white">
                    <FaBackward/>
                    <p>Back Home</p>
                </Button>
            </Link>
        </main>
    );
};
export default notFound;
