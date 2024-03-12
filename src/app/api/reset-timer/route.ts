import { NextResponse, type NextRequest } from "next/server";
import moment from "moment-timezone"

export async function GET(req: NextRequest){
    const authHeader = req.headers.get('Authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return NextResponse.json('Unauthorized', {
            status: 401,
        });
    }
    try {
        const now = moment();
        const midnight = moment().tz('Africa/Lagos').startOf('day');  // Set to midnight in your time zone
        let timeUntilMidnight = midnight.diff(now);
        if (timeUntilMidnight < 0) {
            midnight.add(1, 'days');
            timeUntilMidnight = midnight.diff(now);
        }

        // Calculate time until next midnight
        // const now = new Date();
        // const midnight = new Date(now)
        // midnight.setHours(24, 0, 0, 0); // Set to midnight
        // const timeUntilMidnight = midnight.getTime() - now.getTime();

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