import { z } from "zod"

export const ButtonSchema = z.object({
    children: z.any().optional(), 
    color: z.enum(["green", "black"]),
    className: z.string().optional()
})