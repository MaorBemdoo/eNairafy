import Image from "next/image";
import Button from "./Button";
import { CategoriesPageType, CategoriesType } from "@/types";
import { getCategories } from "@/utils/actions/getCategories";
import { LuShoppingBasket } from "react-icons/lu";
import Link from "next/link";

const Categories = async () => {
    const displayCategoriesCard = async () => {
        try{
            const data = await getCategories()
            return data.data.map(
                ({ id, slug, name, assets, description }: CategoriesType) => {
                    return (
                        <Link
                            href="/products"
                            className="first:*:first:*:first:*:hover:scale-125"
                            key={id}
                        >
                            <div className="card h-96 w-auto bg-base-100 shadow-xl">
                                <figure>
                                    <Image
                                        src={assets ? assets[0].url : ""}
                                        alt={`${name} image`}
                                        height={200}
                                        width={250}
                                        className="w-full h-[200px] object-cover transition-all"
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
                                    <div className="card-actions justify-end">
                                        <LuShoppingBasket className="hover:fill-green-600" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                }
            );
        }catch(err){
            console.log(err);
            return (
                <div className="place-self-center text-center">
                    <p>An Error Occured</p>
                </div>
            );
        }
    };

    return (
        <section id="categories" className="container mb-4">
            <h1 className="mb-4 text-5xl font-bold mobile:break-all">
                Top Categories
            </h1>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4 mobile:grid-cols-none">
                {await displayCategoriesCard()}
            </div>
        </section>
    );
};

export default Categories;
