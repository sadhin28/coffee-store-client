
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
const Addcoffee = () => {
    const navigate=useNavigate()
    const { register, handleSubmit, formState: { errors },} = useForm();

    const onSubmit = async (data) => {
       
       fetch('http://localhost:5000/coffee',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
        
           Swal.fire({
             title:'Success',
             text:"Add Coffee Item Successfully",
             icon:'success',
             confirmButtonText:'Cool'
           })
           navigate('/')
           
        
       })
       .catch(errors=>{
          Swal.fire({
             title:'Error',
             text:`${errors.message}`,
             icon:'error',
             confirmButtonText:'Cool'
           })
       })
      
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f4f3f0] px-4 py-8">
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-10 relative">
                <a href="/" className="absolute top-4 left-4 text-lg font-semibold text-gray-700 hover:underline">
                    ← Back to home
                </a>

                <h2 className="text-3xl font-bold text-center text-[#374151] mb-2">Add New Coffee</h2>
                

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { name: 'name', label: 'Name', placeholder: 'Enter coffee name' },
                            { name: 'chef', label: 'Chef', placeholder: 'Enter coffee chef' },
                            { name: 'supplier', label: 'Supplier', placeholder: 'Enter coffee supplier' },
                            { name: 'taste', label: 'Taste', placeholder: 'Enter coffee taste' },
                            { name: 'category', label: 'Category', placeholder: 'Enter coffee category' },
                            { name: 'details', label: 'Details', placeholder: 'Enter coffee details' },
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
                        Add Coffee
                    </button>
                </form>

                <ToastContainer position="top-right" autoClose={3000} />
            </div>
        </div>
    );
};

export default Addcoffee;