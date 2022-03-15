import variables from './_variables.module.scss';
import { responsiveFontSizes, createTheme } from '@mui/material';


const muiTheme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: variables.seattleGray,
      },
      secondary: {
        main: variables.secondaryColor,
      },
      warning: {
        main: variables.alert,
      }
    },
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
        fontSize: 14,
        color: variables.seattleGray,
      },
      h4: {
        fontSize: 13,
        fontStyle: 'italic',
        color: variables.seattleGray,
      },
      h5: {
        fontSize: 14,
      },
      h6: {
        fontSize: 12,
      },
      navLink: {
        fontSize: 22,      
      },
      cardTitle: {
        fontSize: 25,
      },
      body1: {
        fontSize: 12,
      },
      body2: {
        fontSize: 11,
      },
      subtitle1: {
        fontSize: 12,
      },
      subtitle2: {
        fontSize: 12,
        fontStyle: 'italic',
        color: variables.seattleGray,
      },
      label: {
        fontSize: 18,
        color: variables.secondaryColor,
      },
      caption: {
        fontSize: 11,
        fontStyle: 'italic',
        color: variables.seattleGray,
      },
      disclaimer: {
        fontSize: 14,
        fontStyle: 'italic',
        color: variables.alert,
      },
      button: {
        fontSize: 12,
      },
    },
  }),

  { disableAlign: true }
);
export default muiTheme;
