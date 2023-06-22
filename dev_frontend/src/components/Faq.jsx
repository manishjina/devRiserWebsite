import * as React from 'react';

import {Box,Accordion,AccordionSummary,AccordionDetails,Typography} from "../utils/custom"
import "../styles/Faq.css"
import MinusImg from "../assets/illustration/MinusImg.png"
import PlusImg from "../assets/illustration/PlusImg.png"
import Image from 'next/image';
export default function Faq() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div >
      <Accordion className="Accordian"  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<Image src={expanded==='panel1'?MinusImg:PlusImg}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography  className="Accordian-text1"  >
          What CMS platforms do you offer for website creation?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="Accordian-text2">
          We offer website creation services through popular CMS platforms like WordPress, Drupal, Webflow, Wix, and Shopify. These platforms provide flexible and scalable solutions which help us to create different types of websites, from simple blogs to complex e-commerce stores.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="Accordian" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
           expandIcon={<Image src={expanded==='panel2'?MinusImg:PlusImg}/>}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className="Accordian-text1" >What will be the cost of the CMS development services?</Typography>
    
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="Accordian-text2">
          The cost for CMS development services can vary depending on several factors, including the complexity of the project, the specific CMS platform chosen, the desired features and functionalities, and the level of customization required. It is essential to discuss your project requirements and goals to get an accurate estimate of the cost involved.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="Accordian" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
            expandIcon={<Image src={expanded==='panel3'?MinusImg:PlusImg}/>}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className="Accordian-text1">
          How much time will it take to create a website?

          </Typography>
    
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="Accordian-text2">
          The time required to create a website can vary based on several factors, including the complexity of the website, the specific CMS platform chosen, the desired features and functionalities, and the level of customization required.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="Accordian" style={{borderBottom:'none'}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<Image src={expanded==='panel4'?MinusImg:PlusImg}/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className="Accordian-text1">Is my data secure with you?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="Accordian-text2">
          Yes, we as a CMS development company prioritize the security of your data. We implement robust measures to ensure the confidentiality, integrity, and availability of your information. Rest assured that we follow industry best practices, utilize encryption protocols, and implement secure hosting environments to safeguard your data throughout our website creation process.

          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}