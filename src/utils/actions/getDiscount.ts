"use server"

import axios from "axios";

export async function getDiscount(){
    const res = await axios.get("https://api.chec.io/v1/discounts", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Authorization": process.env.COMMERCEJS_X_Authorization_KEY
        },
    });

    return res.data.data[0]
}