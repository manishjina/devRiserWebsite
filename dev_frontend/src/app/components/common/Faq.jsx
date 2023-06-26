

"use client";
import "../../../styles/Faq.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import MinusImg from "../../../assets/illustration/MinusImg.png";
import PlusImg from "../../../assets/illustration/PlusImg.png";

import MuiAccordion from "@mui/material/Accordion";

import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import Image from "next/image";
import { AccordionSummary } from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
  
  },
  "&:before": {
    display: "none",
  },
}));

const exmaple_arr = [
  {
    question: "what is your name",
    ans: "my name is manish",
    panel: 1,
  },
  {
    question: "what is your city name ",
    ans: "my city name is kahsipur",
    panel: 2,
  },
  { question: "what is your postal address", ans: "244713", panel: 3 },
];

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Faq({faqContent=[]}) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="accordian-div" >
      {faqContent.length>0&&faqContent.map((elm) => {
        return (
          <Accordion
            className="Accordian"
            expanded={expanded === elm.panel}
            onChange={handleChange(elm.panel)}
          >
            <AccordionSummary
              expandIcon={
                <Image src={expanded === elm.panel ? MinusImg : PlusImg} />
              }
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography className="Accordian-text1">
                {elm.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="Accordian-text2">{elm.ans}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
