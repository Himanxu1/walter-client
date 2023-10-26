import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillDelete, AiFillHeart } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { removeFromWish } from '../utils/wishlistSlice'
import { ToastContainer,toast } from 'react-toastify'

const ProductCard = (singleProduct) => {
    const wish = singleProduct.wish
    const {productid,name,img,price}= singleProduct.singleProduct
    const dispatch = useDispatch()
  
    const handlewishDelete =(id)=>{
      toast('🦄 removed from wishlist!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      dispatch(removeFromWish(id))
    }
  return (

    <Link  to={wish ? '': `/products/${productid}` }> 
  
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
    <div  className={wish ? 'border border-white w-[300px] h-[340px] p-6 m-8 shadow-lg shadow-cyan-500': 'border border-white w-[300px] h-[340px] p-6 m-8 shadow-lg shadow-cyan-500 transition-transform duration-300 transform hover:scale-110 hover:cursor-pointer' } >
        <img src={img} className='w-[300px] h-[250px]' alt="phot" />
        <div className='flex justify-between items-center'>
        <p className='text-white text-2xl font-semibold mt-2 font-mono'>{name}</p>
        <p className='text-white text-2xl font-semibold mt-2 font-mono'>${price}</p>
      {wish ? <button className='text-white text-3xl mt-4 hover:text-red-500' onClick={()=>handlewishDelete(productid)}><AiFillDelete/></button> : null }   
        </div>
        
    </div>
    </Link>
  )
}

export default ProductCard
