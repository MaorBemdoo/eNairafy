import { PriceType } from "@/types"

const getDiscountPrice = (price: number, discountValue: number): PriceType => {
    const raw = Math.round(price - (price * (discountValue/100)))
    const formatted = raw.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    const formatted_with_symbol = `₦${formatted}`
    const formatted_with_code = `NGN ${formatted}`

    return {
        raw, formatted, formatted_with_symbol, formatted_with_code
    }
}

export default getDiscountPrice
