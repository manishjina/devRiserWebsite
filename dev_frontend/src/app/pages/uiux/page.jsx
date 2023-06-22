"use client";

import React, { useEffect } from "react";
import "./uiux.css";
import Image from "next/image";
import processLine from "../../../assets/illustration_ux/process line.png"
export default function Uiux() {
  return <div className="main-container">
    <div className="ux-container">
    
    <div className="ux-container-box1">
     <h2 className="ux-container-box1-child1">Our Process</h2>
     <div className="ux-container-box1-child2">
           <div  className="ux-container-box1-child2-subchild1">
            <div><h2>Research and Discovery</h2></div>
            <div><p>We then delve deep into user analysis to identify user needs, behaviors, and pain points. We create user personas to represent different user types and tailor the design to meet their specific requirements</p></div>
            <div><h2>Information Architecture</h2></div>
            <div><p>We create low-fidelity wireframes and interactive prototypes to visualize the layout, hierarchy, and functionality of the interface. This helps in validating the design concept and gathering feedback early in the process</p></div>
            <div><h2>Visual Design</h2></div>
            <div><p>We focus on creating intuitive and seamless interactions for users. Our interactive prototypes allow us to refine and test various interactions, ensuring a delightful user experience at each touchpoint</p></div>
            <div><h2>Usability Testing</h2></div>
           </div>
           <div  className="ux-container-box1-child2-subchild2"><Image src={processLine}/></div>
           <div  className="ux-container-box1-child2-subchild3">
            <div><p>We begin by conducting thorough research to understand your business goals, target audience, and industry trends. This research forms the foundation for our design decisions</p></div>
            <div><h2>User Analysis and Personas</h2></div>
            <div><p>Then we focus on organizing and structuring the screen and navigation elements to ensure a logical flow and easy access to information. This step involves creating sitemaps and user flows to optimize user interactions</p></div>
            <div><h2>Wireframing and Prototyping</h2></div>
            <div><p>Our team crafts visually appealing designs, incorporating your branding elements, color schemes, and typography. We pay attention to creating a consistent and visually engaging interface that resonates with your target audience</p></div>
            <div><h2>Interactive Design</h2></div>
            <div><p>We conduct usability testing sessions with real users to validate the design choices and identify any usability issues. This iterative process helps us refine the design and make data-driven improvements</p></div>
           </div>

     </div>

    </div>

    </div>
  </div>;
}
