"use client";

import Image from "next/image";
import React, { useState } from "react";
import "styles/navbar.css";
import { Button, Box } from "../utils/custom";
import DevriserLogo from "../assets/navbar/light/Home.png";
import Service from "../assets/navbar/light/service.png";
import Light from "../assets/navbar/light/light.png";
import Contact from "../assets/navbar/light/contactUs.png";
import Blog from "../assets/navbar/light/Blogs.png";
import Solution from "../assets/navbar/light/Solutions.png";
import About from "../assets/navbar/light/AboutUs.png";
import { Typography } from "@mui/material";
import usa from "../assets/navbar/FlagImg/usaflagimg.png";
import china from "../assets/navbar/FlagImg/chinaflagimg.png";
import france from "../assets/navbar/FlagImg/franceflagimg.png";
import arabic from "../assets/navbar/FlagImg/arabic.png";

import { useRouter } from 'next/navigation'
import Link from "next/link";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [sideBarContent, setSideBarContent] = useState([]);
  const [hover, setBgHover] = useState("");
  const [languageTag, setLanguageTag] = useState(false);
  const [navigatePage,setNavigatePage]=useState('')

  const navArr = [
    { id: 0, name: "", icon: DevriserLogo, content: [] },
    {
      id: 1,
      name: "Services",
      icon: Service,
      content: [
        {id:9,routeName:"WebDevlopment",routePath:"/pages/webdevlopment"},
        {id:10,routeName:"Mobile Devloment",routePath:"/pages/mobiledevlopment"},
        {id:11,routeName:"UI/UX Services",routePath:"/pages/uiux"},
        {id:12,routeName:"CMS Services",routePath:"/pages/cms"},

        {id:13,routeName:"Managed Services",routePath:"/pages/"},
        {id:14,routeName:"Enterprise Solution",routePath:"/pages/enterprisesolution"},
      ],
    },
    { id: 2, name: "Solutions", icon: Solution, content: [] },
    { id: 3, name: "Blog", icon: Blog, content: [] },
    { id: 4, name: "Contact", icon: Contact, content: [] },
    { id: 5, name: "About Us", icon: About, content: [] },
  ];

  const handleNavbarClick = (elm) => {
    setLanguageTag(false);
    setBgHover(elm.id);
    if (elm.id !== 0) {
      setShowSidebar(true);
    }
    setSideBarContent(elm.content);
  };
  const languageFlagArr = [
    {
      id: 3,
      flagImg: usa,
      country: "English",
    },
    {
      id: 1,
      flagImg: france,
      country: "Français",
    },
    {
      id: 2,
      flagImg: china,
      country: "中文",
    },
   
    {
      id:4,
      flagImg:arabic,
      country:'العربية'
    }
  ];
  const handelLanguageTag = () => {
    setLanguageTag(true);
  };


  return (
    <>
      <div className="main-navbar-container" >
        <nav className="navbar">
          <div className="navbar-child1">
            {navArr.map((elm) => {
              return (
                <div
                  className="navbar-child1-subchild"
                  onClick={() => handleNavbarClick(elm)}
                  id={elm.class}
                  key={elm.id}
                  style={{
                    background:
                      elm.id === hover && hover !== 0
                        ? "rgba(255, 255, 255, 0.2)"
                        : "",
                  }}
                >
                  <Image
                    className="navbar-child1-subchild-img"
                    src={elm.icon}
                  />
                  <p className="navbar-child1-subchild-text">{elm.name}</p>
                </div>
              );
            })}
          </div>
          <div className="navbar-child2">
            <div>
              <Image className="navbar-child1-subchild-img" src={Light} />
            </div>
            <div onClick={() => setShowSidebar(true)}>
              <Button
                className="navbar-child2-subchild2"
                onClick={handelLanguageTag}
              >
                Eng
              </Button>
            </div>
          </div>
        </nav>
        <nav className={showSidebar ? "navbar2-show" : "navbar2-hide"}>
          {!languageTag ? (
            <div className="mainContainer-navbar2-show">
              {sideBarContent.map((elm, i) => {
                return (
                  <div key={i}   className="navbar2-show-content">
                   <Link  href={elm.routePath}  >{elm.routeName}</Link>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="mainContainer-navbar2-show-language">
            
              {languageFlagArr.map((elm) => {
                return (
                  <div
                    key={elm.id}
                    className="navbar2-show-content-language"
                    
                  >
                    <Image src={elm.flagImg} />
                    <Typography>{elm.country}</Typography>
                  </div>
                );
              })}
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
