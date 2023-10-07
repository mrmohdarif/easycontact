import React, { useEffect, useState } from 'react'
import './register.css'
import { useNavigate } from 'react-router-dom'
import {AiOutlineHeart} from 'react-icons/ai'
import axios from 'axios'
function Register() {
  const Navigate=useNavigate()
    const [name,setName]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [phone,setPhone]=useState('')
const handleName=(e)=>{
  setName(e.target.value)
  console.log(name);
}
const handleemail=(e)=>{
setemail(e.target.value)
console.log(email);
}
const handlepassword=(e)=>{
setpassword(e.target.value)
console.log(password);
}
const handlePhone=(e)=>{
setPhone(e.target.value)
}
const data={
  name:name,
  email:email,
  password:password,
  phone:phone
}

const handleRegister=(e)=>{

  e.preventDefault()

    axios.post("https://contacteasy.onrender.com/register",data).then((res)=>{
    // console.log(res.data)

    if(res.status===200)
    {
      alert("Register sucessfully")
      Navigate('/login')
    }
  
   
    }).catch((err)=>{
      alert("this credential"+err.config.data+"already register")
      console.log(err.config.data);
    })

}

  return (
    <main>
      <div className="login">
        <div className="securityFeature">
          <ol>
            <li><span>End-to-End Encryption</span>: All contact data is encrypted, ensuring that only authorized users can access it.</li>
            <li><span>Secure Cloud Storage</span>: Contacts are securely stored in the cloud, protected from data loss or unauthorized access.</li>
            <li><span>Regular Data Backups</span>: Assure users that their data is regularly backed up to prevent any loss or accidental deletion.</li>
            <li><span>Two-Factor Authentication</span>: Add an extra layer of security by enabling two-factor authentication for user login</li>
          </ol>
        </div>
       <form className='form'>
        <label htmlFor="name">Name</label>
        <input type="text" name="" id="name" placeholder='Enter name' value={name} onChange={handleName} />
         <br/>
        <label htmlFor="email">Email</label>
        <input type="email" name="" id="email" placeholder='Enter email' value={email} onChange={handleemail} />
        <br/>
        <label htmlFor="password">Password</label>
        <input type="password" name="" id="password" placeholder='Enter password' value={password} onChange={handlepassword} />
        <br/>
        <label htmlFor="phone">Phone number</label>
        <input type="tel" name="" id="phone" placeholder='Enter your phone number' value={phone} onChange={handlePhone} />
       
        <button className='button' onClick={handleRegister}>Register</button>
        <p onClick={()=>Navigate('/login')} className='already'>Already register</p>
       </form>
      </div>
 '
 <footer>
                <div>
             Develop By <AiOutlineHeart className='home_heart'/> Mohd Arif 
                </div>
            </footer>
    </main>
  )
}

export default Register