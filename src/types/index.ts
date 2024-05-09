import { z } from "zod"
import { ButtonSchema, CategoriesPageSchema, CategoriesSchema, DiscountSchema, ProductSchema } from "./zodSchema"

export type ButtonProps = z.infer<typeof ButtonSchema>
export type CategoriesType = z.infer<typeof CategoriesSchema>
export type CategoriesPageType = z.infer<typeof CategoriesPageSchema>
export type ProductType = z.infer<typeof ProductSchema>
export type DiscountType = z.infer<typeof DiscountSchema>