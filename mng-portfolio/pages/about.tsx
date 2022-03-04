import Head from "next/head";
import { NextPage } from "next/types";
import classnames from "classnames/bind";
import styles from "../styles/layout.module.scss";
import GalleryCard from "../components/GalleryCard";

import mtn from "./assets/may-mnt.jpeg";
import paint from "../assets/may-paint.jpeg";
import bread from "../assets/may-bread.jpeg";
import bread2 from "../assets/may-bread2.jpeg";
import plant from "../assets/may-plant.jpeg";
import pup from "../assets/may-pup.jpeg";
import weld from "../assets/may-weld.jpeg";
import woodworking from "../assets/may-woodworking.jpeg";

const cx = classnames.bind(styles);

const About: NextPage = () => {
  const galleryImages = [
    { img: paint, description: "Acrylic Paint" },
    { img: bread, description: "Sourdough Foccacia made with Kenny" },
    { img: bread2, description: "Sourdough made with Kenny" },
    {
      img: plant,
      description: "A very expensive plant that I did not buy",
    },
    { img: pup, description: "Hugging a puppy that isn't mine" },
    {
      img: weld,
      description: "Blacksmithin a knife that can only cut butter",
    },
    { img: woodworking, description: "Made a workbench!" },
  ];
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
        <div>Picture placeholder</div>
        <div className={cx("quote")}>
          “I have no special talent, I am only passionately curious” - Albert
          Einstein
        </div>
        <p>
          While my experience has been a windy road, what stands to be
          consistent is that I approach life as a life-long learner driven to
          understand the different pieces and perspectives that make up our
          human experience.
        </p>

        <p>
          First generation immigrant that followed the path expected of me.
          Didn't always know what I wanted. Took a few different explorations to
          gain experience to better identify and understand the aspects of my
          skills and interests and connect them to a field I could build a
          future in.
        </p>

        <p>
          I have hope that the field of UX can continue to foster compassion
          towards the human experience in a world that is increasingly run by
          machines and technology. I leverage my experiences and my knowledge to
          foster genuine connections with users and my partners who are experts
          in their fields.
        </p>

        <p>
          Enjoy giving back to the community and dedicate time to contribute
          through the design guild I'm a part of.
        </p>

        <p>
          I thrive on trying new creative hobbies and then moving onto the next,
          there's always something new exciting to learn! I try to prioritize
          good food, travel, and spending time doing engaging activities with my
          friends.
        </p>
        <p>Current Pandemic Hobby List Includes:</p>
        <ul>
          <li>
            Baking Bread - (Sourdough start's name is Kenny and I almost killed
            him)
          </li>
          <li>Houseplants</li>
          <li>Drawing and Painting</li>
          <li>Ceramics - Throwing Pottery</li>
          <li>Woodworking</li>
          <li>Yoga, (off-brand) Cycling, and Weightlifting</li>
        </ul>

        <div className={cx("may-gallery")}>
          {galleryImages.map(({ img, description }) => (
            <GalleryCard img={img} description={description} />
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
