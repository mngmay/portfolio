import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/layout/Hero";
import Projects from "../components/Projects";
import AboutSummary from "../components/AboutSummary";
import classnames from "classnames/bind";
import styles from "../styles/layout.module.scss";

const cx = classnames.bind(styles);

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>May Ng - UX Researcher</title>
        <meta name="description" content="May Ng's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <div className={cx("section")}>
        <AboutSummary />
      </div>
      <div className={cx("section")}>
        <Projects />
      </div>
    </div>
  );
};

export default Home;
