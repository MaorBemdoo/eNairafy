import { getDiscountProductsId } from "./getDiscountProductsId";
import { getProducts } from "./actions/getProducts";
import { ProductType } from "@/types";

export async function getDiscountProducts() {
    const products = await getProducts({ limit: 200 });

    const discountProductsId = await getDiscountProductsId("fetch");

    const discountedProducts: ProductType[] = products.data.filter((product: ProductType) =>
        discountProductsId.some(discountProductId => discountProductId.ids.includes(product.id))
    );

    const updatedDiscountProducts = discountedProducts.map((discountProduct) => {
        const discountProductId = discountProductsId.find(discountProductId => discountProductId.ids.includes(discountProduct.id));
        return {
            ...discountProduct,
            discountValue: discountProductId?.value
        };
    });

    // console.log(updatedDiscountProducts);

    const shuffledDiscountProducts = updatedDiscountProducts.sort(() => Math.random() - 0.5);

    return shuffledDiscountProducts
}