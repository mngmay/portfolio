import type { NextPage } from 'next';
import React, { useRef } from 'react';
import Head from 'next/head';
import Hero from '../components/layout/Hero';
import Projects from '../components/sections/Projects';
import About from '../components/sections/About';
import ContactMe from '../components/sections/ContactMe';
import classnames from 'classnames/bind';
import styles from '../styles/layout.module.scss';

const cx = classnames.bind(styles);

const Home: NextPage = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  function handleScrollClick(refTarget: React.RefObject<HTMLDivElement>) {
    if (refTarget && refTarget.current) {
      refTarget.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
    return;
  }

  return (
    <div>
      <Head>
        <title>May Ng - UX Researcher</title>
        <meta name="description" content="May Ng's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero handleScrollClick={() => handleScrollClick(aboutRef)} />
      <div className={cx('section')} ref={aboutRef}>
        <About />
      </div>
      <div className={cx('section')}>
        <Projects />
      </div>
      <div className={cx('section')}>
        <ContactMe />
      </div>
    </div>
  );
};

export default Home;
