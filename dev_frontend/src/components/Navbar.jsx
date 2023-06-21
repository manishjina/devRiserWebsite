'use client'

import Image from "next/image";
import React from "react";
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
  return (
    <>
      <nav className="navbar">
        <div className="navbar-child1">
          <div className="navbar-child1-subchild" style={{marginBottom:'20px'}}>
          <Image src={DevriserLogo}/>
          
          </div>
          <div className="navbar-child1-subchild">
          <Image src={Service}/>
            <p>Service</p>
          </div>
          <div className="navbar-child1-subchild">
          <Image src={Solution}/>
            <p>Solution</p>
          </div>
          <div className="navbar-child1-subchild">
          <Image src={Blog}/>
            <p>Blog</p>
          </div>
          <div className="navbar-child1-subchild">
          <Image src={About}/>
            <p>About us</p>
          </div>
          <div className="navbar-child1-subchild">
          <Image src={Contact}/>
            <p>Contact us</p>
          </div>
         
        </div>
        <div className="navbar-child2" >
         <div>
           <Image src={Light}/>
           </div>
        <div>
          <Button  className="navbar-child2-subchild2">
            Eng
          </Button>
          </div>
          {/* <div className="nav-item hamburger">H</div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
