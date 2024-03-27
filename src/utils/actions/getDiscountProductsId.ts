"use server"

import axios from "axios";

export async function getDiscountProductsId(){

    let reqOptions = {
        url: "https://api.chec.io/v1/products",
        method: "GET",
        params: {
            limit: 50
        },
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Authorization":  process.env.COMMERCEJS_X_Authorization_KEY
        },
    }
    
    let response = await axios.request(reqOptions);
    // console.log(response.data);

    const shuffledProducts = response.data.data.sort(() => Math.random() - 0.5);

    const randomProductIds = shuffledProducts.slice(0, 10).map((product: any) => product.id);
    
    return randomProductIds;
}