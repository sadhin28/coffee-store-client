import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const Root = () => {
    return (
        <div className="bg-[#f4f3f0]">
          
            <Navbar></Navbar>
          
            <div className="min-h-[68vh]">
               <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;