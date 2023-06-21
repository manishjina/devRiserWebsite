"use client";

import Image from "next/image";
import React, { useRef, useState } from "react;
import React from "react";


import "styles/navbar.css";
import { Button } from "../utils/custom";

import Home from "assets/navbar/light/Home.png";
import AboutUs from "assets/navbar/light/AboutUs.png";
import ContactUs from "assets/navbar/light/ContactUs.png";
import Service from "assets/navbar/light/Service.png";
import Solutions from "assets/navbar/light/Solutions.png";
import Blogs from "assets/navbar/light/Blogs.png";
import Light from "assets/navbar/light/Light.png";

import Home_D from "assets/navbar/dark/Home.png";
import AboutUs_D from "assets/navbar/dark/AboutUs.png";
import ContactUs_D from "assets/navbar/dark/ContactUs.png";
import Service_D from "assets/navbar/dark/Service.png";
import Solutions_D from "assets/navbar/dark/Solutions.png";
import Blogs_D from "assets/navbar/dark/Blogs.png";
import Dark from "assets/navbar/dark/Dark.png";

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

          <div
            className="navbar-child1-subchild"
            style={{ marginBottom: "20px" }}
          >
            <Image src={Home} />
          </div>
          <div className="navbar-child1-subchild">
            <Image src={Service} />
            <p>Service</p>
          </div>
          <div className="navbar-child1-subchild">
            <Image src={Solutions} />
            <p>Solution</p>
          </div>
          <div className="navbar-child1-subchild">
            <Image src={Blogs} />
            <p>Blog</p>
          </div>
          <div className="navbar-child1-subchild">
            <Image src={AboutUs} />
            <p>About us</p>
          </div>
          <div className="navbar-child1-subchild">
            <Image src={ContactUs} />
            <p>Contact us</p>
          </div>
        </div>

        <div className="navbar-child2">
          <div>
            <Image src={Light} />
          </div>
          <div>
            <Button className="navbar-child2-subchild2">Eng</Button>

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
