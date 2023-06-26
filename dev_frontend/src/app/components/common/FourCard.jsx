import { useEffect, useRef, useState } from "react";
import bgurl from "../../../assets/illustration/big card.png";
export default function FourCard({ props }) {
  const [gradientStyles, setGradientStyles] = useState([]);

  const divRefs = useRef([]);

  const handleMouseMove = (e, index) => {
    const { left, top, width, height } =
      divRefs.current[index].getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const centerX = width / 2;
    const centerY = height / 2;
    const distanceX = Math.abs(x - centerX);
    const distanceY = Math.abs(y - centerY);
    const maxDistance = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
    const maxBlurRadius = 100; // Maximum blur radius value
    const maxGradientSize = 300; // Maximum gradient size value

    const distanceRatio = (distanceX + distanceY) / (width + height);
    const blurRadius = Math.floor(distanceRatio * maxBlurRadius);
    const gradientSize = Math.floor(distanceRatio * maxGradientSize);

    const gradient = `radial-gradient(circle at ${x}px ${y}px, green ${gradientSize}px, #000000 ${blurRadius}px)`;

    setGradientStyles((prevStyles) => {
      const updatedStyles = [...prevStyles];
      updatedStyles[index] = {
        background: gradient,
        filter: "blur(100px)",
      };
      return updatedStyles;
    });
  };

  const handleMouseLeave = (index) => {
    const updatedStyles = [...gradientStyles];
    updatedStyles[index] = {
      background: "none",
    };
    setGradientStyles([]);
  };

  return (
    <div className="_grid-four-card">
      <div
        className={"_grid-four-card-child"}
        ref={(ref) => (divRefs.current[0] = ref)}
        onMouseMove={(e) => handleMouseMove(e, 0)}
        onMouseLeave={() => handleMouseLeave(0)}
        style={gradientStyles[0]}
      >
        {" "}
        <h2 className="_grid-four-card-child-subchild1">Time-Efficient</h2>
        <p className="_grid-four-card-child-subchild2">
          Our team specializes in creating user-friendly CMS websites that are
          easy to manage. We harness the power of CMS platforms to accelerate
          the website creation process, allowing you to have a fully functional
          website in significantly less time compared to traditional code-based
          methods
        </p>
      </div>

      <div
        className="_grid-four-card-child"
        ref={(ref) => (divRefs.current[2] = ref)}
        onMouseMove={(e) => handleMouseMove(e, 2)}
        onMouseLeave={() => handleMouseLeave(2)}
        style={gradientStyles[2]}
      >
        <h2 className="_grid-four-card-child-subchild1"> Cost-Effective</h2>
        <p className="_grid-four-card-child-subchild2">
          Unlock business growth without compromising quality with our
          cost-conscious CMS web development services. Enjoy a high-quality,
          feature-rich website that fits your budget, delivering financial
          advantages for your online presence. Experience streamlined
          development and maximize your business's potential
        </p>
      </div>
      <div
        className="_grid-four-card-child"
        ref={(ref) => (divRefs.current[3] = ref)}
        onMouseMove={(e) => handleMouseMove(e, 3)}
        onMouseLeave={() => handleMouseLeave(3)}
        style={gradientStyles[3]}
      >
        <h2 className="_grid-four-card-child-subchild1"> Responsive Design</h2>
        <p className="_grid-four-card-child-subchild2">
          adapt to all devices, ensuring exceptional user experiences. Through
          responsive design, we optimize layouts and functionality for optimal
          viewing and interaction. Experience effortless compatibility across
          screens, from big screens to laptops and from mobiles to tablets{" "}
        </p>
      </div>
      <div
        className="_grid-four-card-child"
        ref={(ref) => (divRefs.current[4] = ref)}
        onMouseMove={(e) => handleMouseMove(e, 4)}
        onMouseLeave={() => handleMouseLeave(4)}
        style={gradientStyles[4]}
      >
        <h2 className="_grid-four-card-child-subchild1">Easy to manage</h2>
        <p className="_grid-four-card-child-subchild2">
          Simplify website management with our user-friendly interfaces. Our
          expertly crafted websites eliminate complexities, empowering you to
          effortlessly update and maintain your online presence. Experience
          seamless control and keep your website up-to-date with ease
        </p>
      </div>
    </div>
  );
}
