import React from "react";
import "./Work.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import WorkLottie from "../Lottie/WorkLottie/WorkLottie";
//import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const styles = {
  Description: {
    alignContent: "left",
  },
};

function Work() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="WorkPage">
      <div className="WorkBackground">
        <div className="WorkContents">
          <h1 className="ProjectHeader">Projects</h1>

          <WorkLottie />
          <div>
            <div className="AccordionGroup">
              <Accordion
                className="AccordionEx TestReportViewer"
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  ///expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className={classes.heading}>
                    Test Report Viewer:
                  </Typography>
                  <Typography className={classes.secondaryHeading}>
                    ASP.NETCore, EF Core, React.js, TypeScript
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={classes.Description}>
                    Web Application to monitor and extract data and history of
                    tests executions on hearing instruments during production,
                    as per required scenarios for analytics, troubleshoot and
                    audit purposes.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                className="AccordionEx Operator Application"
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  //expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography className={classes.heading}>
                    ITS Operator Application{" "}
                  </Typography>
                  <Typography className={classes.secondaryHeading}>
                    C#, WPF
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Desktop application Windows application developed using WPF,
                    MVVM which performs operations to tests hearing instruments
                    at various stages of production.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  //expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography className={classes.heading}>
                    Code Review Tool
                  </Typography>
                  <Typography className={classes.secondaryHeading}>
                    C#, ASP.NET
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Desktop Application Application to monitor the code quality
                    of the projects by extracting available data on code reviews
                    conducted within projects and filter the data as per
                    managements requirements to assimilate better insights about
                    code quality of projects
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  //expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography className={classes.heading}>
                    Covid-19 DashBoard
                  </Typography>
                  <Typography className={classes.secondaryHeading}>
                    React.js, JavaScript
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Web Application to monitor status of Covid-19 Pandemic
                    globally
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Work);
