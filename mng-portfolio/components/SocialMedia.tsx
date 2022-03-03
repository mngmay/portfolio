import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import classnames from "classnames/bind";
import styles from "../styles/footer.module.scss";

const cx = classnames.bind(styles);

export default function SocialMedia() {
  return (
    <div className={cx("social-media-container")}>
      <Link href="https://www.linkedin.com/in/mngmay/">
        <LinkedInIcon />
      </Link>
      <Link href="https://twitter.com/mngmay">
        <TwitterIcon />
      </Link>
    </div>
  );
}
