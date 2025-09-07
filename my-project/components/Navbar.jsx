import React from 'react'
import logo from '../images/logo.png'
const Navbar = () => {
  return (
    <>
    <div className='w-full py-2 px-5 sm:px-10 flex items-center justify-between border-b-1 border-gray-300'>
        <div className='flex items-center gap-2'>
          <img src={logo} className='w-[25px] sm:w-[50px]' alt="" />
          <h4 className='font-bold text-sm sm:text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>AI Resume Classifier</h4>
        </div>
         <div className="text-[12px] sm:text-sm text-gray-500">
              Analyze • Score • Improve
            </div>
       </div>
       </>
  )
}

export default Navbar