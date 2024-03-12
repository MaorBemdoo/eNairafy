"use server"

import { baseUrl } from "@/constants";
import axios from "axios";
import { revalidatePath } from "next/cache";

export const fetchCountdown = async () => {
    try {
        const res = await axios.get(`${baseUrl}/api/reset-timer`, {
            headers: {
                Authorization: `Bearer ${process.env.CRON_SECRET}`,
            },
        });

        const { countdown: newCountdown } = res.data;
        const remainingSeconds = Math.floor(newCountdown / 1000);
        const remainingMinutes = Math.floor(remainingSeconds / 60) % 60;
        const remainingHours = Math.floor(remainingSeconds / (60 * 60));
        return {
            seconds: remainingSeconds % 60,
            minutes: remainingMinutes,
            hours: remainingHours
        }
    } catch (error) {
        console.error("Error fetching countdown:", error);
    }
    revalidatePath("/")
};