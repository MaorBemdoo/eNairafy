"use server"

import { getDiscountProductsId } from "./getDiscountProductsId"
import { getProducts } from "./getProducts"

export async function getDiscountProducts(){
    try {
        const products = await getProducts({limit: 200})
        const discountProductsId = await getDiscountProductsId("fetch")
    
        const discountProducts = products.data.filter((product: any) => discountProductsId.includes(product.id))
        return discountProducts
    } catch (err) {
        console.log(err)
        return err;
    }
}