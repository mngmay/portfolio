import Link from "next/link";
import classnames from "classnames/bind";
import styles from "../styles/layout.module.scss";
import resume from "../assets/May_Ng_UXR_Resume.pdf";

const cx = classnames.bind(styles);

export default function Navbar() {
  return (
    <div className={cx("nav-container")}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <a href={resume} target="_blank" rel="noreferrer">
        Resume
      </a>
      <Link href="/contact">Contact</Link>
    </div>
  );
}
