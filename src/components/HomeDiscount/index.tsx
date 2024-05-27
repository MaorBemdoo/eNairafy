import Image from "next/image"
import Countdown from "./Countdown"
import DiscountProducts from "./DiscountProducts"

const HomeDiscount = () => {
    return (
        <section>
            <Image src="/daily-deals.jpg" width={500} height={200} alt="Discount banner" className="w-full mb-1"/>
            <div className="container mb-4">
                <div className="flex items-center justify-between sm:flex-col sm:items-start">
                    <h1 className="mb-4 text-5xl font-bold mobile:break-all">
                        Deals of the Day
                    </h1>
                    <Countdown/>
                </div>
                <DiscountProducts />
            </div>
        </section>
    )
}
export default HomeDiscount