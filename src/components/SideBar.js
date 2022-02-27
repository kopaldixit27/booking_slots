import React from 'react'
import Logo from '../images/mentorPlus_logo.jpg'
import { Link } from 'react-router-dom'
import '../sideBar.css'
import {AiFillHome} from 'react-icons/ai'
import {BsFillPersonFill, BsFillInfoCircleFill} from 'react-icons/bs'
import {AiFillPhone} from 'react-icons/ai'
import {RiSettings5Fill} from 'react-icons/ri'

const SideBar = () => {
  return (
    <div className='sideContainer'> 
        <div className='logo'>
            <img src={Logo} alt="logo Mentor Plus" />
        </div>
        <div className='pageLinks'>
            <Link to="/" ><button className='homebtn'><AiFillHome />     Home</button></Link>
            <Link to="/profile"><button className='profilebtn'><BsFillPersonFill />  Profile</button></Link>
            <Link to="/about"><button className='randombtn'><BsFillInfoCircleFill />   About</button></Link>
            <Link to="/contact"><button className='randombtn'><AiFillPhone />   Contact</button></Link>
            <Link to="/settings"><button className='randombtn'><RiSettings5Fill />   Settings</button></Link>
            
        </div>
    </div>
  )
}

export default SideBar