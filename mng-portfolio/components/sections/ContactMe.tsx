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
      <Typography variant="h2">Contact Me</Typography>
      <Box sx={{ flexGrow: 1 }} className={cx("contact-me-container")}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            I'm open to being contacted for job opportunities, collaborations,
            or even learning from one another. I remember what it was like to be
            pivoting into a new field (and still am) and am typically happy to
            provide any insight if it can help, time allowing.
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <CTAButton href="mail:mngmay@gmail.com" text="Contact Me" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
