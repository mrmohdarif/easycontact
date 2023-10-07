import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiTwotoneMail } from 'react-icons/ai'
import { AiOutlinePhone } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import axios from 'axios'
import { MdPermContactCalendar } from 'react-icons/md'
import './contact.css'
import { useNavigate, Navigate } from 'react-router-dom';
function Contect() {
    let [count, setcount] = useState(0)
    console.log(count)
    const navigate = useNavigate()
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [number, setnumber] = useState('')
    const [personal, setpersonal] = useState('')
    const [professional, setprofessional] = useState('')
    const [contact, setContact] = useState([])
    const handlename = (e) => {
        setname(e.target.value.toUpperCase())
        console.log(name);
    }

    const handleemail = (e) => {
        setemail(e.target.value)
        console.log(email);
    }
    const handlenumber = (e) => {
        setnumber(e.target.value)
        console.log(number);
    }
    const handlepersonal = (e) => {
        setpersonal(e.target.value)
        console.log(personal);
        setprofessional(e.target.value)
        console.log(professional)
    }
    const handleprofessional = (e) => {
        setprofessional(e.target.value)
        console.log(professional);
    }
    const token = localStorage.getItem("token")
    const data = {
        name: name,
        email: email,
        number: number,
        personal: personal,
        professional: professional,
        token: token
    }
    const handlesubmit = (e) => {
        e.preventDefault()


        axios.post("https://contacteasy.onrender.com/contact", data).then((res) => {

            if (res.statusText === 'OK' && res.status == 200) {
                alert("Conctact Add Sucessfully")
                toast("Conctact Add Sucessfully !");
                setcount(++count)
                

            }

        }).catch((error) => {
            console.log("something went wrong", error);
        })
              
                
    }
    const HandleDelete = (id, e) => {
        e.preventDefault()
        console.log(id)

        axios.delete(`https://contacteasy.onrender.com/api/deleteContact/${id}`).then((res) => {
            console.log(res)
            if (res.statusText == 'OK' && res.status === 200) {
                alert("Contact deleted sucessfully")
                toast('Contact deleted sucessfully')
                setcount(--count)
            }
        }).catch((err) => {
            alert("something went wrong", err)
        })
    }
    const HandleEdit = (id, e) => {
        e.preventDefault()
        axios.put(`https://contacteasy.onrender.com/api/updateContact/${id}`).then(() => {

        }).catch((error) => {
            alert("This feature is under development")
        })
    }
    useEffect(() => {
       
        const token = localStorage.getItem("token")
        axios.post('https://contacteasy.onrender.com/api/fetchAllData', { "token": token }).then((res) => {
            setContact(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [count])
    return (
        <main>
            <div className="addtocontact">
                <div className='left'>
                    <h3 >Add To Contact</h3>
                    <form>
                        <label htmlFor="name">Name:-</label>
                        <br />
                        <input type='text' placeholder='Enter name' id='name' className='input input1' onChange={handlename} />
                        <br />
                        <label htmlFor="email">Email:-</label>
                        <br />
                        <input type="email" name="" id="email" placeholder='Enter Email' className='input' onChange={handleemail} />
                        <br />
                        <label htmlFor="phone">Phone:-</label>
                        <br />
                        <input type="tel" name="" id="phone" placeholder='Enter Contact Number' className='input' onChange={handlenumber} />
                        <br />

                        <label htmlFor="">Contact Type:-</label>
                        <br />
                        <label htmlFor="per">Personal</label>
                        <input type="radio" name="contactType" id="per" value="Personal" onChange={handlepersonal} />
                        <br />
                        <label htmlFor="pro">Professional</label>
                        <input type="radio" name="contactType" id="pro" value="Professional" onChange={handlepersonal} />
                        <br />
                        <div className='subreset'>
                        <button className='submit_btn' onClick={handlesubmit}>Add To Contact</button>
                        
                        <input type="reset" value="Reset" className='submit_btn'/>
                        </div>
                        
                    </form>
                    <h4 >* See your all contact</h4>
                </div>

                <div className="right">
                    <p className='contact_heading'>New added contacts</p>
                    {contact.map((value, index, array) => {

                        return <div className='right_data' key={value.index}>
                            <div className='profile_type'>
                                <p>{value.name}</p>
                                <div className='personal'><p><AiOutlineHeart className='heart' /></p><p className='personal1'>{value.personal}</p></div>
                            </div>
                            <div>
                                <div className='profile'><p><AiTwotoneMail className='business' /></p><p>{value.email}</p></div>
                                <div className='contact'><p><AiOutlinePhone className='contact_icon' /></p><p>{value.number}</p></div>
                                <button className='btn_edit' onClick={(e) => HandleEdit(`${value._id}`, e)}>Edit</button>
                                <button className='btn_delete' onClick={(e) => HandleDelete(`${value._id}`, e)}>Delete</button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <footer>
                <div>
                    Develop By <AiOutlineHeart className='home_heart' /> Mohd Arif
                </div>
            </footer>
        </main>
    )
}

export default Contect