import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import CTAButton from "../CTAButton";

import classnames from "classnames/bind";
import utilStyles from "../../styles/utility.module.scss";
import sectionsStyles from "../../styles/sections.module.scss";

const styles = { ...utilStyles, ...sectionsStyles };

const cx = classnames.bind(styles);

export default function ContactMe() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className={cx("contact-me-container")}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h2">Let&#39;s Work Together!</Typography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            className={cx("contact")}
            justifyContent="center"
          >
            <Grid item xs={12}>
              <Typography>
                I&#39;m currently open to opportunities to join a full time team
                or collaborate on projects.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                What is it like working with me? What can I bring to the table
                as a person on your project? Here&#39;s just a few of the things
                you can expect out of your{" "}
                <span className={cx("emphasis")}>teammate experience</span> with
                May - the person.
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <CTAButton href="mail:mngmay@gmail.com" text="Contact Me" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
