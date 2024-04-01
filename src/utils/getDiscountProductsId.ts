import axios from "axios";
import { getProducts } from "./actions/getProducts";
import { baseUrl } from "@/constants";

export async function getDiscountProductsId(type: "new" | "fetch"){
    if(type == "fetch"){
        const content = (await axios.get("https://mocki.io/v1/132f0fb6-55f3-4e67-9817-597db3603075")).data
        console.log(JSON.parse(content))
        return JSON.parse(content).product_ids;
    }

    let data = await getProducts({limit: 50})
    // console.log(response.data);

    const shuffledProducts = data.data.sort(() => Math.random() - 0.5);

    const randomProductIds = shuffledProducts.slice(0, 10).map((product: any) => product.id);

    return randomProductIds;
}