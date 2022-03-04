import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import PanToolIcon from "@mui/icons-material/PanTool";
import CoffeeIcon from "@mui/icons-material/Coffee";
import PetsIcon from "@mui/icons-material/Pets";
import FavoriteIcon from "@mui/icons-material/Favorite";

import classnames from "classnames/bind";
import styles from "../styles/about.module.scss";
import CTAButton from "./CTAButton";

const cx = classnames.bind(styles);

export default function AboutSummary() {
  return (
    <>
      <Typography variant="h2">Who I Am</Typography>
      <Box sx={{ flexGrow: 1 }} className={cx("about-section")}>
        <Grid container spacing={2}>
          <Grid item xs={12} className={cx("past-self")}>
            <ul className={cx("past-roles")}>
              <Typography>I've been the:</Typography>
              <li>End User</li>
              <li>HR Partner</li>
              <li>Recruiter</li>
              <li>Web Developer</li>
            </ul>
            <Typography>Now, I'm a multi-faceted</Typography>
            <Typography variant="h2">UX Researcher</Typography>
          </Grid>
          <Grid item xs={12} className={cx("mini-bio")}>
            <Typography>
              I lean into my belief that UX has the power to bring evolving
              compassion to the human experience in a world that is increasingly
              reliant on machines and technology.
            </Typography>
            <Typography>
              Curiousity and empathy drive me to learn about the people around
              us and craft solutions built on understanding and technical
              know-how.
            </Typography>
            <Typography>
              I'm a leftie <PanToolIcon className={cx("icon", "mirror")} />,
              drink my coffee black <CoffeeIcon className={cx("icon")} />, and
              will be that person who looks longingly at your dog as you pass me
              on the street <PetsIcon className={cx("icon")} />
              <FavoriteIcon className={cx("icon")} />.
            </Typography>
          </Grid>
        </Grid>
        <Grid container item direction="row" justifyContent="center">
          <CTAButton href="/about" text="Learn More About Me" />
        </Grid>
      </Box>
    </>
  );
}
