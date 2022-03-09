import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import CTAButton from "../CTAButton";

import classnames from "classnames/bind";
import styles from "../../styles/sections.module.scss";

const cx = classnames.bind(styles);

export default function ContactMe() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className={cx("contact-me-container")}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h2">Let{`'`}s Work Together!</Typography>
          </Grid>
          <Grid item xs={12} className={cx("contact")}>
            <Typography>
              Some of my most fulfilling work has come from happenstance.
            </Typography>
            <Typography>
              I{`'`}m open to opportunities to join a full time team or
              collaborate on projects and see where we can push to create better
              experiences for someone out there.
            </Typography>
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <CTAButton href="mail:mngmay@gmail.com" text="Contact Me" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
