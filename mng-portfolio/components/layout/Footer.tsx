import SocialMedia from "./SocialMedia";
import classnames from "classnames/bind";
import styles from "../../styles/layout.module.scss";

const cx = classnames.bind(styles);

export default function Footer() {
  return (
    <div className={cx("footer-container")}>
      <SocialMedia parent="footer-container" />
      <p className={cx("copyright")}>Designed and coded by May Ng © 2022 </p>
    </div>
  );
}
