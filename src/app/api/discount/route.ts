import { createDiscount } from "@/utils/actions/createDiscount";
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
        return NextResponse.json({
            message: "Error creating discount",
            description: err
        }, {status: 500})
    }
}