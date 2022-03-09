import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const Error404 = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1">Woops! Looks like that is missing</Typography>
      </Grid>
    </Grid>
  );
};

export default Error404;
