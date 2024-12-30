import { useState } from 'react'
import Home from './Components/Home/Home'
import Courses from './Components/Courses/Courses'
import { Route, Routes } from "react-router-dom"
import Signup from './Components/Signup'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home/>
    <Course/> */}

    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Course' element={<Courses/>}/>
      <Route path='/signup' element={<Signup/>}/>

    </Routes>
    </div>


    </>
  )
}

export default App
