import { getDiscountProducts } from "@/utils/getDiscountProducts"
import Image from "next/image"
import Button from "../Button"
import { PriceType, ProductType } from "@/types"
import Link from "next/link"

const DiscountProducts = async () => {

    try{
        const data = await getDiscountProducts()
        return (
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4 mobile:grid-cols-none">
                {
                    (data as (ProductType & {discountValue: number, discountPrice: PriceType})[]).map(({name, id, image, discountValue, price, discountPrice, categories}) => {
                        return (
                            <Link href="/products"  key={id}>
                                <div className="card w-auto h-full bg-base-100 shadow-xl">
                                    <figure className="relative">
                                        <Image src={image.url} alt={`Image of ${name}`} className="w-1/2" height={60} width={60}/>
                                        <div className="absolute top-4 right-4 p-1 grid place-items-center bg-slate-950 text-white">-{discountValue}%</div>
                                    </figure>
                                    <div className="card-body *:basis-1/3">
                                        <h2 className="card-title">
                                            {name}
                                        </h2>
                                        <div className="flex justify-start items-center gap-4">
                                            <p className="text-2xl">{discountPrice.formatted_with_symbol}</p>
                                            <p className="line-through">{price.formatted_with_symbol.slice(0,-3)}</p>
                                        </div>
                                        <div className="card-actions justify-end items-end gap-4">
                                            {
                                                categories.map(category => {
                                                    return (
                                                        <div className="badge badge-outline" key={category.id}>{category.name}</div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }catch(err){
        console.log(err)
        return (
            <div className="grid place-items-center text-center">
                <p>Error getting some of our discounted products</p>
            </div>
        )
    }
}
export default DiscountProducts