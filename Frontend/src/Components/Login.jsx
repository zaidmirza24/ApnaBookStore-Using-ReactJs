import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);


    const onSubmit = async (data) => {
        // console.log(data)
        const userInfo = {
            // Fullname : data.fullname,
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:3000/user/login", userInfo).then((res) => {
            console.log(res)
            if (res.data) {
                alert("Login succesfully!")
                document.getElementById("my_modal_3").close()
                window.location.reload()
            }
            localStorage.setItem("users", JSON.stringify(res.data.user))
        }).catch((err) => {
            if (err.response) {
                console.log(err);
                alert("error" + err.response.data.message)
            }
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='dark:bg-slate-900 dark:text-black'>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link onClick={()=>{document.getElementById("my_modal_3").close()}} to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    </form>
                    <h3 className="font-bold text-lg">Login!</h3>
                    {/* Email */}
                    <div className='mt-4 space-y-2'>
                        <span>Email</span>
                        <br />
                        <input {...register("email", { required: true })} type="email" placeholder='Enter Your email' className='w-90 px-3 border outline-none rounded-md' />

                    </div>
                    {/* Password  */}
                    <div className='mt-4 space-y-2'>
                        <span>Password</span>
                        <br />
                        <input {...register("password", { required: true })} type="text" placeholder='Enter Your password' className='w-90 px-3 border outline-none rounded-md' />

                    </div>
                    {/* Button */}
                    <div className='flex justify-around mt-4'>
                        <button className='bg-pink-500 px-3 py-1 text-white rounded-md hover:bg-pink-700 duration-200'>Login</button>
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