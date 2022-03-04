import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import CaseStudyCard from "./ProjectCard";

import classnames from "classnames/bind";
import styles from "../styles/projects.module.scss";

const cx = classnames.bind(styles);

export default function Projects() {
  return (
    <>
      <Typography variant="h2">My Work</Typography>
      <Box sx={{ flexGrow: 1 }} className={cx("projects-container")}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <CaseStudyCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CaseStudyCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CaseStudyCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CaseStudyCard />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
