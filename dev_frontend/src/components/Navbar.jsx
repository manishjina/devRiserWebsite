'use client'

import Image from "next/image";
import React, { useRef, useState } from "react";
import "styles/navbar.css";
import {Button} from "../utils/custom"
import DevriserLogo from "../assets/navbar/light/Home.png"
import Service from "../assets/navbar/light/service.png"
import Light from "../assets/navbar/light/light.png"
import Contact from "../assets/navbar/light/Contact.png"
import Blog from "../assets/navbar/light/Blog.png"
import Solution from '../assets/navbar/light/Solutions.png'
import About from '../assets/navbar/light/About.png'

const Navbar = () => {
  const [showSidebar,setShowSidebar]=useState(false);
const ref=useRef()
console.log(ref)
  return (
    <>
    <div>
      <nav className="navbar">
        <div className="navbar-child1">
          <div className="navbar-child1-subchild" ref={ref} id='globalLogo' style={{marginBottom:'20px'}}>
          <Image src={DevriserLogo}/>
          
          </div>
          <div className="navbar-child1-subchild" ref={ref} style={{backgroundColor:showSidebar?'gray':''}} onClick={()=>setShowSidebar((prev)=>!prev)}>
          <Image className="navbar-child1-subchild-img" src={Service}/>
            <p className="navbar-child1-subchild-text">Services</p>
          </div>
          <div className="navbar-child1-subchild" ref={ref}>
          <Image  className="navbar-child1-subchild-img" src={Solution}/>
            <p  className="navbar-child1-subchild-text">Solutions</p>
          </div>
          <div  className="navbar-child1-subchild" ref={ref}>
          <Image  className="navbar-child1-subchild-img" src={Blog}/>
            <p  className="navbar-child1-subchild-text">Blog</p>
          </div>
          <div className="navbar-child1-subchild" ref={ref}>
          <Image  className="navbar-child1-subchild-img" src={Contact}/>
            <p  className="navbar-child1-subchild-text">Contact</p>
          </div>
          <div className="navbar-child1-subchild" ref={ref}>
          <Image  className="navbar-child1-subchild-img" src={About}/>
            <p  className="navbar-child1-subchild-text">About us</p>
          </div>
        </div>
        <div className="navbar-child2" >
         <div>
           <Image  className="navbar-child1-subchild-img" src={Light}/>
           </div>
        <div>
          <Button  className="navbar-child2-subchild2" ref={ref}>
            Eng
          </Button>
          </div>
          {/* <div className="nav-item hamburger">H</div> */}
        </div>
      </nav>
      <nav className={showSidebar?"navbar2-show":"navbar2-hide"}>

        </nav>

      </div>
    </>
  );
};

export default Navbar;
