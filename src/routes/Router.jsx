import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import Addcoffee from "../component/Addcoffee";
import Updatecoffee from "../component/Updatecoffee";
import Root from "../layout/Root";
import ViewCoffee from "../component/ViewCoffee";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
             {
        path:'/',
        loader:()=>fetch('http://localhost:5000/coffee'),
        element:<Home></Home>,
       

    },
    {
        path:"/add-coffee",
        element:<Addcoffee></Addcoffee>
    },
    {
        path:'/update-coffee/:id',
        element:<Updatecoffee></Updatecoffee>,
        loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)

    },
    {
        path:'/view-coffee/:id',
        element:<ViewCoffee></ViewCoffee>,
         loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)

    }
    ]
    }

])

export default router