import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import classnames from "classnames/bind";
import StyledExternalLink from "../StyledExternalLink";
import Image from "next/image";
import projectStyles from "../../styles/projects/IAC2022.module.scss";
import utilStyles from "../../styles/utility.module.scss";
import CTAButton from "../CTAButton";

const styles = { ...utilStyles, ...projectStyles };
const cx = classnames.bind(styles);

const IAC2022 = () => {
  return (
    <Grid container spacing={2} className={cx("case-study-container")}>
      <Grid item xs={12}>
        <Typography variant="h1">IAC Model and Website Redesign</Typography>
        <Typography variant="subtitle2">
          Chaotic Event to Steadfast Brand Presence & Community Resource
        </Typography>
      </Grid>

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
        <Grid container item xs={12} sm={10} className={cx("information")}>
          <Grid item xs={12} sm={6}>
            <Typography>
              <ul className={cx("team")}>
                <li>
                  <label>Client:</label>
                  <StyledExternalLink href="https://www.theiaconference.com/">
                    IAC
                  </StyledExternalLink>
                </li>
                <li>
                  <label>Sponsor:</label>
                  <StyledExternalLink href="https://www.sanity.io/">
                    Sanity
                  </StyledExternalLink>
                </li>
                <li>
                  <label> Contractor:</label>
                  <StyledExternalLink href="https://www.diadesign.io/">
                    DIA Design Guild
                  </StyledExternalLink>
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>
              <ul className={cx("details")}>
                <li>
                  <label>My Role:</label> UXR, IA, Content Strategy
                </li>

                <li>
                  <label>Duration:</label> ~5-7 months (volunteer hours)
                </li>
              </ul>
            </Typography>
          </Grid>

          <Typography className={cx("description-top")}>
            The IAC is a conference that offers professional talks and workshops
            on the field of Information Architecture. It offers recordings of
            the speaker sessions as a resource to those who attend the previous
            year. This event is rebuilt from the ground up each year, with each
            iteration having its own organizer leads and website.
          </Typography>

          <Typography variant="h3">Problem Space</Typography>
          <Typography>
            With a history of over 20 years, the constant change of organizers,
            volunteers, and technology platforms has resulted in inconsistent
            content models, gaps in knowledge, and an extremely strenuous
            adoption process for the succeeding team.
          </Typography>
        </Grid>
      </Grid>

      <Grid container item xs={12} className={cx("project-section")}>
        <Grid item alignSelf="center" xs={12} sm={2}>
          <Typography variant="h2">Objective</Typography>
        </Grid>
        <Grid item xs={12} sm={10} className={cx("information")}>
          <Typography variant="h3">Goal</Typography>
          <Typography>
            Create a standard for IAC's content so that adoption and management
            is easier for the next team.
          </Typography>
          <Typography variant="h3">What We Know</Typography>
          <Typography>
            IAC wants a permanent website with events being promoted on it. No
            more rebuilding from scratch.
          </Typography>
          <Typography>
            IAC will be using Sanity as the headless CMS for managing data. It
            is up to our team to create the content model based on our findings.
          </Typography>
        </Grid>
      </Grid>

      <Grid container item xs={12} className={cx("project-section")}>
        <Typography variant="h2">The Work</Typography>
        <Grid item xs={12}>
          {/* What to look out for */}
          <Typography variant="h3">Discovery</Typography>
        </Grid>

        <Grid item xs={12}>
          {/* What to look out for */}
          <Typography variant="h3">
            Information Architecture & Content Model
          </Typography>
        </Grid>
        <Grid item spacing={2} xs={12}>
          {/* Research methods & why */}
          <Typography variant="h3">Research</Typography>
          <Grid container item justifyContent="center" xs={12}>
            <CTAButton
              href="https://www.canva.com/design/DAE6Uu8Db6E/j3B_7DiXtwsm8rrHhAZlLQ/view?utm_content=DAE6Uu8Db6E&utm_campaign=designshare&utm_medium=link&utm_source=shareyourdesignpanel"
              text="Research Plan"
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {/* What to look out for */}
          <Typography variant="h3">Considerations</Typography>
        </Grid>
      </Grid>

      <Grid container item xs={12} className={cx("project-section")}>
        <Typography variant="h2">Reflection</Typography>
        <Grid item xs={12}>
          {/* Hypothesis */}
          <Typography variant="h3">Hypotheses</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default IAC2022;
