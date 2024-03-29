"use server";

import axios from "axios";

export async function getProducts(params?: any) {

    try {
        const res = await axios.get("https://api.chec.io/v1/products", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "X-Authorization": process.env.COMMERCEJS_X_Authorization_KEY
            },
            params: {
                ...params,
                include: "attributes"
            }
        });
    
        return res.data
    } catch (err) {
        // console.log(err)
        return err;
    }
}