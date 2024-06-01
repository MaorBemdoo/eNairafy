"use client"

import { getDiscountProducts } from "@/utils/getDiscountProducts"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import Button from "../Button"
import { PriceType, ProductType } from "@/types"

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
                    (data as (ProductType & {discountValue: number, discountPrice: PriceType})[]).map(({name, id, image, discountValue, price, discountPrice, categories}) => {
                        return (
                            <div className="card w-auto bg-base-100 shadow-xl" key={id}>
                                <figure className="relative">
                                    <Image src={image.url} alt="Shoes" className="w-1/2" height={60} width={60}/>
                                    <div className="absolute top-4 right-4 size-10 grid place-items-center bg-slate-950 text-white">-{discountValue}%</div>
                                </figure>
                                <div className="card-body *:basis-1/3">
                                    <h2 className="card-title">
                                        {name}
                                    </h2>
                                    <div className="flex justify-start items-center">
                                        <p className="text-2xl">{discountPrice.formatted_with_symbol}</p>
                                        <p className="line-through">{price.formatted_with_symbol}</p>
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