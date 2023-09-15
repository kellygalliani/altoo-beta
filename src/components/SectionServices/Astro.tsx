import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, { AccordionSummaryProps } from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Steps from "../../assets/check.png";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,

  borderRadius: 6,
  "&:not(:last-child)": {
    borderBottom: 0
  },
  "&:before": {
    display: "none"
  }
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)"
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1)
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  borderRadius: "20px"
}));

interface accordionProps {
  title: string;
  description: string;
  index: number;
}

function CustomizedAccordions({ title, description, index }: accordionProps) {
  const [expanded, setExpanded] = React.useState<string | false>(index === 0 ? "panel1" : false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="flex w-full justify-center lg:justify-between gap-9">
      <Accordion
        className="w-full max-w-2xl"
        expanded={expanded === `panel${index + 1}`}
        onChange={handleChange(`panel${index + 1}`)}>
        <AccordionSummary
          aria-controls={`panel${index + 1}d-content`}
          id={`panel${index + 1}d-header`}>
          <span className="p-2 px-5 mx-5 rounded-xl font-semibold bg-secondary-100/50 h-fit">
            {index + 1}
          </span>{" "}
          <h2
            className={`font-semibold flex justify-center items-center ${
              expanded === `panel${index + 1}` ? "lg:text-xl text-lg" : "lg:text-base text-sm"
            }`}>
            {title}{" "}
          </h2>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{description}</Typography>
        </AccordionDetails>
      </Accordion>
      {expanded && (
        <>
          <div className="relative hidden w-64 lg:flex lg:justify-center lg:items-center">
            <img className="sticky w-[40%]  top-0 z-10 animate-bounce-in-left" src={Steps} alt="steps" />
          </div>
        </>
      )}
    </div>
  );
}
export default CustomizedAccordions;
