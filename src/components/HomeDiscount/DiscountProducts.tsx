import { getDiscountProducts } from "@/utils/actions/getDiscountProducts"

const DiscountProducts = async () => {

    const discountProducts = await getDiscountProducts()
    console.log(discountProducts)

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