import classnames from "classnames/bind";
import styles from "../../styles/layout.module.scss";
import CTAButton from "../CTAButton";
import SocialMedia from "./SocialMedia";

const cx = classnames.bind(styles);

export default function Hero() {
  return (
    <div className={cx("hero-image", "full-width")}>
      <div className={cx("hero-content")}>
        <div className={cx("hero-text")}>
          <div className={cx("intro-name")}>
            <p>Hi, my name is</p>
            <h1 className={cx("hero-myname")}>May Ng</h1>
          </div>
          <div className={cx("intro-description")}>
            <p>
              Curiousity and compassion driven <span>UX Researcher</span> who
              can code and drinks her coffee black.
            </p>
          </div>
        </div>
        <CTAButton href="mail:mngmay@gmail.com" text="Contact" />
        <SocialMedia />
      </div>
    </div>
  );
}
