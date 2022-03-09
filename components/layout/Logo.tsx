import Link from "next/link";
import classnames from "classnames/bind";
import layoutStyles from "../../styles/layout.module.scss";
import utilStyles from "../../styles/utility.module.scss";

import { Typography } from "@mui/material";

const styles = { ...layoutStyles, ...utilStyles };
const cx = classnames.bind(styles);

export default function Logo() {
  return (
    <Link href="/" passHref>
      <div className={cx("logo")}>
        <div className={cx("logo-abbrv")}>
          <span className={cx("logo-m")}>M</span>
          <span className={cx("logo-n")}>N</span>
        </div>
        <Typography variant="subtitle1" className={cx("logo-full-name")}>
          May Ng
        </Typography>
      </div>
    </Link>
  );
}
