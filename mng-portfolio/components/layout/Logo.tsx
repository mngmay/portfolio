import Link from "next/link";
import classnames from "classnames/bind";
import styles from "../../styles/layout.module.scss";
import { useState } from "react";
import { Typography } from "@mui/material";

const cx = classnames.bind(styles);

export default function Logo() {
  const [hover, setHover] = useState(false);

  return (
    <Link href="/">
      <div
        className={cx("logo")}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className={cx("logo-abbrv")}>
          <span className={cx("logo-m")}>M</span>
          <span className={cx("logo-n")}>N</span>
        </div>
        <Typography variant="subtitle2" className={cx("logo-full-name")}>
          May Ng
        </Typography>
      </div>
    </Link>
  );
}
