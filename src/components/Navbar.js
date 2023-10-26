import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {BsBookmarkHeartFill} from  'react-icons/bs'
import { removeUser } from '../utils/userSlice'



const Navbar = () => {
  const cartItem = useSelector((store)=>store.cart.items)
  const user = useSelector((store)=>store.user.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () =>{

    dispatch(removeUser())
     navigate('/')
  }
  
  return (
    <div className='h-10 bg-black text-white h-20 flex items-center justify-between'> 
      <h2 className='ml-20'><Link to='/'>WALTER</Link></h2>
       
      <div className='flex mr-20'>
        <p className='mr-10 font-mono '><Link to='/wishlist' className='flex items-center hover:text-slate-300'>Wishlist<BsBookmarkHeartFill className='ml-2 text-xl'/></Link></p>
        <p className='mr-10 cursor-pointer font-mono hover:text-slate-300'><Link to='/products'>All Products</Link></p>
        <p><Link to='/cart'  className='hover:text-slate-300'>CART(<span className='font-mono text-red-300 '>{cartItem.length}</span>)</Link></p>
        <p className='ml-10'> { user ?  <button onClick={handleLogout}>Logout</button> : <Link to='/login'  className=' hover:text-slate-300'> LOGIN</Link>} </p>
      </div>
    </div>
  )
}

export default Navbar