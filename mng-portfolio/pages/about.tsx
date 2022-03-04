import Head from "next/head";
import { NextPage } from "next/types";
import classnames from "classnames/bind";
import styles from "../styles/layout.module.scss";

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
        <div>Picture placeholder</div>
        <div>
          “I have no special talent, I am only passionately curious” - Albert
          Einstein
        </div>
        <p>
          Hi I'm May. I've been known as a HR and Recruiting Partner. Developer.
          User Advocate. UX Researcher.
        </p>

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
          In my spare time I enjoy trying new creative hobbies and prioritize
          good food, travel, and activities with the people I'm closest with.{" "}
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
      </div>
    </>
  );
};

export default About;
