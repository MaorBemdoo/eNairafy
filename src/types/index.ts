import { z } from "zod"
import { ButtonSchema } from "./zodSchema"

export type ButtonProps = z.infer<typeof ButtonSchema>
