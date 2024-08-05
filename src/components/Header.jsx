import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { basketState } from "../redux/basketSlice"

const Header = () => {

    const state = useSelector(basketState)

    let countBasket = 0

    state.items.map( item => countBasket+=item.quantity)

    return (
        <div className="flex justify-between p-3 bg-blue-500 text-white">
            <div className="flex items-center [&>*]:mx-3">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "bg-green-400 py-1 px-2": ""}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/products"
                    className={({ isActive }) => isActive ? "bg-green-400 py-1 px-2": ""}
                >
                    Products
                </NavLink>
            </div>
            <div className=" flex items-center [&>*]:mx-3">
                <NavLink
                    to="/basket"
                    className={({ isActive }) => isActive ? "bg-green-400 py-1 px-2": ""}
                >
                    basket {countBasket}
                </NavLink>

            </div>
        </div>
    )
}

export default Header