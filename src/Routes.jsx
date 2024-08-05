import { useRoutes } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Basket from "./pages/Basket"

const Routes = () => {

    let roteList = useRoutes([
        {
            path: '/',
            element: <Home />,
            children:[
                {
                    path:'/products',
                    element : <Products/>
                },
                {
                    path:'/basket',
                    element : <Basket/>
                }
            ]
        }
    ])

    return roteList 

}

export default Routes