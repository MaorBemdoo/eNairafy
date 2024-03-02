import { z } from "zod"

export const ButtonSchema = z.object({
    children: z.string().optional(), 
    color: z.enum(["green", "black"])
})