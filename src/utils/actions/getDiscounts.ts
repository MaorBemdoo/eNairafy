"use server"

import axios from "axios";

export async function getDiscounts(params?: any){
    const headers = {
        "X-Authorization": `${process.env.COMMERCEJS_X_Authorization_KEY}`,
        "Content-Type": "application/json",
        Accept: "application/json"
    };

    const res = await axios.get(`https://api.chec.io/v1/discounts`, {
        headers: headers,
        params: params
    })

    return res.data
}