'use client'

import {
  AboutUs,
  Blogs,
  ContactUs,
  divght,
  Light,
  Service,
  Solutions,
} from "assets/navbar";
import React from "react";
import "styles/navbar.css";
import {Button} from "../utils/custom"
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-child1">
          <div className="navbar-child1-subchild">
            <AboutUs />
          </div>
          <div className="navbar-child1-subchild">
            <Service />
          </div>
          <div className="navbar-child1-subchild">
            <Solutions />
          </div>
          <div className="navbar-child1-subchild">
            <Blogs />
          </div>
          <div className="navbar-child1-subchild">
            <AboutUs />
          </div>
          <div className="navbar-child1-subchild">
            <ContactUs />
          </div>
         
        </div>
        <div className="navbar-child2" >
        <Button className="navbar-child2-subchild1">
            <Light  />
          </Button>
          <Button sx={{textTansformation:"none"}} className="navbar-child2-subchild2">
            Eng
          </Button>
          {/* <div className="nav-item hamburger">H</div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
