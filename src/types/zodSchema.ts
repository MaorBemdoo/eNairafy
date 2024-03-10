import { z } from "zod"

export const ButtonSchema = z.object({
    children: z.any().optional(), 
    color: z.enum(["green", "black"]),
    onClick: z.function().args(z.any()).returns(z.any()).optional(),
    className: z.string().optional()
})

export const AssetSchema = z.object({
    id: z.string(),
    url: z.string().url(),
    description: z.string(),
    is_image: z.boolean(),
    filename: z.string(),
    file_size: z.number(),
    file_extension: z.string(),
    image_dimensions: z.object({width: z.number(), height: z.number()}),
    meta: z.array(z.any()),
    created_at: z.number(),
    updated_at: z.number()
})

export const CategoriesSchema = z.object({
    id: z.string(),
    parent_id: z.null(),
    slug: z.string().toLowerCase(),
    name: z.string(),
    description: z.string(),
    products: z.number(),
    created: z.number(),
    updated: z.number(),
    meta: z.any(),
    assets: z.array(AssetSchema),
    children: z.array(z.any())
})

export const CategoriesPageSchema = z.object({
    data: z.array(CategoriesSchema),
    error: z.string(),
    isError: z.boolean(),
    isSuccess: z.boolean()
})