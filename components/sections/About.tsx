import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PanToolIcon from '@mui/icons-material/PanTool';
import CoffeeIcon from '@mui/icons-material/Coffee';
import PetsIcon from '@mui/icons-material/Pets';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import CTAButton from './../CTAButton';
import classnames from 'classnames/bind';
import utilStyles from '../../styles/utility.module.scss';
import sectionStyles from '../../styles/sections.module.scss';

const styles = { ...utilStyles, ...sectionStyles };

const cx = classnames.bind(styles);

export default function AboutSummary() {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ flexGrow: 1 }} className={cx('section', 'about-container')}>
      <Grid container className={cx('who')}>
        <Grid item xs={12}>
          <Typography variant="h2">Who I Am</Typography>

          <Grid item xs={12} className={cx('mini-bio')}>
            <Typography>
              In a world reliant on machines, I view UX Research as a superpower
              that leads to building solutions centered on compassion to the
              human experience.
            </Typography>
            <Typography>
              If I were a cat, curiousity would have killed me by now. Luckily,
              as a person, I&#39;ve created opportunities for myself to explore
              different fields of interest. My exploration has led me to build a
              wide range of professional skills and knowledge that are utilized
              together in harmony within the field of UX.
            </Typography>
            <Grid item xs={12} className={cx('past-self')}>
              <ul className={cx('past-roles')}>
                <li>End User</li>
                <ArrowForwardIosOutlinedIcon
                  color="primary"
                  className={cx(smDown && 'rotate90')}
                />
                <li>Recruiter</li>
                <ArrowForwardIosOutlinedIcon
                  color="primary"
                  className={cx(smDown && 'rotate90')}
                />
                <li>HR Partner</li>
                <ArrowForwardIosOutlinedIcon
                  color="primary"
                  className={cx(smDown && 'rotate90')}
                />
                <li>Developer</li>
                <li>
                  <ArrowForwardIosOutlinedIcon
                    fontSize="large"
                    color="warning"
                    className={cx(smDown && 'rotate90')}
                  />
                </li>
                <li>
                  <Typography variant="h2">UX Researcher</Typography>
                </li>
              </ul>
            </Grid>

            <Typography>
              Curiousity and empathy drive me to connect and learn from the
              experience of others. I thrive on uncovering context and using
              insights to guide product direction and solutions that are built
              on understanding and technical awareness.
            </Typography>

            <Grid
              container
              item
              xs={12}
              direction="row"
              justifyContent="center"
            >
              <Typography className={cx('fun-facts')}>
                <PanToolIcon className={cx('icon', 'mirror')} />
                I&#39;m a leftie
                <br />
                <CoffeeIcon className={cx('icon')} />
                I drink my coffee black yet love milk tea (50% sweet + boba)
                <br />
                <PetsIcon className={cx('icon')} />
                I&#39;m that person who looks longingly at your pet as we pass
                on the street
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        item
        direction="row"
        justifyContent="center"
        className={cx('learn-more-cta')}
      >
        <CTAButton href="/about" text="Learn More About Me" />
      </Grid>
    </Box>
  );
}
