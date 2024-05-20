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
            <div>
                {
                    (data as (ProductType & {discountValue: number})[]).map(({name, id, image, discountValue, price}) => {
                        return (
                            <div className="card w-96 bg-base-100 shadow-xl" key={id}>
                                <figure><Image src={image.url} alt="Shoes" height={60} width={60}/></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {name}
                                        <div className="badge badge-secondary">{discountValue}%</div>
                                    </h2>
                                    <div className="flex">
                                        <p>{price.formatted_with_symbol}</p>
                                        <p>₦{price.raw - (price.raw * (discountValue/100))}</p>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">Fashion</div>
                                        <div className="badge badge-outline">Products</div>
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