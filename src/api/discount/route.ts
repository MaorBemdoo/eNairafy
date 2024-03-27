import { createDiscount } from "@/utils/actions/createDiscount";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest){
    if(req.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`){
        return NextResponse.json("unAuthorized", {status: 400})
    }
    
    await createDiscount()
}