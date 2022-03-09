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
        <Grid
          container
          spacing={1}
          item
          xs={12}
          sm={10}
          className={cx("information")}
        >
          <Grid item xs={12} className={cx("disclaimer")}>
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

          <Typography>
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
              Make the adoption and management of IAC easier for future
              organizers by creating a consistent and scalable content model so
              that
            </Typography>
            <Typography>
              Build and migrate the new site with existing content and create
              supporting documentation and repositories as needed.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3">We Know Client Wants</Typography>

            <Typography>
              A permanent website that will be maintained.
              <div className={cx("emphasis")}>
                Single Event Model <ArrowRightAltIcon /> Permanent Brand Model.
              </div>
            </Typography>
            <Typography>
              To use{" "}
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
            Learn from {`"`}Knowledge Holders{`"`}
          </Typography>

          <Typography>
            Our fresh team of volunteers needed to identify who to talk to in
            the community to get as much of the picture as possible. We talked
            with stakeholders from IAC and Sanity, and as many volunteers as we
            could get in touch with to learn the history of IAC and identify
            where this project was in the process.
          </Typography>
          <Typography>
            It was clear speaking with those who have managed IAC, that the
            website and content were a sore spot. The clamor to organize a large
            scale event always took priority to ensure the show goes on.
          </Typography>

          <Grid item xs={12}>
            <Typography variant="h3">What We're Working With</Typography>
            <Typography>
              I mapped out the information architecture of the existing website
              and analyzed it in comparison to other major conferences related
              to the IA/UX fields using a competitor matrix. This helped to
              highlight prominent features and content across similar events to
              help identify where the current site may be lacking.
            </Typography>
            {/* TODO: Create and add site map */}
            <Typography>
              I designed a future content model for the new IAC while keeping
              our aim for a persistent and scalable website in mind.
            </Typography>
            {/* TODO: Create and insert content model and archived assets screenshot */}
            <Typography>
              Our team is currently in the process of collecting assets for an
              initial round of categorization of content properties. Once
              complete, we plan to run a series of Card Sort and Tree Tests with
              users in order to tag and structure existing content and
              anticipate future needs.
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
          <Grid item xs={12}>
            <Typography variant="h3">Research Considerations</Typography>
            <Typography>
              This project's priority is on the organizer experience, while
              understanding and designing toward the attendee experience guides
              us towards a more future-proof content model. The insights that
              our team will uncover from users will be used to determine a model
              that is sustainable and scalable for the internal teams.
            </Typography>
            <Typography>
              Despite being a major website overhaul, I chose to approach the
              redesign iteratively by page/feature so that the team can make
              progress and adjust to feedback quickly. With the existing site
              and proposed mock-ups infront of users, I anticipate uncovering
              increasing clarity and insight on how to approach other pages for
              redesign.
            </Typography>
          </Grid>
          <Grid container justifyContent="center" item xs={12}>
            <CTAButton
              href="https://www.canva.com/design/DAE6Uu8Db6E/j3B_7DiXtwsm8rrHhAZlLQ/view?utm_content=DAE6Uu8Db6E&utm_campaign=designshare&utm_medium=link&utm_source=shareyourdesignpanel"
              text="Research Plan Slide Deck"
            />
          </Grid>
          <Grid container spacing={2} item xs={12}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h3">Generative</Typography>
              <ul>
                <li>
                  <Typography>
                    <label>User Interviews:</label> Focus on mental model of
                    conference value and logistics, relationship to professional
                    growth, and content/resources considered worthwhile and
                    desirable.
                  </Typography>
                </li>
                <li>
                  <Typography>
                    <label> Existing Research:</label> IA & IAC Community
                    Research is currently under evaluation by another team and
                    will be reviewed and taken into consideration for this
                    project.
                  </Typography>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h3">Evaluative</Typography>

              <Typography>
                <label>A/B Tests:</label> Time/clicks for users to find
                information or do a call to action. Which design feels more
                compelling, inclusive, and community driven? Can we validate
                what contributes to this impression? Gain baseline data and
                measurement for improvements.
              </Typography>
              <Typography>
                <label>Tree Tests:</label> Can users find core information
                (date, registration, program schedule, help, etc.) they need?
                How do they search for these? What else do they expect to find?
                Where does their confusion, if any, come up?
              </Typography>
              <Typography>
                <label>End to End Testing:</label> Validate that users are able
                to achieve all necessary functionality and have a painless
                experience visiting the site. Ideally, this would be moderated,
                and I can gain an understanding of the user's impression and
                understanding of IAC.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12} className={cx("project-section")}>
          <Grid item alignSelf="center" xs={12} sm={2}>
            <Typography variant="h2">Findings</Typography>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant="h3">What We Hope to Learn</Typography>
            <ul className={cx("learnings")}>
              <li>
                <Typography>
                  Process and time to launch a new event page is reduced.
                </Typography>
              </li>
              <li>
                <Typography>
                  Users are able to complete core needs and find past conference
                  content of interest more efficiently and with reduced
                  confusion.
                </Typography>
              </li>
            </ul>
            <Typography variant="h3">How We{`'`}ll Know Success</Typography>
            <ul className={cx("success-metrics")}>
              <li>
                <Typography>
                  Process and time to launch a new event page is reduced.
                </Typography>
              </li>
              <li>
                <Typography>
                  Users are able to complete core needs and find past conference
                  content of interest
                </Typography>
              </li>
            </ul>
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
            Migrating to a persistent and consistent data model will ease a lot
            of pain for organizers and likely remove some level of hesitance
            towards getting involved.
          </Typography>
          <Typography>
            I predict that there is a lot of opportunity to simplify and
            streamline the content and IA structure. Reducing the bloat of
            repetitive content and navigation will provide clarity to users on
            the IAC brand and ability to navigate.
          </Typography>
          <Typography>
            With the true-up of conference resources, IAC will have potential to
            create different offerings and generate more value. This creates
            increased potential at reaching a wider and more diverse audience,
            as well as an opportunity to generate year-round revenue.
          </Typography>
          <Typography variant="h3">Impact</Typography>
          <ul className={cx("impact")}>
            <li>
              <Typography>
                Smoother organizer and attendee experience <ArrowRightAltIcon />{" "}
                Increased numbers in volunteers and newcomers
              </Typography>
            </li>
            <li>
              <Typography>
                Stronger brand and offerings <ArrowRightAltIcon /> Increased
                validity as a major player in the field of IA
              </Typography>
            </li>
            <li>
              <Typography>
                Potential year-round revenue generation (subcription content){" "}
                <ArrowRightAltIcon /> Improved future events and attracting a
                different tier of users
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default IAC2022;
