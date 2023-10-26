import React from 'react'
import Banner from '../assets/banner1.webp'

const Newsletter = () => {
  return (
    <div className='px-10  bg-red-600 mt-20 mx-10 rounded-xl flex sm:flex-col lg:flex-row flex-col'>
        <img src={Banner} className='w-[500px] h-[400px]' alt="banner" />
        <div className='pb-2 sm:pb-0'>
        <p className='lg:text-[80px] sm:text-[40px] text-white font-extrabold mt-10 text-[40px]'>Subscribe to the Newsletter</p>
        <input  type='text' className='pr-28 pl-4 py-4' placeholder='your email'/>
        <button className='ml-2 border border-white text-white mt-4 px-8 py-4 hover:border hover:border-red-500 hover:bg-white hover:text-red-600'>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter
