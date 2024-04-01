import { getDiscountProducts } from "@/utils/getDiscountProducts"

const DiscountProducts = async () => {

    const discountProducts = await getDiscountProducts()
    console.log(discountProducts)

    return (
        <div>
            {
                JSON.stringify(discountProducts)
                // discountProducts.map(({}) => {
                //     return (
                //         <div>
                            
                //         </div>
                //     )
                // })
            }
        </div>
    )
}
export default DiscountProducts