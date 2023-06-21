"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import "styles/navbar.css";
import { Button } from "../utils/custom";
import DevriserLogo from "../assets/navbar/light/Home.png";
import Service from "../assets/navbar/light/service.png";
import Light from "../assets/navbar/light/light.png";
import Contact from "../assets/navbar/light/contactUs.png";
import Blog from "../assets/navbar/light/Blogs.png";
import Solution from "../assets/navbar/light/Solutions.png";
import About from "../assets/navbar/light/AboutUs.png";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const ref = useRef([]);

  const handelShowContent = (i) => {
    console.log("hello", i);
    setShowSidebar((prev) => !prev);
  };

  const navArr = [
    { id: 1, name: "services", icon: Service, content: "" },
    { id: 2, name: "solutions",icon:Solution,content:"" },
    {id:3,name:"Blog", icon:Blog}
  ];

  return (
    <>
      <div>
        <nav className="navbar">
          <div className="navbar-child1">
            <div
              className="navbar-child1-subchild"
              ref={ref}
              id="globalLogo"
              style={{ marginBottom: "20px" }}
            >
              <Image src={DevriserLogo} />
            </div>
            <div
              className="navbar-child1-subchild"
              style={{ backgroundColor: showSidebar ? "gray" : "" }}
              onClick={handelShowContent}
            >
              <Image className="navbar-child1-subchild-img" src={Service} />
              <p className="navbar-child1-subchild-text">Services</p>
            </div>
            <div
              className="navbar-child1-subchild"
              onClick={handelShowContent}
              // ref={(element) => (ref.current[0] = element)}
            >
              <Image className="navbar-child1-subchild-img" src={Solution} />
              <p className="navbar-child1-subchild-text">Solutions</p>
            </div>
            <div
              className="navbar-child1-subchild"
              ref={ref}
              onClick={handelShowContent}
            >
              <Image className="navbar-child1-subchild-img" src={Blog} />
              <p className="navbar-child1-subchild-text">Blog</p>
            </div>
            <div
              className="navbar-child1-subchild"
              ref={ref}
              onClick={handelShowContent}
            >
              <Image className="navbar-child1-subchild-img" src={Contact} />
              <p className="navbar-child1-subchild-text">Contact</p>
            </div>
            <div
              className="navbar-child1-subchild"
              ref={ref}
              onClick={handelShowContent}
            >
              <Image className="navbar-child1-subchild-img" src={About} />
              <p className="navbar-child1-subchild-text">About us</p>
            </div>
          </div>
          <div className="navbar-child2">
            <div>
              <Image className="navbar-child1-subchild-img" src={Light} />
            </div>
            <div onClick={handelShowContent}>
              <Button className="navbar-child2-subchild2" ref={ref}>
                Eng
              </Button>
            </div>
            {/* <div className="nav-item hamburger">H</div> */}
          </div>
        </nav>
        <nav className={showSidebar ? "navbar2-show" : "navbar2-hide"}></nav>
      </div>
    </>
  );
};

export default Navbar;
