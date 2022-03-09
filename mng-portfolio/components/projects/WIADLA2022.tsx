import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import classnames from "classnames/bind";
import Image from "next/image";
import projectStyles from "../../styles/projects/WIADLA2022.module.scss";
import utilStyles from "../../styles/utility.module.scss";

const styles = { ...projectStyles, ...utilStyles };
const cx = classnames.bind(styles);

const WIADLA2022 = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1">World IA Day - Los Angeles 2022</Typography>
      </Grid>
      <Grid item xs={12}>
        {/* Description */}
        <Typography variant="h2">The Project</Typography>
      </Grid>
      <Grid container item spacing={2} xs={12}>
        <Typography variant="h2">The Work</Typography>
        <Grid item xs={12}>
          {/* Research methods & why */}
          <Typography variant="h3">Research Methods</Typography>
        </Grid>
        <Grid item xs={12}>
          {/* What to look out for */}
          <Typography variant="h3">Considerations</Typography>
        </Grid>
      </Grid>

      <Grid container item spacing={2} xs={12}>
        <Typography variant="h2">The Future</Typography>
        <Grid item xs={12}>
          {/* Hypothesis */}
          <Typography variant="h3">Hypotheses</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WIADLA2022;
