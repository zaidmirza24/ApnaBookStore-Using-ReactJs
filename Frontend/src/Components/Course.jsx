import React from 'react'
import { useState ,useEffect } from 'react'
// import list from "../../public/list.json"
import Cards from "./Cards"
import axios from 'axios'
import {Link} from "react-router-dom"

function Course() {
  // console.log(list)
  const [book, setbook] = useState([])
  useEffect(() => {
    const getbook = async ()=>{
      try {
        const res = await axios.get("http://localhost:3000/book")
        console.log(res.data)
        setbook(res.data)
        
      } catch (error) {
        console.log("error",error)
        
      }
    }
  
    getbook();
  }, [])
  


  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl'>
          We're delighted to have you <span className='text-pink-500'>here! :)</span>
        </h1>
        <p className='mt-12 text-justify'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugit ipsa nam impedit quibusdam voluptates sequi. Non, tempore id blanditiis hic nam nobis Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iure numquam molestias officiis, non eius dolores consequuntur maxime animi fugit quod atque voluptatem.
        </p>
        <Link to="/">
        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
        
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          // <Cards/>\
          book.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))
        }
      </div>

    </div>
    
    </>
  )
}

export default Course