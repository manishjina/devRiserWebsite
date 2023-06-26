import Image from 'next/image'
import React from 'react'
import "styles/navbar_mobile.css"
import {Button}  from "utils/custom"
import homeBurger from "../assets/illustration/homeBurger.png"
import devLogo from "../assets/navbar/light/home.png"
const Navbar_mobile = () => {
    const handleSignup=()=>{
        console.log("hello")
    }
  return (
    <div>
        <div className='Navbar-res-container'> 
               <div className='Navbar-res-container-child1'>
                <Image className='Navbar-res-container-child1-homeimg' src={homeBurger} alt={"home-burger"}/>
               </div>
               <div className='Navbar-res-container-child1'>
                <Image className='Navbar-res-container-child1-devimg' src={devLogo} alt={"devLogo"}/>
               </div>
               <div className='Navbar-res-container-child1'>
                <Button onClick={handleSignup} className='Navbar-res-container-child1-btn'>
                    Sign Up
                    </Button>
               </div>

        </div>

    </div>
  )
}

export default Navbar_mobile