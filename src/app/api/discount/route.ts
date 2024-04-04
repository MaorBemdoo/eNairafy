import { baseUrl } from "@/constants";
import { createDiscount } from "@/utils/actions/createDiscount";
import axios from "axios";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest){
    if (!req.headers.get("Authorization")) {
        return NextResponse.json({ message: 'Unauthorized' }, {status: 401});
    }

    if (req.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`) {
        return NextResponse.json({ message: 'Forbidden' }, {status: 403});
    }
    
    try {
        await createDiscount()
        return NextResponse.json({ message: `Created new discount` }, {status: 200})
    } catch (err) {
        console.log(err)
        return NextResponse.json({
            message: "Error creating discount",
        }, {status: 500})
    }
}