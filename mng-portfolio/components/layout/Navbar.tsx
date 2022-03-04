import Link from "next/link";
import classnames from "classnames/bind";
import styles from "../../styles/layout.module.scss";
import resume from "../../assets/May_Ng_UXR_Resume.pdf";

const cx = classnames.bind(styles);

export default function Navbar() {
  // switch to hamburger if mobile
  return (
    <div className={cx("navbar")}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <a href={resume} target="_blank" rel="noreferrer">
        Resume
      </a>
      <a href="mailto: mngmay@gmail.com">Contact</a>
    </div>
  );
}
