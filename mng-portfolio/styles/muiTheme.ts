import variables from './_variables.module.scss';
import { responsiveFontSizes, createTheme } from '@mui/material';

const muiTheme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: [
        variables.sansSerif,
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ].join(','),
      htmlFontSize: 10,
      h1: {
        fontSize: 28,
      },
      h2: {
        fontSize: 22,
      },
      h3: {
        fontSize: 18,
      },
      h4: {
        fontSize: 16,
      },
      h5: {
        fontSize: 14,
      },
      h6: {
        fontSize: 12,
      },
      body1: {
        fontSize: 12,
      },
      body2: {
        fontSize: 10,
      },
      subtitle1: {
        fontSize: 20,
      },
      subtitle2: {
        fontSize: 12,
      },
      button: {
        fontSize: 12,
      },
    },
  }),
  { disableAlign: true }
);
export default muiTheme;
