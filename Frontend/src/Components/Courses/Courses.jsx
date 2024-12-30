import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Course from '../COurse'
function Courses() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        <Course />
      </div>
      <Footer />

    </>
  )
}

export default Courses