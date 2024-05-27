"use client"

import { getDiscountProducts } from "@/utils/getDiscountProducts"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import Button from "../Button"
import { ProductType } from "@/types"

const DiscountProducts = () => {

    const {data, isLoading, isError, isSuccess, error, refetch} = useQuery({
        queryKey: ["discountProducts"],
        queryFn: getDiscountProducts
    })

    return (
        isLoading ? (
            <div className="loading loading-spinner loading-lg flex m-auto"></div>
        ) : isSuccess ? (
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4 mobile:grid-cols-none">
                {
                    (data as (ProductType & {discountValue: number})[]).map(({name, id, image, discountValue, price, categories}) => {
                        return (
                            <div className="card bg-base-100 shadow-xl" key={id}>
                                <figure><Image src={image.url} alt="Shoes" className="w-1/2" height={60} width={60}/></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {name}
                                        <div className="badge badge-secondary">{discountValue}%</div>
                                    </h2>
                                    <div className="flex justify-start">
                                        <p className="line-through">{price.formatted_with_symbol}</p>
                                        <p className="text-2xl text-red-800 -rotate-12">₦{Math.round(price.raw - (price.raw * (discountValue/100)))}</p>
                                    </div>
                                    <div className="card-actions justify-end">
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
                        )
                    })
                }
            </div>
        ) : (
            <div className="grid place-items-center text-center">
                <p>Error getting some of our discounted products</p>
                <Button color="green" onClick={refetch}>Try Again {console.log(error)}</Button>
            </div>
        )
    )
}
export default DiscountProducts