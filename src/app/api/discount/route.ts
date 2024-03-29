import { createDiscount } from "@/utils/actions/createDiscount";
import { writeFile } from "fs/promises";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest){
    if (!req.headers.get("Authorization")) {
        return NextResponse.json({ message: 'Unauthorized' }, {status: 401});
    }

    if (req.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`) {
        return NextResponse.json({ message: 'Forbidden' }, {status: 403});
    }
    
    try {
        const newDiscount = await createDiscount()
        // const newDiscount = "Testing"
        await writeFile(`${process.cwd()}/src/constants/discount.txt`, `${JSON.stringify(newDiscount)}`).then(res => res).catch(err => console.log(err))
        return NextResponse.json({ message: `Created new discount` }, {status: 200})
    } catch (err) {
        console.log(err)
        return NextResponse.json({
            message: "Error creating discount",
        }, {status: 500})
    }
}