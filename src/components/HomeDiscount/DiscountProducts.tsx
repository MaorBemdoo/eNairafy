import { getDiscountProducts } from "@/utils/getDiscountProducts"

const DiscountProducts = async () => {

    const discountProducts = await getDiscountProducts()

    return (
        <div>
            {
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