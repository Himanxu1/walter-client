import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../utils/cartSlice'
import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import { addToWish } from '../utils/wishlistSlice'

const ProductDescription = () => {


  const {productId} = useParams()
  const dispatch = useDispatch()
  const cartItem = useSelector((store)=>store.cart.items)
  const wishItem = useSelector((store)=>store.wish.items)
  const userItem = useSelector((store)=>store.user.items)
  const [itemNumber,setItemNumber] = useState(1)
  const [wished,setWished] = useState(false)
  const [singleProduct,setSingleProduct] = useState([])
  const backend_url = process.env.REACT_APP_BACKEND_URI;
  const navigate = useNavigate()
  


  const fetchProductById = async (id)=>{
     const res = await fetch(`${backend_url}api/products?id=${id}`,{ 
      headers:{
      Authorization:localStorage.getItem('token')
    }
  })
     const data = await res.json()
    
     setSingleProduct(data?.product)
  }

  useEffect(()=>{
    fetchProductById(productId)
  },[])

  const handleClick = (item)=>{
    
        if(cartItem.includes(item)){
          toast.warn('🦄 already in cart!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }else{
          toast('🦄 added to cart!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
          dispatch(addToCart(item))
        }
  }

  const handleBuy = (item) =>{
     handleClick(item)
     navigate("/cart")

  }

  const handleAdd= (item) =>{

    item.quantity++;
    setItemNumber(item.quantity)
  }

  const handleSub = (item)=>{
    if(item.quantity > 1){
      item.quantity--;
      setItemNumber(item.quantity)
      
    }
  }

  const handleWish = (item)=>{
    
    if(wishItem.includes(item)){
      toast.warn('🦄 already in wishlist!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }else{
      toast.success('🦄 added to wishlist!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      dispatch(addToWish(item))
      setWished(true)
    }

  }
  

  return (
    <>
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
   {
    singleProduct.map((item)=>{
      return (
        <div className='bg-black w-full pb-[100px]' key={item.id}>
        <h1 className='text-center text-[100px] font-bold text-white'>/{item.name}</h1>
         <div className='m-20 flex '>
          <div>
            <img  src={item.img} className='w-[400px] h-[350px]' alt='product' />
             <div className='flex mt-4'>
              {item.subImg.map((single)=>{
                 return (
                  <img  src={single}   alt='productimage' className='w-20 h-20 p-2 cursor-pointer transition-transform duration-300 transform hover:scale-150'  />
                 )
              })}
            </div>
          </div>
            <div className=' text-white ml-40'>
              <p className='font-mono text-2xl font-semibold'>{item.name}</p>
              <p className='w-[400px] text-slate-400 mt-4 font-mono'>{item.description}</p>
              <p className='font-mono mt-4 text-3xl'>${item.price}</p>
              <div className='mt-4 flex items-center'>
                  <button className='px-4 py-2 border border-white text-white ' onClick={()=>handleAdd(item)}>+</button>
                  <p className='px-4 py-2 border border-white text-white '>{itemNumber}</p>
                  <button className='px-4 py-2 border border-white text-white ' onClick={()=>handleSub(item)}>-</button>

                  {
                    wished ? 
                      <button>
                        <AiFillHeart className='text-5xl ml-4 text-red-400 cursor-pointer'/>
                      </button> 
                           :
                        <button onClick={()=>handleWish(item)}>
                        <AiOutlineHeart className='text-5xl ml-4 text-red-400 cursor-pointer'/>
                        </button> 
                  }
              </div>
              <div className='mt-4 font-bold'>
                <button className='px-8 py-4 border border-white text-white hover:bg-white hover:text-black font-mono' onClick={()=>handleClick(item)} >Add to Cart</button>
                <button className='px-8 py-4 border font-mono text-black bg-white ml-2 hover:border hover:border-white hover:text-white hover:bg-black' onClick={()=>handleBuy(item)}>Buy Now</button>
              </div>
            </div>
         </div>
      </div>
      )
    })
   }
    
    </>

  )
}

export default ProductDescription