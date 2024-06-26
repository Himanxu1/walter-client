import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {BsBookmarkHeartFill} from  'react-icons/bs'
import { removeUser } from '../utils/userSlice'
import showToast from "../utils/toast/showToast";



const Navbar = () => {
  const cartItem = useSelector((store)=>store.cart.items)
  const user = useSelector((store)=>store.user.items)
  const hastoken = localStorage.getItem('token')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () =>{
    dispatch(removeUser())
    showToast('🦄 logged out!')
    localStorage.removeItem('token');
     navigate('/login')
  }

  return (
    <div className='h-10 bg-black text-white h-20 flex items-center justify-between'> 
      <h2 className='ml-20'><Link to='/'>WALTER</Link></h2>
       
      <div className='flex mr-20'>
        {
          hastoken ? <><p className='mr-10 font-mono '><Link to='/wishlist' className='flex items-center hover:text-slate-300'>Wishlist<BsBookmarkHeartFill className='ml-2 text-xl'/></Link></p>
          <p className='mr-10 cursor-pointer font-mono hover:text-slate-300'><Link to='/products'>All Products</Link></p>
         
          <p><Link to='/cart'  className='hover:text-slate-300'>CART(<span className='font-mono text-red-300 '>{cartItem.length}</span>)</Link></p>
          <p className='ml-10 cursor-pointer text-red-400 font-mono hover:text-yellow-300'><a href="https://full-stack-ecom-36jr.vercel.app/" target="blank" >Admin Panel</a></p>
           </> 
          
          :null
          
          
        }
        
        <p className='ml-10'> { hastoken ?  <button onClick={handleLogout}>Logout</button> : <Link to='/login'  className=' hover:text-slate-300' onClick={handleLogout}> LOGIN</Link>} </p>
      </div>
    </div>
  )
}

export default Navbar