import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import classnames from "classnames/bind";
import StyledExternalLink from "../StyledExternalLink";
import PublicIcon from "@mui/icons-material/Public";
import Image from "next/image";
import projectStyles from "../../styles/projects/projectPage.module.scss";
import utilStyles from "../../styles/utility.module.scss";
import {
  retroStop,
  retroContinue,
  retroStart,
} from "../../assets/projects/WIADLA2022";

const styles = { ...utilStyles, ...projectStyles };
const cx = classnames.bind(styles);

const WIADLA2022 = () => {
  return (
    <Grid container spacing={2} className={cx("case-study-container")}>
      <Grid item xs={12}>
        <Typography variant="h1">
          World IA Day
          <span className={cx("small-divider")}>/</span>
          LA
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
                  <br />
                  Event Volunteer
                </Typography>
              </li>

              <li>
                <Typography>
                  <label>Duration:</label> 2 months total{" "}
                  <span className={cx("small-divider")}>/</span> <br />2 weeks
                  for self (volunteer hours)
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
              across the world. People with an interest in Information
              Architecture and adjacent fields come together to present their
              work, learn from others, and celebrate.
            </Typography>
            <Typography variant="h3">Gather</Typography>
            <Typography>
              Each event is unique in the way they choose to host and organize
              for WIAD. For 2022, the local LA chapter used one of their
              sponsors,{" "}
              <StyledExternalLink href="https://app.gather.town/app">
                Gather
              </StyledExternalLink>{" "}
              as the hosting platform.
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
        <Grid
          item
          alignSelf="center"
          xs={12}
          sm={2}
          className={cx("project-step")}
        >
          <Typography variant="h2">Objective</Typography>
        </Grid>

        <Grid container spacing={2} item xs={12} sm={10}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3">Goals</Typography>
            <Typography>
              Host an event that fosters community and excitement for the field
              of Information Architecture!
            </Typography>
            <Typography>
              Design a space that integrates the WIAD 2022 theme of "A Connected
              World" and create materials that ensure a smooth user experience.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3">Should Include</Typography>
            <Typography>Sponsors and presenting speakers</Typography>
            <Typography>
              Attracting an audience to attend the local LA chapter
            </Typography>
            <Typography>Thanks and appreciation to event sponsors</Typography>

            <Typography>
              Integrated materials and information from event sponsors
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid container item xs={12} className={cx("project-section")}>
        <Grid
          item
          alignSelf="center"
          xs={12}
          sm={2}
          className={cx("project-step")}
        >
          <Typography variant="h2">Discovery</Typography>
        </Grid>
        <Grid container spacing={1} item xs={12} sm={10}>
          <Grid item xs={12}>
            <Typography variant="h3">What's Needed for WIAD?</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3">Learning New Technology</Typography>
            We found that our platform, Gather, seemed to be very much in the
            development face and lacked a lot of usability and acccesibility
            features. This made the barrier to entry for the event seemingly
            higher
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3">Pain Points</Typography>
            <ul className={cx("painpoints")}>
              <li>
                <Typography>
                  First WIAD for the volunteer team - lack of familiarity
                </Typography>
              </li>
              <li>
                <Typography>No process or resource documentation</Typography>
              </li>
              <li>
                <Typography>Gather usability and accessibilty</Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Grid>

      <Grid container item xs={12} className={cx("project-section")}>
        <Grid
          item
          alignSelf="center"
          xs={12}
          sm={2}
          className={cx("project-step")}
        >
          <Typography variant="h2">Approach</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          List steps
        </Grid>
      </Grid>

      <Grid container item xs={12} className={cx("project-section")}>
        <Grid
          item
          alignSelf="center"
          xs={12}
          sm={2}
          className={cx("project-step")}
        >
          <Typography variant="h2">Reflection</Typography>
        </Grid>
        <Grid container item xs={12} sm={10}>
          <Grid item xs={12}>
            <Typography variant="h3">The Experience</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h3">Would I Recommend Gather?</Typography>
            <Typography>
              I see Gather being better suited to groups that would use it for
              frequent occurences. An extended period of time to gain
              familiarity with the features and the limitations would be
              essential for a smooth user experience.
            </Typography>
            <Typography>
              At the stage of development that this platform was in during WIAD
              2022, a one-time event with unknown attendees is not an optimal
              use-case. I'd hold off on recommending it for these situations
              until more quality of life and accessiblity features have been
              integrated.
            </Typography>
            <Typography>
              Overall, Gather is pursuing an awesome concept and their
              partnership was extremely appreciated. Our team hopes that the
              feedback we were able to relay back to the team helps them to
              continue building a more connected world!
              <PublicIcon
                fontSize="small"
                className={cx("icon-align-center", "small-icon")}
              />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3">Here We Come, WIAD 2023!</Typography>
            <Typography>
              Our team came together to discuss and reflect on the things we'd{" "}
              <span className={cx("emphasis")}>stop</span>,{" "}
              <span className={cx("emphasis")}>continue</span>, and{" "}
              <span className={cx("emphasis")}>start</span> in order to create
              an even better experience for future WIAD events.
            </Typography>
            <Grid container spacing={1} item sm={12}>
              <Grid item xs={12} sm={4} className={cx("miro-container")}>
                <Image
                  src={retroStop}
                  alt="Miro board of things that should stop"
                  width={300}
                  height={300}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Image
                  src={retroContinue}
                  alt="Miro board of things we should keep doing"
                  width={300}
                  height={300}
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <Image
                  src={retroStart}
                  alt="Miro board of ideas to start"
                  width={300}
                  height={300}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="caption">
                  Team Retroactive Reflection Process on Miro - stop, continue,
                  start
                </Typography>
              </Grid>
              <Grid container item sm={12}>
                <Grid item xs={12}>
                  <Typography variant="h3">Key Takeaways</Typography>
                </Grid>
                <Grid item xs={12}>
                  <ul className={cx("key-takeaways")}>
                    <li>
                      <Typography>
                        More time to plan, organize, and onboard everyone as a
                        team
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        Documented Guide for general WIAD information, process &
                        resources{" "}
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        Develop a central "go-to" repository for assets and
                        project information
                      </Typography>
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WIADLA2022;
