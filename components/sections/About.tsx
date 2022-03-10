import React from "react";
import { forwardRef } from "react";
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

type AboutSummaryProps = {
  ref: React.MutableRefObject<HTMLInputElement>;
};

export default forwardRef(function AboutSummary({ ref }: AboutSummaryProps) {
  return (
    <>
      <Box
        sx={{ flexGrow: 1 }}
        className={cx("section", "about-container")}
        ref={ref}
      >
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h2">Who I Am</Typography>
          </Grid>
          <Grid item xs={12} className={cx("past-self")}>
            {/*Change to past roles -> UX Researcher */}
            <ul className={cx("past-roles")}>
              <Typography>I{`'`}ve been the:</Typography>
              <li>End User</li>
              <li>HR Partner</li>
              <li>Recruiter</li>
              <li>Developer</li>
            </ul>
            <Typography>Now, I{`'`}m a multi-faceted</Typography>
            <Typography variant="h2">UX Researcher</Typography>
          </Grid>
          <Grid item xs={12} className={cx("mini-bio")}>
            <Typography>
              I strive to apply UX as a superpower capable of bringing more
              compassion to the human experience in a world that is increasingly
              reliant on machines and technology.
            </Typography>
            <Typography>
              Curiousity and empathy drive me to connect and learn about the
              people around us. I thrive on uncovering insights on user behavior
              and use that knowledge to guide product direction and solutions
              built on understanding and technical know-how.
            </Typography>
            <Typography>
              I love to learn new things - exploring within my previous roles
              helped me to find coding and tech, and that's how I found my way
              to UX! If I were a cat, my curiousity would have killed me by now.
            </Typography>
          </Grid>

          <Grid container item xs={12} direction="row" justifyContent="center">
            <Typography className={cx("fun-facts")}>
              <PanToolIcon className={cx("icon", "mirror")} />I{`'`}m a leftie
              <br />
              <CoffeeIcon className={cx("icon")} />
              I drink my coffee black yet love milk tea (50% sweet + boba)
              <br />
              <PetsIcon className={cx("icon")} />I{`'`}m that person who looks
              longingly at your pet as we pass on the street
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          item
          direction="row"
          justifyContent="center"
          className={cx("learn-more-cta")}
        >
          <CTAButton href="/about" text="Learn More About Me" />
        </Grid>
      </Box>
    </>
  );
});
