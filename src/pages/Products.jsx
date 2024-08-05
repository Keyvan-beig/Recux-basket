import { useSelector } from "react-redux"
import ProductItem from "../components/ProductItem"
import products from "../contact/productList"
import { basketState } from "../redux/basketSlice"


const Products = () => {

    const data = useSelector(basketState)
    
    return (
        <div className="
            grid
            sm:grid-cols-2 
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            gap-4
            p-3 
        ">
            {products.map(item => <ProductItem key={item.id} data={item} />)}
        </div>
    )
}

export default Products