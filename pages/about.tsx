import Head from "next/head";
import { NextPage } from "next/types";
import classnames from "classnames/bind";
import aboutStyles from "../styles/about.module.scss";
import GalleryCard from "../components/GalleryCard";
import { Typography } from "@mui/material";
import utilStyles from "../styles/utility.module.scss";
import galleryImages from "../constants/data";

const styles = { ...utilStyles, ...aboutStyles };
const cx = classnames.bind(styles);

const About: NextPage = () => {
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

      <div className={cx("about-container")}>
        <div className={cx("about-banner")}>
          <div className={cx("about-picture")} />
          <div className={cx("quote")}>
            <Typography variant="h2">
              “I have no special talent, I am only passionately curious”
            </Typography>
            <Typography variant="h2" className={cx("quoter")}>
              - Albert Einstein
            </Typography>
          </div>
        </div>
        <Typography variant="h1">My Story</Typography>
        <Typography>
          Hometown and upbringing, set path lack of passion. Achieved goals but
          then what?
        </Typography>
        <Typography>
          Gained exp in different jobs, seemed to fit only one aspect of my
          personality or values at a time. Found UX which lets me practice it
          all.
        </Typography>
        <Typography></Typography>

        <Typography>
          I thrive on trying new creative hobbies and then moving onto the next,
          there's always something new exciting to learn! I try to
          prioritize good food, travel, and spending time doing engaging
          activities with my friends.
        </Typography>
        <Typography variant="h3">
          Current Pandemic Hobby List Includes:
        </Typography>
        <ul>
          <li>
            Baking Bread - (Sourdough start's name is Kenny and I almost
            killed him)
          </li>
          <li>Houseplants</li>
          <li>Drawing and Painting</li>
          <li>Ceramics - Throwing Pottery</li>
          <li>Woodworking</li>
          <li>Yoga, (off-brand) Cycling, and Weightlifting</li>
        </ul>

        {/* 
        It takes a village, give a thanks and appreciation to the people who helped me to get here
        
        * Grace Lau and Jill Christ as my main UX Research & IA mentors, and all the people at DIA Design Guild
        * Matt Wong, Abby Tiffany, Rosalind - people who didn't know me but took time to tell me their exp and encourage me
        * Tommy Coleman, Ethan Hickey, Kevin Tou, Justine Lai for being the best team and friends I could ask for to get me through my dev days
        * Jackie K and Jackie K for mentoring and managing me during the start of my professional journey 
        * and many more awesome people who build my support network :) Without you I wouldn't be able to take the risks I have to try things
        */}

        <div className={cx("may-gallery")}>
          {galleryImages.map(({ img, description }) => (
            <GalleryCard img={img} description={description} key={`${img}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
