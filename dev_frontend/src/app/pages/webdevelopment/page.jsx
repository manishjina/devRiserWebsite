"use client";
import { useGlobalContext } from "app/components/common/store.js";
import { Button, Box } from "../../../utils/custom.js";
import darkIllustration from "../../../assets/illustration/laptopdarkillustration.png";
import Carousel from "components/Carousel.jsx";
import Avatar from "../../../assets/illustration/avatar.png";
const Webdevlopment = () => {
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
  return (
    <Box className="service">
      <div className="container" onClick={() => setShowSidebar(false)}>
        <div className="main-container">
          <div className="_hero-section-container" id="hero-section-pattern">
            <div className="container-gradient"></div>
            <div className="_hero-section-container-primary">
              <div className="_hero-section-container-primary-child1">
                <h2 className="_hero-section-container-primary-child1-text1">
                  Advanced{" "}
                  <span className="text-color">
                    Custom Website Development Services
                  </span>{" "}
                  That Transcend Boundaries
                </h2>
                <p className="_hero-section-container-primary-child1-text2">
                  {" "}
                  Experience the power of tailored solutions with our custom
                  website development services. Our team of expert developers is
                  committed to crafting visually stunning, highly functional,
                  and performance-optimized custom websites
                </p>
                <div>
                  <Button className="_hero-section-container-primary-btn">
                    Let's Begin
                  </Button>
                </div>
              </div>
              <div className="_hero-section-container-primary-child2">
                {/* <Image /> */}
              </div>
            </div>
          </div>
          <div className="_primary-long-card">
            <h2 className="_primary-long-card-text1">
              Ignite Your Online Presence With Custom Made Website 
            </h2>
            <p className="_primary-long-card-text2">
              Experience the power of custom website development with DevRiser.
              Our team specializes in crafting unique websites that reflect your
              brand, capture your vision, and achieve your business goals. We
              build websites from scratch and create a standout online presence
              for your business. Whether you need a simple static website or a
              feature-rich dynamic platform, our expertise has got you covered
            </p>
          </div>

          {/*  flex  reverxse container here */}
          <div
            className="_crousal-container-child2"
            id="crousal-container-child2-uix"
          >
            <Carousel content={content} photo={photo} name={name} desc={desc} />
          </div>
          {/* <div className="ux-container-2card">
  <div className="ux-container-2card-child1">
    <h2 className="ux-container-2card-child1-text1">Experience The Art Of Meticulous Design With Our UI/UX Specialists</h2>
    <p className="ux-container-2card-child1-text2">We are the creators of user-friendly interfaces and seamless interactions. Our goal is to turn ordinary designs into extraordinary experiences, unlocking new possibilities in every detail. With a combination of creativity and a focus on users' needs, we design digital journeys that surpass expectations. From initial wireframes to interactive prototypes, we bring ideas to life, making each click, swipe, and tap a captivating interaction between the user and the interface</p>
  </div>
  <div className="ux-container-2card-child2">

  </div>


</div> */}



      
        </div>
      </div>
    </Box>
  );
};

export default Webdevlopment;

