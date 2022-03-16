import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import StyledExternalLink from './StyledExternalLink';

const Error404 = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1">Woops!</Typography>
        <Typography>
          {' '}
          Looks like something may be missing. Use the navigation to try again.
        </Typography>
        <Typography>
          If there was a link that is broken, please let me know by{' '}
          <StyledExternalLink href="mailto: mngmay@gmail.com">
            contacting me!
          </StyledExternalLink>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Error404;
