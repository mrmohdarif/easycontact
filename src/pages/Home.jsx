import React from 'react'
import logo from '../pages/logo.png'
import {AiOutlineHeart} from 'react-icons/ai'
import './home.css'
import { useNavigate } from 'react-router-dom'
function Home() {
    const Navigate=useNavigate()
    return (
        <div >
            <div className='home'>
            <div className="home_left">
                <h1>Effortlessly Manage Your Contacts with EasyContact</h1>
                <h2>Your Contacts, Your Way.</h2>
                 <div className='home_text'>
                 Welcome to EasyContatc, the ultimate solution for managing your contacts efficiently. Say goodbye to messy spreadsheets and lost business cards. With EasyContact, you can effortlessly organize and stay connected with your contacts
                    <br />
                    <button className='try_btn' onClick={()=> Navigate('/login')}>Try It Now</button>
                 </div>
            </div>
            <div className="home_right">
               <img src={logo} alt="img"/>
            </div>
            </div>
            
            <footer>
                <div>
             Develop By <AiOutlineHeart className='home_heart'/> Mohd Arif 
                </div>
            </footer>
        </div>
    )
}

export default Home