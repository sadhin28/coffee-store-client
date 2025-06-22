import { useLoaderData } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

const Home = () => {
    const allcoffee = useLoaderData();
    // const { category, chef,details,name, photo,taste,_id
    // }=allcoffee
    console.log(allcoffee)
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
                                <div className="badge btn hover:bg-blue-600 hover:text-white badge-outline">Update</div>
                                <div className="badge text-2xl hover:text-red-600 btn badge-outline"><MdDeleteForever /></div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Home;