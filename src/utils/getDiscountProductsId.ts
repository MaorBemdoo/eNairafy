import axios from "axios";
import { getProducts } from "./actions/getProducts";
import { baseUrl } from "@/constants";
import { getDiscount } from "./actions/getDiscount";

export async function getDiscountProductsId(type: "new" | "fetch"){
    if(type == "fetch"){
        const content = await getDiscount()
        return content.product_ids;
    }

    let data = await getProducts({limit: 50})
    // console.log(response.data);

    const shuffledProducts = data.data.sort(() => Math.random() - 0.5);

    const randomProductIds = shuffledProducts.slice(0, 10).map((product: any) => product.id);

    return randomProductIds;
}