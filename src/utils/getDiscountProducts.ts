import { getDiscountProductsId } from "./getDiscountProductsId";
import { getProducts } from "./actions/getProducts";

export async function getDiscountProducts() {
    const products = await getProducts({limit: 200})
    const discountProductsId: any[] = await getDiscountProductsId("fetch");

    const discountProducts: object[] = products.data.filter((product: any) => discountProductsId.flatMap(discountProductId => discountProductId.includes(product.id)))
    return discountProducts.map((discountProduct: any) => {
        const discountProductId = discountProductsId.find(discountProductId => discountProductId.ids.includes(discountProduct.id))
        return {
            discountValue: discountProductId.value,
            ...discountProduct
        }
    })
}
