import { useDispatch } from "react-redux"
import { addItem, removeItem } from "../redux/basketSlice"
import { useLocation } from "react-router-dom"


const ProductItem = ({ data }) => {

    const dispatch = useDispatch()

    const location = useLocation()

    return (
        <div className="bg-gray-200 p-4">
            <img className="w-full" src={data.imageSrc} alt={data.name} />
            <div className=" my-4 text-xl ">
                {data.name}
            </div>
            <div className="flex justify-between text-2xl font-bold text-green-600">
                <p>price : </p>
                {data.price}
            </div>
            <div >
                <button
                    onClick={
                        location.pathname === "/products" ?
                            () => dispatch(addItem(data)) :
                            () => dispatch(removeItem(data))
                    }
                    className={`
                        ${location.pathname === "/products" ?
                            'bg-green-500' : 'bg-red-500'
                        }
                        text-white 
                        px-3 
                        py-2 
                        rounded-lg  
                        my-4`
                    }
                >

                    {location.pathname === "/products" ? 'Add Item' : 'Remove item'}

                </button>
            </div>
        </div>
    )
}

export default ProductItem