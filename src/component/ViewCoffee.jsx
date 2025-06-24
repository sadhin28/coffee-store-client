import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ViewCoffee = () => {
    const viewCoffee= useLoaderData()
    const {category,chef,details,name,photo,supplier,taste}=viewCoffee
    return (
        <div className='mt-40 hover:shadow-lg shadow-2xl card-side  bg-[#a9cbce] mx-auto md:w-5/12 w-11/12'>
            <Link to="/" className="relative hover:text-red-100 top-4 left-4 text-lg font-semibold text-gray-700 hover:underline">
                    ← Back to home
            </Link>
            <h1 className='py-5 divider w-2/3 mx-auto text-center font-black'>View Details</h1>
            
            <div className='flex     p-5  justify-between md:justify-around items-center'>
            <div>
                <img src={photo} alt="" />
            </div>
            <div>
                <h1><span className='font-black'>Name : </span>{name}</h1>
                <h1><span className='font-black'>Chef : </span>{chef}</h1>
                <h1><span className='font-black'>Supplier : </span>{supplier}</h1>
                <h1><span className='font-black'>Taste : </span>{taste}</h1>
                <h1><span className='font-black'>Category : </span>{category}</h1>
                <h1><span className='font-black'>Details : </span>{details}</h1>
                  
            </div>
        </div>
        </div>
    );
};

export default ViewCoffee;