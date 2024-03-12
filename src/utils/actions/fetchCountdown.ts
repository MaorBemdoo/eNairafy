"use server"

import { baseUrl } from "@/constants";

export const fetchCountdown = async () => {
    const res = await fetch(`${baseUrl}/api/reset-timer`, {
        headers: [
            ["Authorization", `Bearer ${process.env.CRON_SECRET}`],
        ],
        cache: "no-store"
    });

    if(!res.ok){
        console.error("Error fetching countdown:", res);
    }
    
    const { countdown: newCountdown } = await res.json();
    const remainingSeconds = Math.floor(newCountdown / 1000);
    const remainingMinutes = Math.floor(remainingSeconds / 60) % 60;
    const remainingHours = Math.floor(remainingSeconds / (60 * 60));
    return {
        seconds: remainingSeconds % 60,
        minutes: remainingMinutes,
        hours: remainingHours
    }
};