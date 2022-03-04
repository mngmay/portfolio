import classnames from "classnames/bind";
import styles from "../../styles/layout.module.scss";

const cx = classnames.bind(styles);

export default function FullWidthBg() {
  return <div className={cx("full-width-bg")} />;
}
