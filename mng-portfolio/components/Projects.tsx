import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CaseStudyCard from "./CaseStudyCard";

import classnames from "classnames/bind";
import styles from "../styles/projects.module.scss";

const cx = classnames.bind(styles);

export default function Projects() {
  return (
    <Box sx={{ flexGrow: 1 }} className={cx("projects-container")}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CaseStudyCard />
        </Grid>
        <Grid item xs={6}>
          <CaseStudyCard />
        </Grid>
        <Grid item xs={6}>
          <CaseStudyCard />
        </Grid>
        <Grid item xs={6}>
          <CaseStudyCard />
        </Grid>
      </Grid>
    </Box>
  );
}
