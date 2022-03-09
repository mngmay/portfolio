import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import ProjectCard from "./../ProjectCard";
import { projectData } from "../../constants/data.js";
import classnames from "classnames/bind";
import styles from "../../styles/projects.module.scss";

const cx = classnames.bind(styles);

export default function Projects() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className={cx("section", "projects-container")}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h2">My Work</Typography>
          </Grid>
          <Grid container spacing={2} item>
            {projectData.map(({ img, title, description, slug }) => (
              <Grid item xs={12} sm={6} md={4} key={title}>
                <ProjectCard
                  img={img}
                  title={title}
                  description={description}
                  slug={`projects/${slug}`}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}