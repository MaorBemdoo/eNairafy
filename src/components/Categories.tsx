"use client";

import Image from "next/image";
import Button from "./Button";
import { CategoriesPageType, CategoriesType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/utils/actions/getCategories";

const gCategories = async () => {
    return await getCategories();
};

const Categories = () => {
    const { data, error, isError, isSuccess, isLoading, refetch } = useQuery({
        queryKey: ["categories"],
        queryFn: gCategories,
    });

    const displayCategoriesCard = () => {
        if (isLoading) {
            return (
                <div className="loading loading-spinner loading-lg place-self-center"></div>
            );
        }
        if (isError) {
            console.log(error);
            return (
                <div className="place-self-center">
                    <p>An Error Occured</p>
                    <Button color="green" onClick={refetch}>
                        Try Again
                    </Button>
                </div>
            );
        }
        if (isSuccess) {
            // console.log(data)
            return data.data.map(
                ({ id, slug, name, assets, description }: CategoriesType) => {
                    return (
                        <div
                            className="card h-96 w-auto bg-base-100 shadow-xl"
                            key={id}
                        >
                            <figure>
                                <Image
                                    src={assets ? assets[0].url : ""}
                                    alt={`${name} image`}
                                    height={200}
                                    width={250}
                                    className="w-full h-[200px] object-cover hover:scale-125 transition-all"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {name}
                                    <div className="badge badge-secondary">
                                        NEW
                                    </div>
                                </h2>
                                <p>{description}</p>
                                <div className="card-actions">
                                    <Button color="green">See Products</Button>
                                </div>
                            </div>
                        </div>
                    );
                }
            );
        }
    };

    return (
        <section id="categories" className="container mb-4">
            <h1 className="mb-4 text-5xl font-bold mobile:break-all">
                Top Categories
            </h1>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4 mobile:grid-cols-none mobile:grid-flow-col">
                {displayCategoriesCard()}
            </div>
        </section>
    );
};

export default Categories;
