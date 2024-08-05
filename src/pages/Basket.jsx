import { useSelector } from "react-redux"
import { basketState } from "../redux/basketSlice"
import ProductItem from "../components/ProductItem"

const Basket = () => {

    const state = useSelector(basketState)

    return (
        <>
            <div>
                total price : {state.invoice.totalPrice}
            </div>

            <div
                className="
                    grid
                    sm:grid-cols-2 
                    md:grid-cols-3
                    lg:grid-cols-4
                    xl:grid-cols-5
                    gap-4
                    p-3 
            ">
                {state.items.map(item => <ProductItem key={item.id} data={item} />)}

            </div>


        </>
    )
}

export default Basket