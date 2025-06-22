import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import Addcoffee from "../component/Addcoffee";
import Updatecoffee from "../component/Updatecoffee";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
       

    },
    {
        path:"/add-coffee",
        element:<Addcoffee></Addcoffee>
    },
    {
        path:'/update-coffee',
        element:<Updatecoffee></Updatecoffee>

    }

])

export default router