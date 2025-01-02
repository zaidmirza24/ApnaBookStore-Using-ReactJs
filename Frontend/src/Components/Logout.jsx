import React from 'react'
import { useAuth } from './context/AuthProvider'
import { Link } from 'react-router-dom'

function Logout() {
    const [authuser,setauthuser] = useAuth()
    const handleLogout = ()=>{
        try {
            setauthuser({
                ...authuser,
                user:null
            })
            localStorage.removeItem("users")
            window.location.reload()
        } catch (error) {
            console.log("Error",error)
        }
    }
  return (
    <>
    <Link to='/' onClick={handleLogout} className='px-3 py-3 bg-red-500 text-white rounded-md cursor-pointer'>logout</Link>
    </>
  )
}

export default Logout