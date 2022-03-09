import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import classnames from "classnames/bind";
import StyledExternalLink from "../StyledExternalLink";
import Image from "next/image";
import projectStyles from "../../styles/projects/IAC2022.module.scss";
import utilStyles from "../../styles/utility.module.scss";
import CTAButton from "../CTAButton";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
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
        <Grid container item xs={12} sm={10} className={cx("information")}>
          <Grid item xs={12}>
            <Typography variant="disclaimer">
              This project is still underway. Below is my current proposal on
              how I{`'`}d conduct this study to meet our client and user
              objectives.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ul className={cx("team")}>
              <li>
                <Typography>
                  <label>Client:</label>
                  <StyledExternalLink href="https://www.theiaconference.com/">
                    IAC
                  </StyledExternalLink>
                </Typography>
              </li>
              <li>
                <Typography>
                  <label>Sponsor:</label>
                  <StyledExternalLink href="https://www.sanity.io/">
                    Sanity
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
          <Grid item xs={12} sm={6}>
            <ul className={cx("details")}>
              <li>
                <Typography>
                  <label>My Role:</label> UXR, IA, Content Strategy
                </Typography>
              </li>

              <li>
                <Typography>
                  <label>Duration:</label> ~5-7 months (volunteer hours)
                </Typography>
              </li>
            </ul>
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

        <Grid container spacing={2} item xs={12} sm={10}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3">Goal</Typography>
            <Typography>
              Create a consistent and scalable content model so that adoption
              and management is easier for the next team.
            </Typography>
            <Typography>
              Build and migrate the new site with existing content and create
              supporting documentation and repositories as needed.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3">What We Know</Typography>
            <Typography>
              IAC wants a permanent website that will be maintained.
              <div className={cx("emphasis")}>
                Single Event Model <ArrowRightAltIcon /> Permanent Brand Model.
              </div>
            </Typography>
            <Typography>
              IAC will be using{" "}
              <StyledExternalLink href="https://www.sanity.io/">
                Sanity
              </StyledExternalLink>{" "}
              as the headless CMS for managing data moving forward.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid container item xs={12} className={cx("project-section")}>
        <Grid item alignSelf="center" xs={12} sm={2}>
          <Typography variant="h2">Discovery</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Typography variant="h3">
            Identify & Meet {`"`}Knowledge Holders{`"`}
          </Typography>

          <Typography>
            Our fresh team of volunteers needed to identify who to talk to in
            the community to get as much of the picture as possible. We talked
            with stakeholders from IAC and Sanity, and as many volunteers as we
            could get in touch with to identify where this project was in the
            process and what we could use as a launching point.
          </Typography>

          <Grid item xs={12}>
            <Typography variant="h3">
              Information Architecture & Content Model
            </Typography>
            <Typography>
              I mapped out the information architecture of the existing website
              and analyzed it in comparison to other major conferences related
              to the IA/UX fields using a competitor matrix. This helped to
              highlight prominent features and content across similar events to
              help identify where the current site may be lacking.
            </Typography>
            {/* TODO: Create and add site map */}
            <Typography>
              Keeping the transformation into to a persistent brand model in
              mind, I designed a future content model for the new IAC.
            </Typography>
            {/* TODO: Create and insert content model */}
            <Typography>
              Our team is currently under processes gathering as many of the
              former assets as possible in order to do an initial round of
              categorization for content properties. Once complete, we plan to
              run a series of Card Sort and Tree Tests with users in order to
              tag and structure existing content and anticipate future needs.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid container item xs={12} className={cx("project-section")}>
        <Grid item alignSelf="center" xs={12} sm={2}>
          <Typography variant="h2">Research</Typography>
        </Grid>
        <Grid
          container
          spacing={1}
          item
          justifyContent="center"
          xs={12}
          sm={10}
        >
          <Grid item xs={12} sm={6}>
            <Typography variant="h3">Generative</Typography>
            <ul>
              <li>
                <Typography>
                  <label>User Interviews:</label> Focus on mental model of
                  conference value and logistics, relationship to professional
                  growth, and content/resources considered worthwhile and
                  desirable
                </Typography>
              </li>
              <li>
                <Typography>
                  <label> Existing Research:</label> IA & IAC Community Research
                  currently under evaluation by another team will be reviewed
                  and taken into consideration
                </Typography>
              </li>
            </ul>
            <Grid item xs={12}>
              {/* What to look out for */}
              <Typography variant="h3">Considerations</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3">Evaluative</Typography>
            <Typography>
              As this is a major site overhaul, I chose to approach the redesign
              iteratively by page/feature so that the team can make progress and
              adjust to feedback quickly. With the existing site and proposed
              mock-ups infront of users, I anticipate uncovering increasing
              clarity and insight on how to approach other pages for redesign.
            </Typography>
            <Typography>
              <label>A/B Tests:</label> Paying careful attention to the
              understanding of IAC, clarity and understanding of information,
              and the time it takes for users to navigate to certain
              information.
            </Typography>
            <Typography>
              <label>Tree Tests:</label> Focus on the labeling and
              categorization of content, observing what users search for and
              how.
            </Typography>
            <Typography>
              <label>End to End Testing:</label> Validate that users are able to
              achieve all necessary functionality and have a painless experience
              visiting the site.
            </Typography>
          </Grid>
          <Grid container justifyContent="center" item xs={12}>
            <CTAButton
              href="https://www.canva.com/design/DAE6Uu8Db6E/j3B_7DiXtwsm8rrHhAZlLQ/view?utm_content=DAE6Uu8Db6E&utm_campaign=designshare&utm_medium=link&utm_source=shareyourdesignpanel"
              text="Research Plan Slide Dgeck"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid container item xs={12} className={cx("project-section")}>
        <Grid item alignSelf="center" xs={12} sm={2}>
          <Typography variant="h2">Reflection</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          {/* Hypothesis */}
          <Typography variant="h3">Hypotheses</Typography>
          <Typography>
            I see potential to significantly simplify the IA structure and
            content. The current navigation and content has a lot of repeating
            elements tying back to oneother in an inconsistent manner.
            Simplifying and reducing the text bloat has a likelihood of
            increasing user clarity on how to find certain information, and
            reduce reading fatigue so that the important information sticks.{" "}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default IAC2022;
