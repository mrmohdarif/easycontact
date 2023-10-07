import React, { useState,useEffect } from 'react'
import './login.css'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {AiOutlineHeart} from 'react-icons/ai'
function Login() {
  const navigate=useNavigate()
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const handleemail=(e)=>{
    setemail(e.target.value)
  }
  const handlepassword=(e)=>{
    setpassword(e.target.value)
  }
  const data={
    email:email,
    password:password
  }
  const token=localStorage.getItem('token')
  console.log("logn",token);
  const hangle_login=(e)=>{
   e.preventDefault()
    axios.post('https://contacteasy.onrender.com/login',data).then((res)=>{
     console.log(res.data)
     localStorage.setItem("token",res.data)
     navigate('/contact',)
    }).catch((error)=>{
      console.log("there are some error",error)
    })
    setemail("")
    setpassword("")
  }
 
  return (
    <main>
      <div className="login">
        <div className="image_login">
        Secure and private data storage: We prioritize the security and privacy of your data. Rest assured that your contacts are stored securely, and your information remains private.
        </div>
        <div>
        <form className='form'>
        <label htmlFor="email">Email</label>
        <input type="email" name="" id="email" placeholder='Enter email'value={email} onChange={handleemail}/>
         <br/>
        <label htmlFor="password">Password</label>
        <input type="password" name="" id="password" placeholder='Enter password' value={password} onChange={handlepassword}/>
        <br/>
        <button className='button' onClick={hangle_login}>Login</button>
        <p onClick={()=>navigate('/register')} className='account_created'>I have't accout</p>
       </form>
       
        </div>
      
      </div>
      <footer>
                <div>
             Develop By <AiOutlineHeart className='home_heart'/> Mohd Arif 
                </div>
            </footer>
    </main>
  )
}

export default Login