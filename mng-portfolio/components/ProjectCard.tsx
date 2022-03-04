import { Typography } from "@mui/material";
import classnames from "classnames/bind";
import styles from "../styles/projects.module.scss";

const cx = classnames.bind(styles);

export default function ProjectCard() {
  return (
    <div className={cx("project-card-container")}>
      <Typography variant="h3">IAC Brand and Website Overhaul</Typography>
      <Typography>Description</Typography>
      <Typography>
        UX Research, IA, Content Strategy, UI Design, Web Development
      </Typography>
    </div>
  );
}
