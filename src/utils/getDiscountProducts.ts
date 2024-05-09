import { getDiscountProductsId } from "./getDiscountProductsId";
import { getProducts } from "./actions/getProducts";

export async function getDiscountProducts() {
    const products = await getProducts({ limit: 200 });

    const discountProductsId = await getDiscountProductsId("fetch");

    const discountedProducts = products.data.filter((product: any) =>
        discountProductsId.some(discountProductId => discountProductId.ids.includes(product.id))
    );

    const updatedDiscountProducts = discountedProducts.map((discountProduct: any) => {
        const discountProductId = discountProductsId.find(discountProductId => discountProductId.ids.includes(discountProduct.id));
        return {
            ...discountProduct,
            discountValue: discountProductId?.value
        };
    });

    // console.log(updatedDiscountProducts);

    return updatedDiscountProducts;
}