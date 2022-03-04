import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/layout/Hero";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>May Ng - UX Researcher</title>
        <meta name="description" content="May Ng's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Projects />
    </div>
  );
};

export default Home;
