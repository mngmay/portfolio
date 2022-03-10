import React from "react";
import { Typography } from "@mui/material";
import classnames from "classnames/bind";
import heroStyles from "../../styles/hero.module.scss";
import utilStyles from "../../styles/utility.module.scss";
import CTAButton from "../CTAButton";
import SocialMedia from "./SocialMedia";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const styles = { ...utilStyles, ...heroStyles };

const cx = classnames.bind(styles);

type HeroProps = {
  handleScrollClick: () => void;
};

export default function Hero({ handleScrollClick }: HeroProps) {
  return (
    <div className={cx("hero-image", "full-width")}>
      <div className={cx("hero-content")}>
        <div className={cx("hero-text")}>
          <div className={cx("intro-name")}>
            <Typography variant="subtitle1">Hi, my name is</Typography>
            <Typography variant="h1" className={cx("hero-myname")}>
              May Ng
            </Typography>
          </div>
          <div className={cx("intro-description")}>
            <Typography variant="subtitle1">
              I{`'`}m a <strong>UX Researcher</strong> in{" "}
              <strong>Seattle, WA</strong>
            </Typography>
          </div>
        </div>
        <div className={cx("hero-contact")}>
          <CTAButton href="mailto: mngmay@gmail.com" text="Contact" external />
          <SocialMedia parent="hero-contact" />
        </div>
      </div>
      <div className={cx("learn-more")} onClick={handleScrollClick}>
        <Typography>Learn More</Typography>
        <ArrowDownwardIcon />
      </div>
    </div>
  );
}
