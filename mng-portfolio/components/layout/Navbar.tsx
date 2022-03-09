import Link from "next/link";
import { Typography } from "@mui/material";
import classnames from "classnames/bind";
import layoutStyles from "../../styles/layout.module.scss";
import utilStyles from "../../styles/utility.module.scss";
import resume from "../../assets/May_Ng_UXR_Resume.pdf";

const styles = { ...utilStyles, ...layoutStyles };

const cx = classnames.bind(styles);

export default function Navbar() {
  // switch to hamburger if mobile
  return (
    <div className={cx("navbar", "link")}>
      <span>
        <Link href="/">
          <Typography variant="navLink">Home</Typography>
        </Link>
      </span>
      <span>
        <Link href="/about">
          <Typography variant="navLink">About</Typography>
        </Link>
      </span>
      <span>
        <a href={resume} target="_blank" rel="noreferrer">
          <Typography variant="navLink">Resume</Typography>
        </a>
      </span>
      <span>
        <a href="mailto: mngmay@gmail.com" target="_blank" rel="noreferrer">
          <Typography variant="navLink">Contact </Typography>
        </a>
      </span>
    </div>
  );
}
