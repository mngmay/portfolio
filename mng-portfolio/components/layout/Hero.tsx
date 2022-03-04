import { Typography } from "@mui/material";
import classnames from "classnames/bind";
import styles from "../../styles/layout.module.scss";
import CTAButton from "../CTAButton";
import SocialMedia from "./SocialMedia";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const cx = classnames.bind(styles);

export default function Hero() {
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
              I'm a <strong>UX Researcher</strong> in{" "}
              <strong>Seattle, WA</strong>
            </Typography>
          </div>
        </div>
        <div className={cx("hero-contact")}>
          <CTAButton href="mail:mngmay@gmail.com" text="Contact" dark />
          <SocialMedia />
        </div>
      </div>
      <div className={cx("learn-more")}>
        <Typography>Learn More</Typography>
        <ArrowDownwardIcon />
      </div>
    </div>
  );
}
