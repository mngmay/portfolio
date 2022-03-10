import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import classnames from "classnames/bind";
import StyledExternalLink from "../StyledExternalLink";
import Image from "next/image";
import projectStyles from "../../styles/projects/projectPage.module.scss";
import utilStyles from "../../styles/utility.module.scss";

const styles = { ...utilStyles, ...projectStyles };
const cx = classnames.bind(styles);

const WIADLA2022 = () => {
  return (
    <Grid container spacing={2} className={cx("case-study-container")}>
      <Grid item xs={12}>
        <Typography variant="h1">
          World IA Day
          <span className={cx("small-divider")}>/</span>
          Los Angeles
          <span className={cx("small-divider")}>/</span>
          2022
        </Typography>
        <Typography variant="subtitle2">
          Crafting a Virtual Space & Event Experience that Promotes a Connected
          World
        </Typography>
      </Grid>

      {/*TODO: Insert existing website image */}

      <Grid
        container
        spacing={1}
        item
        xs={12}
        className={cx("project-section")}
      >
        {/* Description */}
        <Grid item alignSelf="center" xs={12} sm={2}>
          <Typography variant="h2">About</Typography>
        </Grid>
        <Grid
          container
          spacing={1}
          item
          xs={12}
          sm={10}
          className={cx("information")}
        >
          <Grid item xs={12} sm={6} className={cx("team")}>
            <ul>
              <li>
                <Typography>
                  <label>Client:</label>
                  <StyledExternalLink href="https://worldiaday.org/about">
                    WIAA
                  </StyledExternalLink>
                </Typography>
              </li>
              <li>
                <Typography>
                  <label>Sponsors:</label>
                  <StyledExternalLink href="https://app.gather.town/app">
                    Gather
                  </StyledExternalLink>
                  <span className={cx("small-divider")}>/</span>
                  <StyledExternalLink href="https://www.esri.com/en-us/home">
                    Esri
                  </StyledExternalLink>
                  <span className={cx("small-divider")}>/</span>
                  <StyledExternalLink href="https://www.wunderlandgroup.com/">
                    Wunderland Group
                  </StyledExternalLink>
                </Typography>
              </li>
              <li>
                <Typography>
                  <label> Contractor:</label>
                  <StyledExternalLink href="https://www.diadesign.io/">
                    DIA Design Guild
                  </StyledExternalLink>
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} className={cx("details")}>
            <ul>
              <li>
                <Typography>
                  <label>My Role:</label> Event Experience Designer
                  <span className={cx("small-divider")}>/</span>
                  Event Volunteer
                </Typography>
              </li>

              <li>
                <Typography>
                  <label>Duration:</label> 1 week (volunteer hours)
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3">
              World Information Architecture Day
            </Typography>

            <Typography>
              <StyledExternalLink href="https://worldiaday.org">
                WIAD
              </StyledExternalLink>{" "}
              is a professional event that's held on the same day in cities
              across the world. People with an interest in fields related to
              Information Architecture come together to present their work,
              learn from others, and celebrate the field.
            </Typography>
            <Typography variant="h3">Problem Space</Typography>
            <Typography>
              New team, less lead up time, and new technology, first time
              setting up virtually using Gather
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid container item xs={12} className={cx("project-section")}>
        <Grid item alignSelf="center" xs={12} sm={2}>
          <Typography variant="h2">Objective</Typography>
        </Grid>

        <Grid container spacing={2} item xs={12} sm={10}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3">Goal</Typography>
            <Typography>
              Design a space that integrates the WIAD 2022 theme of "A Connected
              World".
            </Typography>
            <Typography>
              Create supporting onboarding materials to ensure a smooth event
              experience.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3">Should Include</Typography>
            <Typography>Thanks and appreciation to event sponsors</Typography>

            <Typography>
              Integrated materials and information from event sponsors
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid container item xs={12} className={cx("project-section")}>
        <Grid item alignSelf="center" xs={12} sm={2}>
          <Typography variant="h2">Discovery</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          Understanding Gather and WIAD process
        </Grid>
      </Grid>

      <Grid container item xs={12} className={cx("project-section")}>
        <Grid item alignSelf="center" xs={12} sm={2}>
          <Typography variant="h2">Approach</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          List steps
        </Grid>
      </Grid>

      <Grid container item xs={12} className={cx("project-section")}>
        <Grid item alignSelf="center" xs={12} sm={2}>
          <Typography variant="h2">Reflection</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          What I'd do differently
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WIADLA2022;
