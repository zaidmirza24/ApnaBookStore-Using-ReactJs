import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../Components/Login'
import axios from 'axios'
import { useForm } from "react-hook-form";


function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) =>{
        console.log(data)
        const userInfo = {
            Fullname : data.fullname,
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:3000/user/signup",userInfo).then((res)=>{
        console.log(res)
        if(res.data){
            alert("signup succesfully!")
        }
        localStorage.setItem("users",JSON.stringify(res.data.User))
    }).catch((err)=>{
        if(err.response){
            console.log(err);
        alert("error" + err.response.data.message)
        }
    })
    }


  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className='flex  h-screen items-center justify-center dark:bg-slate-900 dark:text-black'>
        <div className="w-[600px] ">
        <div className="modal-box border-[2px] shadow-md">
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            </form>
            
            <h3 className="font-bold text-lg">Signup!</h3>
            {/* Name */}
            <div className='mt-4 space-y-2'>
                <span>FullName</span>
                <br />
                <input {...register("fullname",{required:true})} type="email" placeholder='Enter Your Name' className='w-90 px-3 border outline-none rounded-md' />
                
            </div>
            {/* Email */}
            <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br />
                <input {...register("email",{required:true})}  type="email" placeholder='Enter Your Email' className='w-90 px-3 border outline-none rounded-md' />
                
            </div>
            {/* Password  */}
            <div className='mt-4 space-y-2'>
                <span>Password</span>
                <br />
                <input {...register("password",{required:true})}  type="text" placeholder='Enter Your Password' className='w-90 px-3 border outline-none rounded-md' />
                
            </div>
            {/* Button */}
            <div className='flex justify-around mt-4'>
                <button className='bg-pink-500 px-3 py-1 text-white rounded-md hover:bg-pink-700 duration-200'>Sigup</button>
                <p>Have Account?
                <button className='underline text-blue-500 cursor-pointer' onClick={()=>(document.getElementById("my_modal_3").showModal())}>Login</button>
                <Login />
                </p>
            </div>
        </div>
        </div>
        </form>
    
    </>
  )
}

export default Signup