import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import classnames from "classnames/bind";
import StyledExternalLink from "../StyledExternalLink";
import Image from "next/image";
import projectStyles from "../../styles/projects/IAC2022.module.scss";
import utilStyles from "../../styles/utility.module.scss";
import CTAButton from "../CTAButton";

const styles = { ...projectStyles, ...utilStyles };
const cx = classnames.bind(styles);

const IAC2022 = () => {
  return (
    <Grid container spacing={2} className={cx("case-study-container")}>
      <Grid item xs={12}>
        <Typography variant="h1">IAC Model and Website Redesign</Typography>
        <Typography variant="subtitle2">
          From Chaotic Event to Steadfast Brand Presence & Community Resource
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
            The IAC is a professional conference offering talks and workshops on
            the field of Information Architecture. The event is historically
            held at rotating host cities in North America. Due to the changes
            brought about by the COVID-19 pandemic, it has recently adapted to
            being held as a virtual conference.
          </Typography>

          <Typography>
            With a history of over 20 years, this conference's organizers,
            volunteers, and technology platforms have switched hands many times
            over. The constant change has resulted in inconsistent content
            models, gaps in information, and extra work for the succeeding team.
          </Typography>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>

      <Grid container item xs={12} className={cx("project-section")}>
        <Grid item alignSelf="center" xs={12} sm={3}>
          <Typography variant="h2">Objective</Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={9}
          className={cx("information")}
        ></Grid>
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
