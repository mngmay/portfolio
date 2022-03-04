import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import classnames from "classnames/bind";
import styles from "../../styles/layout.module.scss";

const cx = classnames.bind(styles);

export default function SocialMedia() {
  return (
    <div className={cx("social-media-container")}>
      <a href="mailto: mngmay@gmail.com">
        <EmailIcon className="social-icon" />
      </a>
      <a href="https://www.linkedin.com/in/mngmay/">
        <LinkedInIcon className="social-icon" />
      </a>
      <a href="https://twitter.com/mngmay">
        <TwitterIcon className="social-icon" />
      </a>
    </div>
  );
}
