"use client";
import React, { useState } from "react";
import "./cms.css";

import { Button } from "../../../utils/custom";
import Image from "next/image";
import darkIllustration from "../../../assets/illustration/laptopdarkillustration.png";
import Carousel from "components/Carousel";
import Avatar from "../../../assets/illustration/Avatar.png";
import { ourProcessDataBlack, ourProcessDataWhite } from "./cmsdata";
import Faq from "components/Faq";
import { useGlobalContext } from "app/components/common/store";

export default function Cms() {
  const [contentData, setContent] = useState(ourProcessDataBlack[0].content);
  const [contentImg, setContentImg] = useState(ourProcessDataBlack[0].img);
  const [btnColor, setBtnColour] = useState(0);
  const { showSidebar, setShowSidebar, theme, setTheme } = useGlobalContext();

  const content = [
    "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it",
    "I Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    "I hate the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
  ];

  const photo = [Avatar, Avatar, Avatar];
  const name = ["Kelly Williams", "Melly Williams", "Selly Williams"];
  const desc = [
    "Head of Design, Layers",
    "SubHead of Design, Layers",
    "Master of Design, Layers",
  ];
  const handleSixbtn = (ele, id) => {
    setBtnColour(ele.id);

    setContent(ele.content);
    setContentImg(ele.img);
  };
  const [gradientPositions, setGradientPositions] = useState([
    { x: null, y: null },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);

  const handleMouseMove = (index, event) => {
    const rect = event.target.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const gradientX = (mouseX / rect.width) * 100;
    const gradientY = (mouseY / rect.height) * 100;

    setGradientPositions((prevState) => {
      const updatedPositions = [...prevState];
      updatedPositions[index] = { x: gradientX, y: gradientY };
      return updatedPositions;
    });
  };

  return (
    <div className="container" onClick={() => setShowSidebar(false)}>
      <div className="main-container">
        <div
          className="_hero-section-container"
        
        >
          <div className="_hero-section-container-primary">
            <div className="_hero-section-container-primary-child1">
              <h2 className="_hero-section-container-primary-child1-text1">
                Advanced{" "}
                <span className="text-color">CMS Development Services</span> For
                Maximizing Your Website's Potential
              </h2>
              <p className="_hero-section-container-primary-child1-text2">
                {" "}
                We optimize the true power of your business with our advanced
                CMS development services. Our CMS team handles every aspect of
                your website's creation, ensuring a seamless and dynamic online
                presence that maximizes your website's potential
              </p>
              <div>
                <Button className="_hero-section-container-primary-btn">
                  Let's Begin
                </Button>
              </div>
            </div>
            <div className="_hero-section-container-primary-child2">
              <Image src={darkIllustration} />
            </div>
          </div>
        </div>

        <div className="_secondry-section-container">
          <div>
            <h2 className="_secondry-section-container-text1">
              Elevate Your Website Creation With Our Expert CMS Development
              Services
            </h2>
          </div>
          <p className="_secondry-section-container-text2">
            Experience the power of website creation with our comprehensive CMS
            Development Services. Leveraging industry-leading platforms such as
            WordPress, Wix, Drupal, Webflow, and Shopify, we provide tailored
            solutions that cater to your unique needs. Our expertise in custom
            designs and responsive layouts ensures seamless user experiences
            while effortless website management and updates empower you to stay
            in control. Captivate your audience, achieve tangible results, and
            embark on a transformative digital journey with our exceptional CMS
            web development services.
          </p>
        </div>

        <div className="_grid-four-card">
          <div className="_grid-four-card-child">
            <h2 className="_grid-four-card-child-subchild1">Time-Efficient</h2>
            <p className="_grid-four-card-child-subchild2">
              Our team specializes in creating user-friendly CMS websites that
              are easy to manage. We harness the power of CMS platforms to
              accelerate the website creation process, allowing you to have a
              fully functional website in significantly less time compared to
              traditional code-based methods
            </p>
          </div>
          <div className="_grid-four-card-child">
            <h2 className="_grid-four-card-child-subchild1"> Cost-Effective</h2>
            <p className="_grid-four-card-child-subchild2">
              Unlock business growth without compromising quality with our
              cost-conscious CMS web development services. Enjoy a high-quality,
              feature-rich website that fits your budget, delivering financial
              advantages for your online presence. Experience streamlined
              development and maximize your business's potential
            </p>
          </div>
          <div className="_grid-four-card-child">
            <h2 className="_grid-four-card-child-subchild1">
              {" "}
              Responsive Design
            </h2>
            <p className="_grid-four-card-child-subchild2">
              adapt to all devices, ensuring exceptional user experiences.
              Through responsive design, we optimize layouts and functionality
              for optimal viewing and interaction. Experience effortless
              compatibility across screens, from big screens to laptops and from
              mobiles to tablets{" "}
            </p>
          </div>
          <div className="_grid-four-card-child">
            <h2 className="_grid-four-card-child-subchild1">Easy to manage</h2>
            <p className="_grid-four-card-child-subchild2">
              Simplify website management with our user-friendly interfaces. Our
              expertly crafted websites eliminate complexities, empowering you
              to effortlessly update and maintain your online presence.
              Experience seamless control and keep your website up-to-date with
              ease
            </p>
          </div>
        </div>

        <div className="_primary-long-card">
          <h2 className="_primary-long-card-text1">
            Exquisite Precision Crafted By Our CMS Experts
          </h2>
          <p className="_primary-long-card-text2">
            {" "}
            Experience the art of website creation with our team of CMS experts
            who specialize in delivering customized websites that precisely
            align with your unique requirements. Leveraging a range of CMS
            platforms, we seamlessly integrate cutting-edge technology to craft
            dynamic, user-friendly websites that fascinate your audience. Each
            website is meticulously tailored to perfection, ensuring a seamless
            and distinctive online experience that sets you apart from the
            competition.
          </p>
        </div>

        <div className="cms-container-box5">
          <h2 className="cms-container-box5-text">Meet Our CMS Lineups</h2>
          <div>
            <div className="cms-container-box5-boxbtn">
              {ourProcessDataBlack.map((ele) => {
                return (
                  <Button
                    style={{
                      backgroundColor: btnColor == ele.id ? "#E77BA6" : "",
                      backgroundImage: btnColor == ele.id ? "none" : "",
                    }}
                    className="cms-container-box5-boxbtn-btn"
                    onClick={() => handleSixbtn(ele, ele.id)}
                    key={ele.id}
                  >
                    {ele.btnName}
                  </Button>
                );
              })}
            </div>
            <div className="cms-container-box5-card">
              <Image
                className="cms-container-box5-card-img"
                src={contentImg}
                alt="logo-fault"
              />
              <p className="cms-container-box5-card-text">{contentData}</p>
            </div>
          </div>
        </div>
        <div className="box6-Gredeint-color">
          <div className="cms-container-box6">
            <div className="cms-container-box6-child1">
              <h2>Types Of Websites We Create With CMS</h2>
            </div>
            <div className="cms-container-box6-child2">
              <div className="cms-container-box6-child2-subchild1">
                <p className="cms-container-box6-child2-subchild1-text">
                  Business websites
                </p>
                <p className="cms-container-box6-child2-subchild1-text">
                  Blog & news websites
                </p>
                <p className="cms-container-box6-child2-subchild1-text">
                  E-commerce websites
                </p>
              </div>
              <div className="cms-container-box6-child2-subchild1">
                <p className="cms-container-box6-child2-subchild1-text">
                  Real-estate websites
                </p>
                <p className="cms-container-box6-child2-subchild1-text">
                  Community websites
                </p>
              </div>
              <div className="cms-container-box6-child2-subchild1">
                <p className="cms-container-box6-child2-subchild1-text">
                  Charity websites
                </p>
                <p className="cms-container-box6-child2-subchild1-text">
                  Portfolio websites
                </p>
                <p className="cms-container-box6-child2-subchild1-text">
                  Educational websites
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="cms-container-box7">
          <h2 className="cms-container-box7-text">
            Our <span className="text-color">Process</span>
          </h2>
          <div className="cms-container-box7-child2">
            <div className="cms-container-box7-child2-subchild1">
              <p className="cms-container-box7-child2-subchild1-text">
                Gathering requirements
              </p>
              <p className="cms-container-box7-child2-subchild1-text">
                Research and planning
              </p>
              <p className="cms-container-box7-child2-subchild1-text">
                Creating design
              </p>
            </div>
            <div className="cms-container-box7-child2-subchild1">
              <p className="cms-container-box7-child2-subchild1-text">
                Website development
              </p>
              <p
                className="cms-container-box7-child2-subchild1-text"
                style={{ paddingRight: "13%", paddingLeft: "13%" }}
              >
                Website testing
              </p>
            </div>
            <div className="cms-container-box7-child2-subchild1">
              <p
                className="cms-container-box7-child2-subchild1-text"
                id="cms-container-box7-child2-subchild1-text"
              >
                User training
              </p>
              <p className="cms-container-box7-child2-subchild1-text">
                Staging site
              </p>
              <p className="cms-container-box7-child2-subchild1-text">
                Launch of website
              </p>
            </div>
          </div>
        </div>
        <div className="cms-container-box8">
          <div className="cms-container-box8-child1">
            <div className="cms-container-box8-child1-subchild">
              <Button className="cms-container-box8-child1-subchild-btn">
                A
              </Button>
              <h2 className="cms-container-box8-child1-subchild-text1">
                Gathering requirements
              </h2>
              <p className="cms-container-box8-child1-subchild-text2">
                We Begin by understanding your needs, goals, preferred CMS
                platform, and target audience to determine the website's
                features, functionality, and content requirements
              </p>
            </div>
            <div className="cms-container-box8-child1-subchild">
              <Button className="cms-container-box8-child1-subchild-btn">
                B
              </Button>
              <h2 className="cms-container-box8-child1-subchild-text1">
                Research and planning
              </h2>
              <p className="cms-container-box8-child1-subchild-text2">
                We then move on to conduct in-depth research and create a
                comprehensive plan outlining the project scope, suitable CMS
                platform, timeline, and deliverables
              </p>
            </div>
            <div className="cms-container-box8-child1-subchild">
              <Button className="cms-container-box8-child1-subchild-btn">
                C
              </Button>
              <h2 className="cms-container-box8-child1-subchild-text1">
                Creating design
              </h2>
              <p className="cms-container-box8-child1-subchild-text2">
                Our third step involves creating a visually appealing and
                user-friendly website design, considering factors like branding,
                layout, navigation, and responsive design
              </p>
            </div>
          </div>
          <div className="cms-container-box8-child1">
            <div className="cms-container-box8-child1-subchild">
              <Button className="cms-container-box8-child1-subchild-btn">
                D
              </Button>
              <h2 className="cms-container-box8-child1-subchild-text1">
                Website development
              </h2>
              <p className="cms-container-box8-child1-subchild-text2">
                Utilizing the approved design, our professionals develop a fully
                functional website by incorporating all of the necessary
                features and functionalities
              </p>
            </div>
            <div className="cms-container-box8-child1-subchild">
              <Button className="cms-container-box8-child1-subchild-btn">
                E
              </Button>
              <h2 className="cms-container-box8-child1-subchild-text1">
                Website testing
              </h2>
              <p className="cms-container-box8-child1-subchild-text2">
                We conduct rigorous testing of the newly created website to
                ensure the website functions flawlessly across different
                browsers, devices, and scenarios
              </p>
            </div>
          </div>
          <div className="cms-container-box8-child1">
            <div className="cms-container-box8-child1-subchild">
              <Button className="cms-container-box8-child1-subchild-btn">
                F
              </Button>
              <h2 className="cms-container-box8-child1-subchild-text1">
                User training
              </h2>
              <p className="cms-container-box8-child1-subchild-text2">
                We provide training and a detailed manual for your web
                operations team to efficiently manage the website, serving as a
                comprehensive reference guide for ongoing maintenance and
                updates
              </p>
            </div>
            <div className="cms-container-box8-child1-subchild">
              <Button className="cms-container-box8-child1-subchild-btn">
                G
              </Button>
              <h2 className="cms-container-box8-child1-subchild-text1">
                Staging site
              </h2>
              <p className="cms-container-box8-child1-subchild-text2">
                After user training and before the launch, we deploy the website
                for the final round of testing. This ensures that any issues or
                bugs are identified and resolved before the website goes live
              </p>
            </div>
            <div className="cms-container-box8-child1-subchild">
              <Button className="cms-container-box8-child1-subchild-btn">
                H
              </Button>
              <h2 className="cms-container-box8-child1-subchild-text1">
                Launch of website
              </h2>
              <p className="cms-container-box8-child1-subchild-text2">
                After successful staging, the website is launched, marking its
                online debut and making it accessible to the target audience
              </p>
            </div>
          </div>
        </div>

        <div className="_crousal-container">
          <h2 className="_crousal-container-child1">
            {" "}
            What<span className="text-color"> People Say </span>About Us
          </h2>
          <div className="_crousal-container-child2">
            <Carousel content={content} photo={photo} name={name} desc={desc} />
          </div>
        </div>

        <div className="_tertiory-section-container">
          <h2 className="_tertiory-section-container-text1">Why Choose Us</h2>
          <p className="_tertiory-section-container-text2">
            Through adherence to industry-leading standards in design and
            development, we offer tailor-made CMS solutions that prioritize
            scalability, security, and effortless management
          </p>
        </div>

        <div className="_five-card-container">
          <div className="_five-card-container-child1">
            <div className="_five-card-container-child1-subchild">
              <Button className="_five-card-container-child1-subchild-btn">
                A
              </Button>
              <h2 className="_five-card-container-child1-subchild-text1">
                Real-time project tracking
              </h2>
              <p className="_five-card-container-child1-subchild-text2">
                Experience real-time project visibility with our convenient
                dashboard, tailored to make your website journey special. Track
                milestones, view tasks, and monitor development progress
                effortlessly. Our centralized project management hub ensures
                transparency, and effective communication, throughout the entire
                process
              </p>
            </div>
            <div className="_five-card-container-child1-subchild">
              <Button className="_five-card-container-child1-subchild-btn">
                B
              </Button>
              <h2 className="_five-card-container-child1-subchild-text1">
                Expertise in CMS Development
              </h2>
              <p className="_five-card-container-child1-subchild-text2">
                At DevRiser, we have highly skilled professionals with extensive
                expertise in CMS development services. In-depth knowledge of
                various CMS platforms enables us to deliver top-notch websites
                that are tailored to meet your specific requirements
              </p>
            </div>
            <div className="_five-card-container-child1-subchild">
              <Button className="_five-card-container-child1-subchild-btn">
                C
              </Button>
              <h2 className="_five-card-container-child1-subchild-text1">
                Professional Design & User Experience
              </h2>
              <p className="_five-card-container-child1-subchild-text2">
                A visually appealing and user-friendly website is essential for
                online success. Our professionals focus on creating websites
                that not only look stunning but also offer a seamless user
                experience, making navigation intuitive and engaging
              </p>
            </div>
          </div>
          <div className="_five-card-container-child1">
            <div className="_five-card-container-child1-subchild">
              <Button className="_five-card-container-child1-subchild-btn">
                D
              </Button>
              <h2 className="_five-card-container-child1-subchild-text1">
                Ongoing Support & Maintenance
              </h2>
              <p className="_five-card-container-child1-subchild-text2">
                Our commitment to quality CMS development service extends beyond
                the website's initial creation. From regular updates to
                troubleshooting and technical assistance, we are dedicated to
                providing reliable support throughout our clients' online
                journey
              </p>
            </div>
            <div className="_five-card-container-child1-subchild">
              <Button className="_five-card-container-child1-subchild-btn">
                E
              </Button>
              <h2
                className="_five-card-container-child1-subchild-text1"
                style={{ width: "30%" }}
              >
                Cost Effective
              </h2>
              <p className="_five-card-container-child1-subchild-text2">
                Experience cost-effective CMS development services tailored to
                your budget. Our team excels at delivering efficient websites
                without compromising quality. With meticulous attention to
                detail, we provide exceptional value for your investment
              </p>
            </div>
          </div>
        </div>

        <div className="_secondary-long-card">
          <h2 className="_secondary-long-card-text">
            Let's Build Your Dream Website
          </h2>
          <Button className="_secondary-long-card-btn">Get in touch</Button>
        </div>

        <div className="_faq-container">
          <h2 className="_faq-container-child1">
            Frequently <span className="text-color">Asked</span> Questions
          </h2>

          <div className="_faq-container-child2">
            <Faq />
          </div>
        </div>
      </div>
         
    </div>
  );
}
