import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import classnames from 'classnames/bind';
import StyledExternalLink from '../StyledExternalLink';
import PublicIcon from '@mui/icons-material/Public';
import Image from 'next/image';
import projectStyles from '../../styles/projects/projectPage.module.scss';
import utilStyles from '../../styles/utility.module.scss';
import {
  retroStop,
  retroContinue,
  retroStart,
} from '../../assets/projects/WIADLA2022';

const styles = { ...utilStyles, ...projectStyles };
const cx = classnames.bind(styles);

const WIADLA2022 = () => {
  return (
    <Grid container spacing={2} className={cx('case-study-container')}>
      <Grid item xs={12}>
        <Typography variant="h1">
          World IA Day
          <span className={cx('small-divider')}>/</span>
          LA
          <span className={cx('small-divider')}>/</span>
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
        className={cx('project-section')}
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
          className={cx('information')}
        >
          <Grid item xs={12} sm={6} className={cx('team')}>
            <ul>
              <li>
                <Typography>
                  <span className={cx('label')}>Client:</span>
                  <StyledExternalLink href="https://worldiaday.org/about">
                    WIAA
                  </StyledExternalLink>
                </Typography>
              </li>
              <li>
                <Typography>
                  <span className={cx('label')}>Sponsors: </span>
                  <StyledExternalLink href="https://app.gather.town/app">
                    Gather
                  </StyledExternalLink>
                  <span className={cx('small-divider')}>/</span>
                  <StyledExternalLink href="https://www.esri.com/en-us/home">
                    Esri
                  </StyledExternalLink>
                  <span className={cx('small-divider')}>/</span>
                  <StyledExternalLink href="https://www.wunderlandgroup.com/">
                    Wunderland Group
                  </StyledExternalLink>
                </Typography>
              </li>
              <li>
                <Typography>
                  <span className={cx('label')}> Contractor: </span>
                  <StyledExternalLink href="https://www.diadesign.io/">
                    DIA Design Guild
                  </StyledExternalLink>
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} className={cx('details')}>
            <ul>
              <li>
                <Typography>
                  <span className={cx('label')}>My Role: </span> Event
                  Experience Designer
                  <span className={cx('small-divider')}>/</span>
                  <br />
                  Event Volunteer
                </Typography>
              </li>

              <li>
                <Typography>
                  <span className={cx('label')}>Duration: </span> 2 months total{' '}
                  <span className={cx('small-divider')}>/</span> <br />2 weeks
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
              </StyledExternalLink>{' '}
              is a professional event that&#39;s held on the same day in cities
              across the world. People with an interest in Information
              Architecture and adjacent fields come together to present their
              work, learn from others, and celebrate.
            </Typography>
            <Typography variant="h3">Gather</Typography>
            <Typography>
              Each event is unique in the way they choose to host and organize
              for WIAD. For 2022, the local LA chapter used one of the sponsors,{' '}
              <StyledExternalLink href="https://app.gather.town/app">
                Gather
              </StyledExternalLink>{' '}
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

      <Grid container item xs={12} className={cx('project-section')}>
        <Grid
          item
          alignSelf="center"
          xs={12}
          sm={2}
          className={cx('project-step')}
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
              Design a space that integrates the WIAD 2022 theme of{' '}
              <span className={cx('emphasis')}>
                &#34;A Connected World&#34;
              </span>{' '}
              and create materials that ensure a smooth user experience.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3">Must Haves</Typography>
            <ul className={cx('must-haves')}>
              <li>
                <Typography>Sponsors and presenting speakers</Typography>
              </li>
              <li>
                <Typography>
                  Attracting an audience to attend the local LA chapter
                </Typography>
              </li>
              <li>
                <Typography>
                  Integrated materials and information from event sponsors
                </Typography>
              </li>
              <li>
                <Typography>
                  Live streaming to Vito and saved video recordings of the
                  conference
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Grid>

      <Grid container item xs={12} className={cx('project-section')}>
        <Grid
          item
          alignSelf="center"
          xs={12}
          sm={2}
          className={cx('project-step')}
        >
          <Typography variant="h2">Discovery</Typography>
        </Grid>
        <Grid container spacing={1} item xs={12} sm={10}>
          <Grid item xs={12}>
            <Typography variant="h3">What&#39;s Needed for WIAD?</Typography>
          </Grid>
          <Grid container spacing={2} item xs={12}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h3">Learning New Technology</Typography>
              We found that our platform, Gather, seemed to be very much in the
              development face and lacked a lot of usability and acccesibility
              features. This made the barrier to entry for the event seemingly
              higher
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="h3">Pain Points</Typography>
              <ul className={cx('painpoints')}>
                <li>
                  <Typography>
                    Only 2 months to organize (6+ months typical)
                  </Typography>
                </li>
                <li>
                  <Typography>
                    First WIAD for the volunteer teammeant a lack of familiarity
                  </Typography>
                </li>
                <li>
                  <Typography>No process or resource documentation</Typography>
                </li>
                <li>
                  <Typography>
                    Gather usability and accessibilty was{' '}
                  </Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container item xs={12} className={cx('project-section')}>
        <Grid
          item
          alignSelf="center"
          xs={12}
          sm={2}
          className={cx('project-step')}
        >
          <Typography variant="h2">Approach</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Typography variant="h3">
            Identifying Sponsor Needs & Expectations
          </Typography>
          <Typography>
            Sponsors reached out to us to host the event. Esri wanted to do a
            presentation. Wunderland ??? What else was involved? Gather
            approached us?
          </Typography>
          <Typography variant="h3">Recruiting Volunteers</Typography>
          <Typography>
            May came in about 2 weeks before the event? What about the rest?
            Reach out anywhere besides DIA?
          </Typography>
          <Typography variant="h3">Coordinating Marketing Efforts</Typography>
          <Typography>
            Social media and email campaigns. Volunteers Sophie and Jane led the
            charge writing materials to post on DIA and WIAD&#39;s various
            accounts. Late ramp up meant our team had to gain traction fast, and
            made posts almost daily once we were within a couple weeks of the
            event.
          </Typography>
          <Typography variant="h3">
            Design the Space & Onboarding Materials
          </Typography>
          <Typography>
            Learning Gather, thought process for the materials created and the
            design
          </Typography>
          <Typography variant="h3">Video Technology & Dry Run</Typography>
          <Typography>OBS, Vito, Speaker Rehearsal and map testing.</Typography>
          <Typography variant="h3">Thank Yous & Goodie Bags</Typography>
          <Typography>
            Let attendees and sponsors know how much we appreciated their
            participation and provide access to claiming a goodie bag with
            things from our sponsors.
          </Typography>
        </Grid>
      </Grid>

      <Grid container item xs={12} className={cx('project-section')}>
        <Grid
          item
          alignSelf="center"
          xs={12}
          sm={2}
          className={cx('project-step')}
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
              use-case. I&#39;d hold off on recommending it for these situations
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
                className={cx('icon-align-center', 'small-icon')}
              />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3">Here We Come, WIAD 2023!</Typography>
            <Typography>
              Our team came together to discuss and reflect on the things
              we&#39;d <span className={cx('emphasis')}>stop</span>,{' '}
              <span className={cx('emphasis')}>continue</span>, and{' '}
              <span className={cx('emphasis')}>start</span> in order to create
              an even better experience for future WIAD events.
            </Typography>
            <Grid container spacing={1} item sm={12}>
              <Grid item xs={12} sm={4} className={cx('miro-container')}>
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
                  <ul className={cx('key-takeaways')}>
                    <li>
                      <Typography>
                        Build in more time to plan, organize, and onboard
                        everyone as a team and a lot of pain points would be
                        less stressful
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        Documented guide for general WIAD information, process &
                        resources will make it easier for the next team and make
                        volunteering to organize less intimidating
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        Develop a central &#34;go-to&#34; repository for assets
                        and project information to help everyone be on the same
                        page
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
