import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit) }>
        <dialog id="my_modal_3" className="modal"> 
        <div className="modal-box">
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            </form>
            <h3 className="font-bold text-lg">Login!</h3>
            {/* Email */}
            <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br />
                <input {...register("email",{required:true})}  type="email" placeholder='Enter Your email' className='w-90 px-3 border outline-none rounded-md' />
                
            </div>
            {/* Password  */}
            <div className='mt-4 space-y-2'>
                <span>Password</span>
                <br />
                <input {...register("password",{required:true})} type="text" placeholder='Enter Your password' className='w-90 px-3 border outline-none rounded-md' />
                
            </div>
            {/* Button */}
            <div className='flex justify-around mt-4'>
                <button  className='bg-pink-500 px-3 py-1 text-white rounded-md hover:bg-pink-700 duration-200'>Login</button>
                <p>Not Registered?
                <Link to='/signup' className='underline text-blue-500 cursor-pointer'>Signup</Link>
                </p>
            </div>
        </div>
        </dialog>
        </form>
    )
}

export default Login