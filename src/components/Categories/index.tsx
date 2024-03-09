"use client"

import Image from "next/image"
import Button from "../Button"
import { CategoriesPageType, CategoriesType } from "@/types"


const Categories = ({ categories }: {categories: any}) => {

    const displayCategoriesCard = () => {
        if(categories.isError){
            console.log(categories.error)
            return <div>An Error Occured</div>
        }
        if(categories.isSuccess){
            // console.log(data)
            return categories.data["data"].map(({ id, slug, name, assets, description }: CategoriesType) => {
                return (
                    <div className="card h-96 w-auto bg-base-100 shadow-xl" key={id}>
                        <figure><Image src={assets ? assets[0].url : ""} alt={`${name} image`} height={200} width={250} className="w-full h-[200px] object-cover" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {name}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>{description}</p>
                            <div className="card-actions">
                                <Button color="green">See Products</Button>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    return (
        <section id="categories" className="container mx-auto mb-4 px-4">
            <h1 className="mb-4 text-5xl font-bold mobile:break-all">Top Categories</h1>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4">
                {displayCategoriesCard()}
            </div>
        </section>
    )
}

export default Categories