import axios from "axios";
import { getProducts } from "./actions/getProducts";
import { baseUrl } from "@/constants";
import { getDiscount } from "./actions/getDiscount";
import { DiscountType, ProductType } from "@/types";

export async function getDiscountProductsId(type: "new" | "fetch"): Promise<{value: number, ids: string[]}[]>{

    if(type == "fetch"){
        const content = await getDiscount()
        return content.flatMap((discount: DiscountType) => {
                return {
                        value: discount.value,
                        ids: discount.product_ids
                }
        });
    }

    let data = await getProducts({limit: 50})
    // console.log(response.data);

    const shuffledProducts = data.data.sort(() => Math.random() - 0.5);

    const randomProductIds: string[] = shuffledProducts.slice(0, 10).map((product: ProductType) => product.id);

    const generateRandomProductIds = (count = 1, array: {value: number, ids: string[]}[] = []) => {
        if(count > 5) return array;
        const sliceStart = (count - 1) * 2
        const randomPercent = Math.floor(Math.random() * (90 - 20 + 1)) + 20; // generate random value from 20 to 90
        const randomProductId = {
                value: randomPercent,
                ids: randomProductIds.slice(sliceStart, sliceStart + 2)
        }
        array.push(randomProductId)
        return generateRandomProductIds(count + 1, array)
    }

    const totalRandomProductIds = generateRandomProductIds()

    return totalRandomProductIds;
}