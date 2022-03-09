import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import classnames from "classnames/bind";
import styles from "../../styles/utility.module.scss";

const cx = classnames.bind(styles);

type SocialMediaProps = {
  parent: string;
};

export default function SocialMedia({ parent }: SocialMediaProps) {
  return (
    <div className={cx("social-media-container", `sm-${parent}`)}>
      <a href="mailto: mngmay@gmail.com">
        <EmailIcon className="social-icon" />
      </a>
      <a href="https://www.linkedin.com/in/mngmay/" target="_blank">
        <LinkedInIcon className="social-icon" />
      </a>
      <a href="https://twitter.com/mngmay" target="_blank">
        <TwitterIcon className="social-icon" />
      </a>
    </div>
  );
}
