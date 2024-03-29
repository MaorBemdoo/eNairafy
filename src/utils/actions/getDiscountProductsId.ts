"use server"

import { getProducts } from "./getProducts";

export async function getDiscountProductsId(/*type: "new" | "fetch"*/){
    // if(type == "fetch"){
    //     return;
    // }

    try {
        let data = await getProducts({limit: 50})
        // console.log(response.data);
    
        const shuffledProducts = data.data.sort(() => Math.random() - 0.5);
    
        const randomProductIds = shuffledProducts.slice(0, 10).map((product: any) => product.id);
    
        return randomProductIds;
    } catch (err) {
        console.log(err)
        return err;
    }
}