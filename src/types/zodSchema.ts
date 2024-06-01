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

export const ProductSchema = z.object({
    id: z.string(),
    created: z.number(),
    updated: z.number(),
    active: z.boolean(),
    permalink: z.string(),
    name: z.string(),
    description: z.string(),
    price: z.object({
        raw: z.number(),
        formatted: z.string(),
        formatted_with_symbol: z.string(),
        formatted_with_code: z.string()
    }),
    inventory: z.object({ managed: z.boolean(), available: z.number() }),
    sku: z.string(),
    sort_order: z.number(),
    seo: z.object({ title: z.string(), description: z.string() }),
    thank_you_url: z.null(),
    meta: z.null(),
    conditionals: z.object({
        is_active: z.boolean(),
        is_tax_exempt: z.boolean(),
        is_pay_what_you_want: z.boolean(),
        is_inventory_managed: z.boolean(),
        is_sold_out: z.boolean(),
        has_digital_delivery: z.boolean(),
        has_physical_delivery: z.boolean(),
        has_images: z.boolean(),
        collects_fullname: z.boolean(),
        collects_shipping_address: z.boolean(),
        collects_billing_address: z.boolean(),
        collects_extra_fields: z.boolean()
    }),
    is: z.object({
        active: z.boolean(),
        tax_exempt: z.boolean(),
        pay_what_you_want: z.boolean(),
        inventory_managed: z.boolean(),
        sold_out: z.boolean()
    }),
    has: z.object({
        digital_delivery: z.boolean(),
        physical_delivery: z.boolean(),
        images: z.boolean()
    }),
    collects: z.object({
        fullname: z.boolean(),
        shipping_address: z.boolean(),
        billing_address: z.boolean(),
        extra_fields: z.boolean()
    }),
    checkout_url: z.object({ checkout: z.string(), display: z.string() }),
    categories: z.array(
        z.object({ id: z.string(), slug: z.string(), name: z.string() })
    ),
    image: z.object({
        id: z.string(),
        url: z.string(),
        description: z.null(),
        is_image: z.boolean(),
        filename: z.string(),
        file_size: z.number(),
        file_extension: z.string(),
        image_dimensions: z.object({ width: z.number(), height: z.number() }),
        meta: z.array(z.unknown()),
        created_at: z.number(),
        updated_at: z.number()
    }),
    attributes: z.array(
        z.union([
            z.object({
                id: z.string(),
                name: z.string(),
                value: z.array(z.object({ value: z.string(), label: z.string() })),
                meta: z.null()
            }),
            z.object({
                id: z.string(),
                name: z.string(),
                value: z.string(),
                meta: z.null()
            }),
            z.object({
                id: z.string(),
                name: z.string(),
                value: z.null(),
                meta: z.null()
            }),
            z.object({
                id: z.string(),
                name: z.string(),
                value: z.array(z.object({ value: z.null(), label: z.null() })),
                meta: z.null()
            })
        ])
    )
})

export const DiscountSchema = z.object({
    id: z.string(),
    created: z.number(),
    code: z.string(),
    type: z.string(),
    value: z.number(),
    expires_on: z.number(),
    starts_on: z.number(),
    is_expired: z.boolean(),
    limit_quantity: z.boolean(),
    quantity: z.number(),
    description: z.null(),
    meta: z.object({ campaign: z.string() }),
    product_ids: z.array(z.string())
})

export const PriceSchema = z.object({
    raw: z.number(),
    formatted: z.string(),
    formatted_with_symbol: z.string(),
    formatted_with_code: z.string()
})