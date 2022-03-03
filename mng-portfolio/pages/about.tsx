import { NextPage } from "next/types";
import classnames from "classnames/bind";
import styles from "../styles/layout.module.scss";

const cx = classnames.bind(styles);

const About: NextPage = () => {
  return <div className={cx("about-container")}>About Page</div>;
};

export default About;
