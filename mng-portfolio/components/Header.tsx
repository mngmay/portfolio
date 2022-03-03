import Navbar from "./Navbar";
import classnames from "classnames/bind";
import styles from "../styles/layout.module.scss";

const cx = classnames.bind(styles);

export default function Header() {
  return (
    <div className={cx("header-container")}>
      <Navbar />
    </div>
  );
}
