import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import PanToolIcon from "@mui/icons-material/PanTool";
import CoffeeIcon from "@mui/icons-material/Coffee";
import PetsIcon from "@mui/icons-material/Pets";
import CTAButton from "./../CTAButton";

import classnames from "classnames/bind";
import utilStyles from "../../styles/utility.module.scss";
import sectionStyles from "../../styles/sections.module.scss";

const styles = { ...utilStyles, ...sectionStyles };

const cx = classnames.bind(styles);

export default function AboutSummary() {
  return (
    <>
      <Typography variant="h2">Who I Am</Typography>
      <Box sx={{ flexGrow: 1 }} className={cx("section", "about-container")}>
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

            <Grid container item direction="row" justifyContent="center">
              <Typography className={cx("fun-facts")}>
                <PanToolIcon className={cx("icon", "mirror")} />
                I'm a leftie
                <br />
                <CoffeeIcon className={cx("icon")} /> I drink my coffee black
                yet love milk tea (50% sweet + boba)
                <br /> <PetsIcon className={cx("icon")} />
                I'm that person who looks longingly at your pet as we pass on
                the street
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid container item direction="row" justifyContent="center">
          <CTAButton href="/about" text="Learn More About Me" />
        </Grid>
      </Box>
    </>
  );
}
