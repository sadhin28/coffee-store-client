import { Link, useLoaderData } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2';
const Home = () => {
    const allcoffee = useLoaderData();
    // const { category, chef,details,name, photo,taste,_id
    // }=allcoffee

    /**======Delate Coffe======= **/
    console.log(allcoffee)
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
    return (
        <div className="mx-auto">
            {
                allcoffee.map(coffee => <div>

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