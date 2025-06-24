import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Root = () => {
    return (
        <div className="bg-[#f4f3f0]">
          
            <Navbar></Navbar>
          
            <div className="min-h-[68vh]">
               <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;