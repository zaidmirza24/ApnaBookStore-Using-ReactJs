import { useState } from 'react'
import Home from './Components/Home/Home'
import Courses from './Components/Courses/Courses'
import { Navigate, Route, Routes } from "react-router-dom"
import Signup from './Components/Signup'
import { useAuth } from './Components/context/AuthProvider'


function App() {
  const [count, setCount] = useState(0)
  const [authuser, setauthuser] = useAuth()
    // console.log(authuser)

  return (
    <>
      {/* <Home/>
    <Course/> */}

    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Course' element={authuser?<Courses/>: <Navigate to={'/signup'}/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </div>


    </>
  )
}

export default App
