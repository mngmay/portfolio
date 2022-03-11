import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import classnames from 'classnames/bind';
import StyledExternalLink from '../StyledExternalLink';
import projectStyles from '../../styles/projects/projectPage.module.scss';
import utilStyles from '../../styles/utility.module.scss';
import CTAButton from '../CTAButton';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const styles = { ...utilStyles, ...projectStyles };
const cx = classnames.bind(styles);

const IAC2022 = () => {
  return (
    <Grid container spacing={2} className={cx('case-study-container')}>
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
          <Grid item xs={12} className={cx('disclaimer')}>
            <Typography variant="disclaimer">
              This project is still underway. Below is my current proposal on
              how I&#39;d conduct this study to meet our client and user
              objectives.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ul className={cx('team')}>
              <li>
                <Typography>
                  <span className={cx('label')}>Client:</span>
                  <StyledExternalLink href="https://www.theiaconference.com/">
                    IAC
                  </StyledExternalLink>
                </Typography>
              </li>
              <li>
                <Typography>
                  <span className={cx('label')}>Sponsor:</span>
                  <StyledExternalLink href="https://www.sanity.io/">
                    Sanity
                  </StyledExternalLink>
                </Typography>
              </li>
              <li>
                <Typography>
                  <span className={cx('label')}> Contractor:</span>
                  <StyledExternalLink href="https://www.diadesign.io/">
                    DIA Design Guild
                  </StyledExternalLink>
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ul className={cx('details')}>
              <li>
                <Typography>
                  <span className={cx('label')}>My Role:</span> UXR, IA, Content
                  Strategy
                </Typography>
              </li>

              <li>
                <Typography>
                  <span className={cx('label')}>Duration:</span> ~5-7 months
                  (volunteer hours)
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3">IAC</Typography>
            <Typography>
              The{' '}
              <StyledExternalLink href="https://www.theiaconference.com/">
                IAC
              </StyledExternalLink>{' '}
              is a conference that offers professional talks and workshops on
              the field of Information Architecture. In addition to the event,
              it offers recordings of the speaker sessions as a resource to
              those who attend for the year. This event is rebuilt from the
              ground up annually, with each iteration having its own organizer
              leads and website.
            </Typography>

            <Typography variant="h3">Problem Space</Typography>
            <Typography>
              With a history of over 20 years, the constant change of
              organizers, volunteers, and technology platforms has resulted in
              inconsistent content models, gaps in knowledge, and an extremely
              strenuous adoption process for the succeeding team.
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
            <Typography variant="h3">Goal</Typography>
            <Typography>
              Make the adoption and management of IAC easier for future
              organizers by creating a consistent and scalable content model.
            </Typography>
            <Typography>
              Build and migrate the new site with existing content and create
              supporting documentation and repositories as needed.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3">Client Wants</Typography>

            <Typography>
              A permanent website that will be maintained.{' '}
            </Typography>
            <Typography variant="body2" className={cx('emphasis', 'row-start')}>
              Single Event Model <ArrowRightAltIcon /> Permanent Brand Model.
            </Typography>

            <Typography>
              To use{' '}
              <StyledExternalLink href="https://www.sanity.io/">
                Sanity
              </StyledExternalLink>{' '}
              as the headless CMS for managing data moving forward.
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
          <Typography variant="h2">Discovery</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Typography variant="h3">
            Learn from &#34;Knowledge Holders&#34;
          </Typography>

          <Typography>
            Our fresh team of volunteers needed to identify who to talk to in
            the community to get as much of the picture as possible. We talked
            with stakeholders from IAC, Sanity, and as many volunteers as we
            could get in touch with to learn the history of IAC and identify
            where this project was in the process.
          </Typography>
          <Typography>
            It was clear speaking with those who have managed IAC, that the
            website and content were a sore spot. The clamor to organize a large
            scale event always took priority to ensure the show goes on.
          </Typography>

          <Grid item xs={12}>
            <Typography variant="h3">Pain Points</Typography>

            <ul className={cx('painpoints')}>
              <Typography>
                <li>
                  A decentralized and volunteer based team - inconsistent
                  availability and easily silo&#39;d
                </li>
              </Typography>
              <Typography>
                <li>
                  Unclear lead for projects within the organization and who had
                  final approval
                </li>
              </Typography>
              <Typography>
                <li>
                  Identifying existing work and what we can take on without
                  duplicating or invaliding previous efforts
                </li>
              </Typography>
            </ul>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h3">What We&#39;re Working With</Typography>
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

      <Grid container item xs={12} className={cx('project-section')}>
        <Grid
          item
          alignSelf="center"
          xs={12}
          sm={2}
          className={cx('project-step')}
        >
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
              This project&#39;s priority is on the organizer experience. The
              insights that our team uncovers from users will be used to
              determine a model that is sustainable and scalable for the
              internal teams.
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
          <Grid
            container
            justifyContent="center"
            item
            xs={12}
            className={cx('slidedeck')}
          >
            <CTAButton
              href="https://www.canva.com/design/DAE6Uu8Db6E/j3B_7DiXtwsm8rrHhAZlLQ/view?utm_content=DAE6Uu8Db6E&utm_campaign=designshare&utm_medium=link&utm_source=shareyourdesignpanel"
              text="Research Plan Slide Deck"
              external
            />
          </Grid>
          <Grid container spacing={2} item xs={12}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h3">Generative</Typography>
              <ul>
                <li>
                  <Typography>
                    <span className={cx('label')}> Existing Research:</span> IA
                    & IAC Community Research is currently under evaluation by
                    another team and will be reviewed and taken into
                    consideration for this project.
                  </Typography>
                </li>

                <li>
                  <Typography>
                    <span className={cx('label')}>Early User Interviews:</span>{' '}
                    Focus on current organizer/volunteer experience, user mental
                    model of conference value and logistics, relationship to
                    professional growth, and content/resources considered
                    worthwhile and desirable.
                  </Typography>
                </li>
                <li>
                  <Typography>
                    <span className={cx('label')}>Late User Interviews:</span>{' '}
                    Re-evaluate organizer & volunteer impression and ability to
                    understand and adopt the new process.
                  </Typography>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h3">Evaluative</Typography>

              <Typography>
                <span className={cx('label')}>A/B Tests:</span> Time/clicks for
                users to find information or do a call to action. Which design
                feels more compelling, inclusive, and community driven? Can we
                validate what contributes to this impression? Gain baseline data
                and measurement for improvements.
              </Typography>
              <Typography>
                <span className={cx('label')}>Tree Tests:</span> Can users find
                core information (date, registration, program schedule, help,
                etc.) they need? How do they search for these? What else do they
                expect to find? Where does their confusion, if any, come up?
              </Typography>
              <Typography>
                <span className={cx('label')}>End to End Testing:</span>{' '}
                Validate that users are able to achieve all necessary
                functionality and have a painless experience visiting the site.
              </Typography>
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
          <Typography variant="h2">Findings</Typography>
        </Grid>
        <Grid container spacing={1} item xs={10}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3">What We Hope to Learn</Typography>
            <ul className={cx('learnings')}>
              <li>
                <Typography>
                  What information is vital to ensure proper adoption and
                  management of IAC events?
                </Typography>
              </li>
              <li>
                <Typography>
                  What encourages or discourages participation from volunteers
                  and attendees?
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3">Did We Meet Our Objective?</Typography>
            <Typography className={cx('success-yes', 'emphasis')}>
              Yes, if...
            </Typography>
            <ul className={cx('success')}>
              <li>
                <Typography>
                  Time to launch a new event page is reduced
                </Typography>
              </li>
              <li>
                <Typography>
                  Clear standard for content management and process is easy to
                  understand for organizers
                </Typography>
              </li>
              <li>
                <Typography>
                  Users are able to complete fundamental tasks and find content
                  of interest
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
          <Typography variant="h2">Reflection</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Typography variant="h3">Hypotheses</Typography>
          <Typography>
            Migrating to a persistent and consistent data model will likely
            remove some blockers and hesitance towards getting involved with
            IAC.
          </Typography>
          <Typography>
            A lot of content bloat will be cut, leaving streamlined and
            simplified IA and content. This will result in a smoother user
            experience and stronger understanding of IAC and its offerings.
          </Typography>
          <Typography>
            Consolidation and standardization of conference resources will
            create opportunity to provide different offerings and more value.
            This has potential to reach a wider and more diverse audience and
            generate year-round revenue.
          </Typography>

          <Grid container item xs={12} sm={10} className={cx('impact')}>
            <Grid item xs={12}>
              <Typography variant="h3">Impact</Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography variant="body2">
                Smoother organizer and attendee experience
              </Typography>
            </Grid>
            <Grid container item xs={2}>
              <ArrowRightAltIcon fontSize="large" />
            </Grid>
            <Grid item xs={5}>
              <Typography variant="body2" className={cx('emphasis')}>
                Increased numbers in volunteers and newcomers
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography variant="body2">
                Stronger brand and offerings
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <ArrowRightAltIcon fontSize="large" />
            </Grid>
            <Grid item xs={5}>
              <Typography variant="body2" className={cx('emphasis')}>
                Increased validity as a major player in the field of IA
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography variant="body2">
                Potential year-round revenue generation
                <br /> (subcription content)
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <ArrowRightAltIcon fontSize="large" />
            </Grid>
            <Grid item xs={5}>
              <Typography variant="body2" className={cx('emphasis')}>
                Improved future events and attracting a more diverse set of
                users
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default IAC2022;
