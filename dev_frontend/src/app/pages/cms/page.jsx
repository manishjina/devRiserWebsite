"use client";
import React, { useState } from "react";
import "./cms.css"
import {Button} from "../../../utils/custom"
export default function Cms() {
  return (
      <>
      <div className="cms-container">
             <div className="cms-container-box1">
                   <div className="cms-container-box1-child1">
                    <h2 className="cms-container-box1-child1-text1">Advanced <span className="text-color">CMS Development Services</span> For Maximizing Your Website's Potential</h2>
                    <p className="cms-container-box1-child1-text2"> We optimize the true power of your business with our advanced CMS development services. Our CMS team handles every aspect of your website's creation, ensuring a seamless and dynamic online presence that maximizes your website's potential</p>
                   </div>
                   <div className="cms-container-box1-child2">

                   </div>
             </div>
             <div>
             <Button  className='cms-container-box1-btn'>Let's Begain</Button>
             </div>
           
      </div>

      <div className="cms-container-box2">
        <div>
        <h2 className="cms-container-box2-text1">Elevate Your Website Creation With Our Expert CMS Development Services</h2>
        <p  className="cms-container-box2-text2">Experience the power of website creation with our comprehensive CMS Development Services. Leveraging industry-leading platforms such as WordPress, Wix, Drupal, Webflow, and Shopify, we provide tailored solutions that cater to your unique needs. Our expertise in custom designs and responsive layouts ensures seamless user experiences while effortless website management and updates empower you to stay in control. Captivate your audience, achieve tangible results, and embark on a transformative digital journey with our exceptional CMS web development services.
         </p>
         </div>
      </div>
    
      </>
 
  );
}

