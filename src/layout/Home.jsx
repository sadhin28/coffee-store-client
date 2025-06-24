import { Link, useLoaderData } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2';
import { useState } from "react";
const Home = () => {
    const allcoffee = useLoaderData();
    const [coffee,setcoffee]=useState(allcoffee) 
    // const { category, chef,details,name, photo,taste,_id
    // }=allcoffee

    /**======Delate Coffe======= **/
    
    const handelDelete = _id => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`,{
                    method:'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        
                        console.log(data)
                        if (data.deletedCount > 0) {

                            swalWithBootstrapButtons.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffee.filter(cof=> cof._id !== _id);
                            setcoffee(remaining)
                            }
                    })
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary Coffee is safe :)",
                    icon: "error"
                });
            }
        });
    }

    /**=================handelViewCoffee=================== */
    const handelViewCoffee=_id=>{

    }
    return (
        <div className="mx-auto w-11/12 grid justify-center md:grid-cols-2 lg:grid-cols-3 md:justify-items-center gap-10 mt-10 ">
            {
                coffee.map(coffee => <div>

                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src={coffee.photo}
                                alt={coffee.name} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {coffee.name}

                            </h2>
                            <p>{coffee.details}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/view-coffee/${coffee._id}`}> <div onClick={() => handelViewCoffee(coffee._id)} className="badge btn hover:bg-gray-600 hover:text-white badge-outline">View</div></Link>
                                <Link to={`/update-coffee/${coffee._id}`}><div className="badge btn hover:bg-blue-600 hover:text-white badge-outline">Update</div></Link>
                                <div onClick={() => handelDelete(coffee._id)} className="badge text-2xl hover:text-red-600 btn badge-outline"><MdDeleteForever /></div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Home;