"use client";
import React, { useState } from "react";
import "./cms.css";
import { Button,Box, Grid } from "../../../utils/custom";
export default function Cms() {
  return (
    <div className="main-container">
      <div className="cms-container">
        <div className="cms-container-box1">
          <div className="cms-container-box1-child1">
            <h2 className="cms-container-box1-child1-text1">
              Advanced{" "}
              <span className="text-color">CMS Development Services</span> For
              Maximizing Your Website's Potential
            </h2>
            <p className="cms-container-box1-child1-text2">
              {" "}
              We optimize the true power of your business with our advanced CMS
              development services. Our CMS team handles every aspect of your
              website's creation, ensuring a seamless and dynamic online
              presence that maximizes your website's potential
            </p>
          </div>
          <div className="cms-container-box1-child2"></div>
        </div>
        <div>
          <Button className="cms-container-box1-btn">Let's Begin</Button>
        </div>
      </div>

      <div className="cms-container-box2">
        <div>
          <h2 className="cms-container-box2-text1">
            Elevate Your Website Creation With Our Expert CMS Development
            Services
          </h2>
        </div>
        <p className="cms-container-box2-text2">
          Experience the power of website creation with our comprehensive CMS
          Development Services. Leveraging industry-leading platforms such as
          WordPress, Wix, Drupal, Webflow, and Shopify, we provide tailored
          solutions that cater to your unique needs. Our expertise in custom
          designs and responsive layouts ensures seamless user experiences while
          effortless website management and updates empower you to stay in
          control. Captivate your audience, achieve tangible results, and embark
          on a transformative digital journey with our exceptional CMS web
          development services.
        </p>
      </div>

      <div className="cms-container-box3">
        <div>
          <h2>Time-Efficient</h2>
          <p>
            Our team specializes in creating user-friendly CMS websites that are
            easy to manage. We harness the power of CMS platforms to accelerate
            the website creation process, allowing you to have a fully
            functional website in significantly less time compared to
            traditional code-based methods
          </p>
        </div>
        <div>
          <h2> Cost-Effective</h2>
          <p>
            Unlock business growth without compromising quality with our
            cost-conscious CMS web development services. Enjoy a high-quality,
            feature-rich website that fits your budget, delivering financial
            advantages for your online presence. Experience streamlined
            development and maximize your business's potential
          </p>
        </div>
        <div>
          <h2> Responsive Design</h2>
          <p>
            adapt to all devices, ensuring exceptional user experiences. Through
            responsive design, we optimize layouts and functionality for optimal
            viewing and interaction. Experience effortless compatibility across
            screens, from big screens to laptops and from mobiles to tablets{" "}
          </p>
        </div>
        <div>
          <h2>Easy to manage</h2>
          <p>
            Simplify website management with our user-friendly interfaces. Our
            expertly crafted websites eliminate complexities, empowering you to
            effortlessly update and maintain your online presence. Experience
            seamless control and keep your website up-to-date with ease
          </p>
        </div>
      </div>
      <div className="cms-container-box4">
        <h2 className="cms-container-box4-text1">
          Exquisite Precision Crafted By Our CMS Experts
        </h2>
        <p className="cms-container-box4-text2">
          {" "}
          Experience the art of website creation with our team of CMS experts
          who specialize in delivering customized websites that precisely align
          with your unique requirements. Leveraging a range of CMS platforms, we
          seamlessly integrate cutting-edge technology to craft dynamic,
          user-friendly websites that fascinate your audience. Each website is
          meticulously tailored to perfection, ensuring a seamless and
          distinctive online experience that sets you apart from the
          competition.
        </p>
      </div>

      <div className="cms-container-box5">
        <h2 className="cms-container-box5-text">Meet Our CMS Lineups</h2>
        <div className="cms-container-box5-boxbtn">
          <Button>WordPress</Button>
          <Button>Drupal</Button>
          <Button>Wix</Button>
          <Button>WebFlow</Button>
          <Button>Shopify</Button>
        </div>
        <div className="cms-container-box5-card">
          <img src="sdfd" alt="logo-fault" />
          <p>
            WordPress is a renowned CMS platform known for its versatility and
            user-friendly interface. At DevRiser, we use vast plugin libraries
            of WordPress to customize various websites for you, whether it is
            blogs, business sites, e-commerce stores, portfolios, or forums. We
            use responsive designs to enhance your user engagement and
            accessibility across various devices
          </p>
        </div>
      </div>

      <div className="cms-container-box6">
        <div className="cms-container-box6-child1">
          <h2 >Types Of Websites We Create With CMS</h2>
        </div>
        <div className="cms-container-box6-child2">
        <Box sx={{ width: '100%', margin: 'auto', border: '1px solid red', padding: '10px' }}>
    <Grid container spacing={2} justifyContent="center" >
      <Grid item xs={6} lg={4}>
        <Box sx={{ border: '1px solid white', padding: '10px',height:"80px" }}>1</Box>
      </Grid>
      <Grid item xs={6} lg={4}>
        <Box sx={{ border: '1px solid white', padding: '10px',height:"80px" }}>2</Box>
      </Grid>
      <Grid item xs={4} lg={4}>
        <Box sx={{ border: '1px solid white', padding: '10px',height:"80px" }}>3</Box>
      </Grid>
      <Grid item xs={4} lg={4}>
        <Box sx={{ border: '1px solid white', padding: '10px',height:"80px" }}>4</Box>
      </Grid>
      <Grid item xs={4} lg={4}>
        <Box sx={{ border: '1px solid white', padding: '10px',height:"80px" }}>5</Box>
      </Grid>
      <Grid item xs={6} lg={4}>
        <Box sx={{ border: '1px solid white', padding: '10px',height:"80px" }}>6</Box>
      </Grid>
      <Grid item xs={6} lg={4}>
        <Box sx={{ border: '1px solid white', padding: '10px',height:"80px" }}>7</Box>
      </Grid>
      <Grid item xs={6} lg={4}>
        <Box sx={{ border: '1px solid white', padding: '10px',height:"80px" }}>8</Box>
      </Grid>
    </Grid>
  </Box>
        </div>
      </div>
    </div>
  );
}
