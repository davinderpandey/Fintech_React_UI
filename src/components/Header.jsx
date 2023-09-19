import React, { useState, useEffect } from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Logout from './Logout';
import logo from '../assets/logo.png'

function Header() {
 const [toggle,setToggle] = useState(false);
 const [userDetails, setUser] = useState({});

 useEffect(() => {
   const userDetails = JSON.parse(localStorage.getItem("user"));
   if (userDetails) {
    setUser(userDetails);
   }
 }, []);

  return (
    <div className="bg-[#2699fb] p-4"> 
      <div className="max-w-[1240px] py-[10px] items-center  mx-auto flex justify-between">
        <div className='sm:w-full sm:max-w-md'> <img
          className='h-[70px] w-[280px] rounded-2xl'
          src={logo}
          alt='Workflow'
        />
        </div>
        {
         toggle ?
         <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
         :
         <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
        }
        
        
        <ul className="hidden md:flex text-white gap-10">
        <Link to="/home"style={{ textDecoration: 'none' }}> <li>Home</li> </Link>
        <Link to="/checkcredit"style={{ textDecoration: 'none' }}> <li>Check Credit Worthiness</li> </Link>
        <Link to="/about"style={{ textDecoration: 'none' }}> <li>About</li> </Link>
        <Link to="/resources"style={{ textDecoration: 'none' }}> <li>Users</li> </Link>
        </ul>
        <ul className="hidden md:flex text-white gap-10">
        {
          !userDetails.firstName ?
          <>
          <Link to={"/login"} style={{ textDecoration: 'none' }}> <li className='p-5'>Login</li> </Link>
          <Link to={"/register"} style={{ textDecoration: 'none' }}> <li className='p-5'>Register</li> </Link>
          </>
           :
           <>
           <Logout/>
           {userDetails.firstName}
           </>
         }
         </ul>
        

        {/* Responsive Menu */}
        <ul className={` duration-500 md:hidden w-full h-screen text-white fixed bg-black top-[88px]
        ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
         <Link to="/"style={{ textDecoration: 'none' }}> <li className='p-5'>Homes</li> </Link>
         <Link to="/checkcredit"style={{ textDecoration: 'none' }}> <li className='p-5'>Check Credit</li> </Link>
         <Link to="/about"style={{ textDecoration: 'none' }}> <li className='p-5'>About</li> </Link>
         <Link to="/resources"style={{ textDecoration: 'none' }}> <li className='p-5'>Resources</li> </Link>
         <Link to="/contact"style={{ textDecoration: 'none' }}> <li className='p-5'>Contact</li> </Link>
         {
          !userDetails.firstName ?
          <>
          <Link to={"/login"} style={{ textDecoration: 'none' }}> <li className='p-5'>Login</li> </Link>
          <Link to={"/register"} style={{ textDecoration: 'none' }}> <li className='p-5'>Register</li> </Link>
          </>
           :
           <>
          <Logout/>
           </>
         }
         
        </ul>
      </div>
    </div>
  )
}
export default Header