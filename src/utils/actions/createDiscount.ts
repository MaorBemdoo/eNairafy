"use server";

import axios from "axios";
import moment from "moment";
import { getDiscountProductsId } from "../getDiscountProductsId";
import { DiscountType } from "@/types";

export async function createDiscount(): Promise<DiscountType[]> {
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

    const createDiscountRecur = async (count = 1, array: DiscountType[] = []) => {
        if(count > 5) return array;
        const id = count-1
        const res = await axios.post(
            "https://api.chec.io/v1/discounts",
            JSON.stringify({...discountBody, value: discountProductsId[id].value, product_ids: discountProductsId[id].ids}),
            {
                headers,
            }
        );
        const data: DiscountType = await res.data
        array.push(data)
        count++
        createDiscountRecur(count, array)
    }

    const res = await createDiscountRecur() as DiscountType[]
    return res
}
