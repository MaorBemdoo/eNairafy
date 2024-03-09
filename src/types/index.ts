import { z } from "zod"
import { ButtonSchema, CategoriesPageSchema, CategoriesSchema } from "./zodSchema"

export type ButtonProps = z.infer<typeof ButtonSchema>
export type CategoriesType = z.infer<typeof CategoriesSchema>
export type CategoriesPageType = z.infer<typeof CategoriesPageSchema>
