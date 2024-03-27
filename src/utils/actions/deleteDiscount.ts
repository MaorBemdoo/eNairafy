"use server"

import axios from "axios";
import { getDiscounts } from "./getDiscounts"

export async function deleteDiscount(){
    const discounts = await getDiscounts({
        "is_expired": true
    })

    const discountId = discounts.data[0].id

    const headers = {
        "X-Authorization": `${process.env.COMMERCEJS_X_Authorization_KEY}`,
        "Content-Type": "application/json",
        Accept: "application/json"
    };

    axios.delete(`https://api.chec.io/v1/discounts/${discountId}`, {
        headers
    }).then(res => res).catch(err => console.log(err))
}