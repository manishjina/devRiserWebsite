"use client";
import React, { useEffect, useState } from "react";
import "./webdevelopment.css";

import { Button } from "../../../utils/custom";
import Carousel from "../../../components/Carousel";
import Avatar from "../../../assets/illustration/avatar.png";
import { ourProcessDataBlack, ourProcessDataWhite } from "./webdevelopmentdata";
import Faq from "../../../components/Faq";
import { useGlobalContext } from "app/components/common/store";

const WebDevelopment = () => {
  const [contentData, setContent] = useState(ourProcessDataBlack[0].content);
  const [contentImg, setContentImg] = useState(ourProcessDataBlack[0].img);
  const [btnColor, setBtnColour] = useState(0);
  const { showSidebar, setShowSidebar, theme, setTheme } = useGlobalContext();
  const [data, setData] = useState([]);

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

  const faqContent = [
    {
      question: "Why should I invest in custom website development services ?",
      ans: "Custom website development ensures a unique online presence  to your brand, offering enhanced functionality, better user experience, and improved search engine visibility.",
      panel: "1",
    },
    {
      question: "Can I update and manage my custom website myself ?",
      ans: "The cost for CMS development services can vary depending on several factors, including the complexity of the project, the specific CMS platform chosen, the desired features and functionalities, and the level of customization required. It is essential to discuss your project requirements and goals to get an accurate estimate of the cost involved.",
      panel: "2",
    },
    {
      question: "Can I update and manage my custom website myself ?",
      ans: "The time required to create a website can vary based on several factors, including the complexity of the website, the specific CMS platform chosen, the desired features and functionalities, and the level of customization required.",
      panel: "3",
    },
    {
      question: "Will my custom website be mobile-friendly and responsive ?",
      ans: "Yes, we as a CMS development company prioritize the security of your data. We implement robust measures to ensure the confidentiality, integrity, and availability of your information. Rest assured that we follow industry best practices, utilize encryption protocols, and implement secure hosting environments to safeguard your data throughout our website creation process.",
      panel: "4",
    },
  ];

  const lightTheme = {
    backgroundColor: "#F6F6F6",
    color: "#2A2A2A",
  };
  const darkTheme = {
    backgroundColor: "#090a0b",
    color: "#FFFFFF",
  };

  useEffect(() => {
    if (theme) {
      setData(ourProcessDataWhite);
    } else {
      setData(ourProcessDataBlack);
    }
  }, [theme, handleSixbtn]);

  return (
    <div className="container" onClick={() => setShowSidebar(false)}>
      <div className="main-container">
        <div
          className="_crousal-container"
          style={theme ? lightTheme : darkTheme}
        >
          <h2 className="_crousal-container-child1">
            {" "}
            What<span className="text-color"> People Say </span>About Us
          </h2>
          <div className="_crousal-container-child2">
            <Carousel content={content} photo={photo} name={name} desc={desc} />
          </div>
        </div>

        <div
          className="_tertiory-section-container"
          style={theme ? lightTheme : darkTheme}
        >
          <div className="tertiory-section-container-gradient"></div>
          <h2 className="_tertiory-section-container-text1">Why Choose Us</h2>
          <div
            className="_big-card-container"
            style={theme ? lightTheme : darkTheme}
          >
            <div className="_big-card-container-child1">
              <div className="_big-card-container-child1-item">
                Consultation and gathering requirements
              </div>
              <div className="_big-card-container-child1-item">
                Research and planning
              </div>
              <div className="_big-card-container-child1-item">
                Wireframing and design
              </div>
              <div className="_big-card-container-child1-item">
                Development of website
              </div>
              <div className="_big-card-container-child1-item">
                Content integration
              </div>
              <div className="_big-card-container-child1-item">
                User training
              </div>
              <div className="_big-card-container-child1-item">Staging</div>
              <div className="_big-card-container-child1-item">
                Deployment and launch
              </div>
              <div className="_big-card-container-child1-item">
                Post-launch support
              </div>
            </div>
            <div className="_big-card-container-child2">
              Gain insights and establish project scope through consultation. We
              gather the required information and ensure that we create a
              website that aligns with your business goals, target audience,
              desired features, design aesthetics, and technical considerations
            </div>
          </div>
        </div>

        <div className="_secondary-long-card">
          <h2 className="_secondary-long-card-text">
            Ready For A Website That Sets You Apart?
          </h2>
          <Button className="_secondary-long-card-btn">
            Request a Consultation
          </Button>
        </div>

        <div className="_faq-container" style={theme ? lightTheme : darkTheme}>
          <h2 className="_faq-container-child1">
            Frequently <span className="text-color">Asked</span> Questions
          </h2>

          <div className="_faq-container-child2">
            <Faq faqContent={faqContent} />
          </div>
        </div>
      </div>
         
    </div>
  );
};

export default WebDevelopment;
