"use server"

import axios from "axios";
import moment from "moment";
import { getDiscountProductsId } from "./getDiscountProductsId";

export async function createDiscount(){
    const discountProductsId = await getDiscountProductsId("new")

    const randomPercent = Math.floor(Math.random() * (90 - 20 + 1)) + 20 // generate random value from 20 to 90

    const midnight = moment().startOf('day').add(1, 'day').unix();

    const headers = {
        "X-Authorization": `${process.env.COMMERCEJS_X_Authorization_KEY}`,
        "Content-Type": "application/json",
        Accept: "application/json"
    };

    const discountBody = {
        // code: Math.random(),
        type: "percentage",
        value: randomPercent,
        product_ids: discountProductsId,
        expires: true,
        expires_on: midnight,
    }

    const res = await axios.post("https://api.chec.io/v1/discounts", JSON.stringify(discountBody), {
        headers
    })

    return res.data
}