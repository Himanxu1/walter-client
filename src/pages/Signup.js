import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import showToast from '../utils/toast/showToast';

const backend_url = process.env.REACT_APP_BACKEND_URI;


const Signup = () => {

    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    const handleSignup =  () =>{
         axios.post(`${backend_url}api/auth/signup`,{username,email,password}).then((res)=>{
            showToast('🦄 Sign Up success!')
            navigate("/login")
         }).catch((err)=>{
            console.log(err)
         })
      
    }

  return (
    <div className='flex justify-center bg-black w-full h-[87.9vh] pt-20'>
        <div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}  />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password"  autoComplete='current-password' placeholder="******************" onChange={(e)=>setPassword(e.target.value)} />
    
    </div>
    <div >
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSignup}>
        Sign Up
      </button>
      
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
 Already have account ? <Link className="text-blue-500" to='/login' >Sign In</Link>
  </p>
</div>
 </div>
  )
}

export default Signup