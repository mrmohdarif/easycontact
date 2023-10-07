import React, { useEffect, useState } from 'react'
import logo from '../pages/logo.png'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import '../pages/header.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Header() {
  const [user,setUser]=useState()
  const navigate=useNavigate()
  const handlelogo=()=>{
    navigate('/')
  }

  const token=localStorage.getItem('token')
    // console.log(token)
  useEffect(()=>{
    tokenFun()
    // console.log("useEffect")
  },[token])
  const tokenFun=()=>{
    // console.log("useEffect call")
  
    axios.post("https://contacteasy.onrender.com/api/profile",{token:token}).then((res)=>{
      // console.log(res)
      const {payload,username}=res.data
        const firstName=username.split(" ")[0].toUpperCase()
        // console.log(firstName)
      // console.log(payload,username)
      setUser(firstName)

   }).catch((err)=>{
     console.log(err);
   })
  }
  const handleLogout=()=>{
    axios.get("https://contacteasy.onrender.com/api/logout").then((res)=>{
      // console.log(res)
      const token=localStorage.removeItem('token')
      //  console.log(token)
       if(token==undefined)
       {
        navigate('/login')
        toast("Logout Sucessfully !");
        window.location.reload();
       }
    
    }).catch((error)=>{
      console.log(error)
    })
   

  }

  return (
<section>
    <div className="header">
        <div className="logo" onClick={handlelogo}>
           <img  src={logo} alt='logo_icon'/>    
        </div>
        <div className="lgin_register">
         {
           !user && <>
           <Link to={'/login'}><button className='btn'>Login</button></Link>
           <Link to={'/register'}><button className='btn'>Register</button></Link>
           </>
         }
        {
          user && <>
          <span onClick={()=>navigate('/contact')}>Hi,{user}</span>
         <button className='btn' onClick={handleLogout}>Logout</button>
         <ToastContainer />
        </>
}
        </div>
    </div>
</section>
  )
}

export default Header