import Head from 'next/head';
import { NextPage } from 'next/types';
import classnames from 'classnames/bind';
import GalleryCard from '../components/GalleryCard';
import { Grid, Typography } from '@mui/material';
import utilStyles from '../styles/utility.module.scss';
import aboutStyles from '../styles/about.module.scss';
import { aboutMayImages, hobbyImages } from '../constants/data';
import StyledExternalLink from '../components/StyledExternalLink';

const styles = { ...utilStyles, ...aboutStyles };
const cx = classnames.bind(styles);

const About: NextPage = () => {
  // TODO: center gallery cards in mobile - unknown right margin on card-container
  return (
    <>
      <Head>
        <title>May Ng - About</title>
        <meta
          name="description"
          content="Learn more about May Ng and her story"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid
        container
        spacing={2}
        item
        xs={12}
        className={cx('about-container')}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
          className={cx('about-banner')}
        >
          <Grid item xs={12} sm={6} className={cx('about-picture')} />
          <Grid item xs={12} sm={6} className={cx('quote')}>
            <Typography variant="h3">
              “I have no special talent, I am only passionately curious”
            </Typography>
            <Typography variant="subtitle1" className={cx('quoter')}>
              - Albert Einstein
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} item xs={12}>
          <Grid item xs={12}>
            <Typography variant="h1">My Story</Typography>
          </Grid>
          <Grid item xs={12} sm={9} className={cx('story')}>
            <Typography>
              I&#39;m a first generation Chinese American woman who grew up in a
              small city in Washington state. A child of immigrant parents who
              worked hard to own and run their small business, I followed what{' '}
              <StyledExternalLink href="https://en.wikipedia.org/wiki/Subtle_Asian_Traits">
                Subtle Asian Traits
              </StyledExternalLink>{' '}
              would call the &#34;typical path&#34; of an Asian child.
            </Typography>
            <Typography>
              I studied hard and kept advancing in school until I graduated
              college and got my first career-type job. I found that while I was
              fine doing whatever came along, I wasn&#39;t sure what I actually
              wanted to spend a majority of my life doing. &#34;Follow your
              passion&#34;, while already questionable advice at times,
              wasn&#39;t even advice I knew how to follow.
            </Typography>
            <Typography>
              Without a clear life-calling, I&#39;ve learned to take every job
              as an opportunity to reflect on what aspects of work I enjoyed
              most, what I&#39;m not as fond of, and learn about things beyond
              the scope of my role incase that might spark an interest. After
              getting to work in a few different professional fields and
              industries, I&#39;ve been fortunate enough to find the field of
              UX.
            </Typography>
            <Typography>
              UX blends the relationship building, creative problem solving, and
              technical side of my former experiences into a wide array of
              delighfully dynamic roles. From research, information
              architecture, content strategy, or design, I think may have found
              something to call my career passion.
            </Typography>

            <Typography>
              Besides exploring my curiousity in my professional life, I also
              love to try new creative hobbies. While the commitment to each
              hobby may vary, I can always trust that there&#39;s always
              something exciting to learn! I try to prioritize good food,
              exploring new places, and spending time with the important people
              in my life.
            </Typography>
          </Grid>
          <Grid
            container
            spacing={1}
            item
            xs={12}
            sm={3}
            className={cx('may-gallery')}
          >
            {aboutMayImages.map(({ img, description }) => (
              <Grid item xs={12} key={`${img}`}>
                <GalleryCard img={img} description={description} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
        >
          <Grid item xs={12} sm={4}>
            <Typography variant="h3">Current Pandemic Hobby List:</Typography>
            <ul className={cx('hobbies')}>
              <li>
                <Typography>Art</Typography>
              </li>
              <li>
                <Typography>
                  Baking Bread - (Sourdough starter&#39;s name is Kenny and I
                  almost killed him)
                </Typography>
              </li>
              <li>
                <Typography>Ceramics - Throwing Pottery</Typography>
              </li>
              <li>
                <Typography>Houseplants</Typography>
              </li>
              <li>
                <Typography>Weightlifting & Spin-Cycling </Typography>
              </li>
              <li>
                <Typography>Woodworking & Blacksmithing </Typography>
              </li>
            </ul>
          </Grid>
          <Grid
            container
            spacing={1}
            item
            xs={12}
            sm={8}
            className={cx('hobby-gallery')}
          >
            {hobbyImages.map(({ img, description }) => (
              <Grid item xs={12} sm={4} key={`${img}`}>
                <GalleryCard img={img} description={description} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid container item spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2">Thank You!</Typography>
          </Grid>
          <Grid item xs={12} className={cx('support-network')}>
            <Typography>
              I wouldn&#39;t have had the privilege of the jobs that I&#39;ve
              had and the risks that I&#39;ve taken without an amazing support
              network. Endless gratitude to the people who have helped me on my
              journey, with special shout outs to those who keep me hopeful.
            </Typography>
            <Typography>
              <Typography variant="label">UX: </Typography>
              Grace Lau, Jill Christ, Lorelei Lin
            </Typography>
            <Typography>
              <Typography variant="label">Coding & Development: </Typography>
              Tommy Coleman, Ethan Hickey, Kevin Tou, Justine Lai, Jessica Chiu,
              Abby Tiffany, Rosa Pham
            </Typography>
            <Typography>
              <Typography variant="label">Business: </Typography> Jackie Kelley,
              Jackie Kiogima
            </Typography>
            <Typography>
              <Typography variant="label">Life: </Typography>
              James Stuber and my family
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
