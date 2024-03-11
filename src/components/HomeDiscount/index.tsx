import Image from "next/image"

const HomeDiscount = () => {
    return (
        <section>
            <Image src="/daily-deals.jpg" width={500} height={200} alt="Discount banner" className="h-[35vw] w-full"/>
        </section>
    )
}
export default HomeDiscount