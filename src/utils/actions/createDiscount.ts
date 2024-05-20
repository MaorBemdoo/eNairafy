"use server";

import axios from "axios";
import moment from "moment";
import { getDiscountProductsId } from "../getDiscountProductsId";

export async function createDiscount() {
    const discountProductsId = await getDiscountProductsId("new");

    const midnight = moment().add(24, 'hours').unix();

    const headers = {
        "X-Authorization": `${process.env.COMMERCEJS_X_Authorization_KEY}`,
        "Content-Type": "application/json",
        Accept: "application/json",
    };

    const discountBody = {
        // code: Math.random(),
        type: "percentage",
        expires: true,
        expires_on: midnight,
    };

    const res1 = await axios.post(
        "https://api.chec.io/v1/discounts",
        JSON.stringify({...discountBody, value: discountProductsId[0].value, product_ids: discountProductsId[0].ids}),
        {
            headers,
        }
    );
    const res2 = await axios.post(
        "https://api.chec.io/v1/discounts",
        JSON.stringify({...discountBody, value: discountProductsId[1].value, product_ids: discountProductsId[1].ids}),
        {
            headers,
        }
    );
    const res3 = await axios.post(
        "https://api.chec.io/v1/discounts",
        JSON.stringify({...discountBody, value: discountProductsId[2].value, product_ids: discountProductsId[2].ids}),
        {
            headers,
        }
    );
    const res4 = await axios.post(
        "https://api.chec.io/v1/discounts",
        JSON.stringify({...discountBody, value: discountProductsId[3].value, product_ids: discountProductsId[3].ids}),
        {
            headers,
        }
    );
    const res5 = await axios.post(
        "https://api.chec.io/v1/discounts",
        JSON.stringify({...discountBody, value: discountProductsId[4].value, product_ids: discountProductsId[4].ids}),
        {
            headers,
        }
    );

    return [res1.data, res2.data, res3.data, res4.data, res5.data]
}
