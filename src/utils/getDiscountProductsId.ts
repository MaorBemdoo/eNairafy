import axios from "axios";
import { getProducts } from "./actions/getProducts";
import { baseUrl } from "@/constants";
import { getDiscount } from "./actions/getDiscount";

export async function getDiscountProductsId(type: "new" | "fetch"){

    // generate random value from 20 to 90
    const randomPercent1 = Math.floor(Math.random() * (90 - 20 + 1)) + 20;
    const randomPercent2 = Math.floor(Math.random() * (90 - 20 + 1)) + 20;
    const randomPercent3 = Math.floor(Math.random() * (90 - 20 + 1)) + 20;
    const randomPercent4 = Math.floor(Math.random() * (90 - 20 + 1)) + 20;
    const randomPercent5 = Math.floor(Math.random() * (90 - 20 + 1)) + 20;

    if(type == "fetch"){
        const content: object[] = await getDiscount()
        return content.flatMap((discount: any) => {
                return {
                        value: discount.value,
                        ids: discount.product_ids
                }
        });
    }

    let data = await getProducts({limit: 50})
    // console.log(response.data);

    const shuffledProducts: object[] = data.data.sort(() => Math.random() - 0.5);

    const randomProductIds = shuffledProducts.slice(0, 10).map((product: any) => product.id);

    const randomProductId1 = {
            value: randomPercent1,
            ids: randomProductIds.slice(0, 2)
    }
    const randomProductId2 = {
            value: randomPercent2,
            ids: randomProductIds.slice(2, 4)
    }
    const randomProductId3 = {
            value: randomPercent3,
            ids: randomProductIds.slice(4, 6)
    }
    const randomProductId4 = {
            value: randomPercent4,
            ids: randomProductIds.slice(6, 8)
    }
    const randomProductId5 = {
            value: randomPercent5,
            ids: randomProductIds.slice(8, 10)
    }

    const totalRandomProductIds = [randomProductId1, randomProductId2, randomProductId3, randomProductId4, randomProductId5]

    return totalRandomProductIds;
}