import { NextResponse, type NextRequest } from "next/server";

export const revalidate = 0;
export async function GET(req: NextRequest){
    const authHeader = req.headers.get('Authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return NextResponse.json('Unauthorized', {
            status: 401,
        });
    }
    try {
        // Calculate time until next midnight
        const now = new Date();
        const midnight = new Date(now)
        midnight.setHours(24, 0, 0, 0); // Set to midnight
        const timeUntilMidnight = midnight.getTime() - now.getTime();;

        // Send the time until midnight as the new countdown value
        return NextResponse.json({ countdown: timeUntilMidnight }, {
            status: 200
        });
    } catch (error) {
        console.error('Error resetting timer:', error);
        return NextResponse.json({ error: 'Failed to reset timer' }, {
            status: 500
        });
    }
};