import {
  AboutUs,
  Blogs,
  ContactUs,
  Light,
  Service,
  Solutions,
} from "assets/navbar";
import React from "react";
import "styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navmenu">
          <li className="nav-item nav-item1">
            <AboutUs />
          </li>
          <li className="nav-item nav-item2">
            <Service />
          </li>
          <li className="nav-item nav-item3">
            <Solutions />
          </li>
          <li className="nav-item nav-item4">
            <Blogs />
          </li>
          <li className="nav-item nav-item5">
            <AboutUs />
          </li>
          <li className="nav-item nav-item6">
            <ContactUs />
          </li>
          <li className="nav-item nav-item7">
            <Light />
          </li>
          <li className="nav-item nav-item8">
            <Light />
          </li>
          <li className="nav-item hamburger">H</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
