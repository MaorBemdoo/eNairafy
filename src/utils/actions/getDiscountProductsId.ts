"use server"

import { readFile, rm } from "fs/promises";
import { getProducts } from "./getProducts";

export async function getDiscountProductsId(type: "new" | "fetch"){
    if(type == "fetch"){
        try {
            const content = await readFile(`${process.cwd()}/src/constants/discount.txt`, {encoding: "utf8"})
            console.log(content)
            // await rm(`${process.cwd()}/src/constants/discount.txt`).then(res => res)
            return content;
        } catch (err) {
            console.log(err)
            return err;
        }
    }

    let data = await getProducts({limit: 50})
    // console.log(response.data);

    const shuffledProducts = data.data.sort(() => Math.random() - 0.5);

    const randomProductIds = shuffledProducts.slice(0, 10).map((product: any) => product.id);

    return randomProductIds;
}