import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import CTAButton from "../CTAButton";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import CelebrationIcon from "@mui/icons-material/Celebration";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import classnames from "classnames/bind";
import utilStyles from "../../styles/utility.module.scss";
import sectionsStyles from "../../styles/sections.module.scss";
import StyledExternalLink from "../StyledExternalLink";

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
          <Grid container item xs={12} className={cx("contact")}>
            <Grid item xs={12}>
              <Typography>
                Have a project or cool opportunity you think I could be a fit
                for? I&#39;m currently open to opportunities to join a full time
                team or collaborate on projects.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3">
                What is it like working with me?
              </Typography>
              <ul className="teammate-perks">
                <li>
                  <Typography>
                    <RamenDiningIcon className={cx("icon")} />
                    You&#39;ll have someone to take a mild interest in what you
                    had for lunch (and maybe a future lunch buddy - if you want)
                  </Typography>
                </li>
                <li>
                  <Typography>
                    <CelebrationIcon className={cx("icon")} />
                    If you have a team activity that needs a hype-person, I
                    could be that person
                  </Typography>
                </li>
                <li>
                  <Typography>
                    <FormatListBulletedIcon className={cx("icon")} />
                    Never fear forgetting notes again - I&#39;m an avid
                    documentor of all things and love my{" "}
                    <StyledExternalLink href="https://www.notion.so/product">
                      Notion
                    </StyledExternalLink>{" "}
                    docs{" "}
                    <Typography variant="caption">#notsponsored</Typography>
                  </Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <CTAButton href="mailto:mngmay@gmail.com" text="Contact Me" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
