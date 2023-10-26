import React from 'react'
import Banner from '../assets/banner2.png'
import '../App.css'
import { arr } from '../utils/Data'
import Feature from '../components/Feature'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

const Home = () => {

  return (
    <div className='flex justify-center flex-col  bg-black '>
      
                <div className='flex justify-center'>
       <p className='text-white text-[100px] absolute  mt-20 '> Experience Walter.</p> 
       
        <motion.img 
         drag
         dragConstraints={{
           top:-20,
           left: -200,
           right: 200,
           bottom:20
          
         }}
        src={Banner} alt='banner' className='w-[650px] h-[550px] relative z-50 cursor-pointer' />
     
        </div>
        <div className='m-auto'>
          <Link to="/products">
           <button className='border border-white text-white px-8 py-4 hover:bg-white hover:text-black '>View All Products</button>
          </Link>
        </div>
         <p className='text-white w-[800px] font-bold  text-xl text-opacity-30 m-auto mt-10' >
         Unleash the power of exceptional sound with Walter, the ultimate headphone brand that blends cutting-edge technology with elegant design. We believe that music has the power to transport, inspire, and evoke emotions like no other medium. That's why we have meticulously crafted a range of headphones that redefine the way you experience your favorite tunes.
         </p>
         <div className='flex flex-col justify-center m-auto'>
            { arr.map((item,index)=>{
                return (
                    <Feature item={item} key={index} />
                )
            })}
         </div>
         <Newsletter/>
         <Footer/>
    </div>
  )
}

export default Home
