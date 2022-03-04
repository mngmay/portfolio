import SocialMedia from "./SocialMedia";
import classnames from "classnames/bind";
import styles from "../../styles/layout.module.scss";

const cx = classnames.bind(styles);

export default function Footer() {
  return (
    <div className={cx("footer-container")}>
      <SocialMedia />
      <p className={cx("copyright")}>Design and coded by May Ng © 2022 </p>
    </div>
  );
}
