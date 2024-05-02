"use client"

import { getDiscountProducts } from "@/utils/getDiscountProducts"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import Button from "../Button"

const DiscountProducts = () => {

    const {data, isLoading, isError, refetch} = useQuery({
        queryKey: ["discountProducts"],
        queryFn: getDiscountProducts
    })

    return (
        isLoading ? (
            <div className="loading loading-spinner loading-lg flex m-auto"></div>
        ) : isError ? (
            <div className="grid place-items-center text-center">
                <p>Error getting some of our discounted products</p>
                <Button color="green" onClick={refetch}>Try Again</Button>
            </div>
        ) : (
            <div>
                {
                    (data as any[]).map(({name, id, image}) => {
                        return (
                            <div className="card w-96 bg-base-100 shadow-xl" key={id}>
                                <figure><Image src={image.url} alt="Shoes" height={60} width={60}/></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                    {name}
                                    <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
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
        )
    )
}
export default DiscountProducts