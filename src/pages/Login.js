import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify'
import axios  from 'axios'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import showToast from '../utils/toast/showToast';
const backend_url = process.env.REACT_APP_BACKEND_URI;

const Login = () => {

    const dispatch = useDispatch()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    

    const handleSignin = ()=>{
        axios.post(`${backend_url}api/auth/login`,{email,password}).then((res)=>{
            showToast('🦄 login Success!')
           
            localStorage.setItem('token',res.data.token)    
            navigate("/")
            dispatch(addUser(res.data))
         }).catch((err)=>{
            alert('Unauthorized User!')
            navigate("/signup")
            console.log(err)
         })
    }

  return (
    <div className='flex justify-center pt-20 bg-black w-full h-[87.9vh]'>
    <div className="w-full max-w-xs ">
<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
    Email
  </label>
  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
</div>
<div className="mb-6">
  <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
    Password
  </label>
  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"  onChange={(e)=>setPassword(e.target.value)} />
 
</div>
<div >
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSignin}>
    Sign In
  </button>
</div>
</form>
<p className="text-center text-gray-500 text-xs">
New user? <Link className='text-blue-500' to="/signup">Sign Up</Link>
</p>
</div>
</div>
  )
}

export default Login