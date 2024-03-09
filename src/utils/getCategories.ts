"use server";

import axios from "axios";

export const getCategories = async () => {
    const xAuthorizationKey = process.env.COMMERCEJS_X_Authorization_KEY;

    const headersList = {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Authorization": xAuthorizationKey,
    };

    const reqOptions = {
        url: "https://api.chec.io/v1/categories",
        method: "GET",
        headers: headersList,
    };

    try{
        const res = await axios.request(reqOptions);
        return {
            data: res.data,
            error: "",
            isError: false,
            isSuccess: true
        }
    }catch(err){
        return {
            data: "",
            error: err,
            isError: true,
            isSuccess: false
        }
    }

};
