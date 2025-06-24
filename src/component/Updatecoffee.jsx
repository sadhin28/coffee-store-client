import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
const Updatecoffee = () => {
    const coffee = useLoaderData()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = async (data) => {
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire("Saved!", "",
                     "success");
                console.log('Update coffee')
            
                console.log(data)
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f4f3f0] px-4 py-8">
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-10 relative">
                <a href="/" className="absolute top-4 left-4 text-lg font-semibold text-gray-700 hover:underline">
                    ← Back to home
                </a>

                <h2 className="text-3xl font-bold text-center text-[#374151] mb-2">Update Coffee</h2>


                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { name: 'name', label: 'Name', placeholder: `${coffee.name}` },
                            { name: 'chef', label: 'Chef', placeholder: `${coffee.chef}` },
                            { name: 'supplier', label: 'Supplier', placeholder: `${coffee.supplier}` },
                            { name: 'taste', label: 'Taste', placeholder: `${coffee.taste}` },
                            { name: 'category', label: 'Category', placeholder: `${coffee.category}` },
                            { name: 'details', label: 'Details', placeholder: `${coffee.details}` },
                        ].map(({ name, label, placeholder }) => (
                            <div key={name}>
                                <label className="block mb-1 font-medium">{label}</label>
                                <input
                                    {...register(name, { required: `${label} is required` })}
                                    placeholder={placeholder}
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#d6a86b]"
                                />
                                {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>}
                            </div>
                        ))}
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Photo</label>
                        <input
                            {...register('photo', {
                                required: 'Photo URL is required',

                            })}
                            placeholder="Enter photo URL"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#d6a86b]"
                        />
                        {errors.photo && <p className="text-red-500 text-sm mt-1">{errors.photo.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#d6a86b] hover:bg-[#c99757] text-white font-semibold py-2 px-6 rounded transition-all duration-300"
                    >
                        Update Coffee
                    </button>
                </form>

                <ToastContainer position="top-right" autoClose={3000} />
            </div>
        </div>
    );
};

export default Updatecoffee;