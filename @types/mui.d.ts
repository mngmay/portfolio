import React from "react";

declare module '@mui/material/styles' {
    interface TypographyVariants {
      navLink: React.CSSProperties;
      cardTitle: React.CSSProperties;
      disclaimer: React.CSSProperties;
      label: React.CSSProperties;
    }
  
    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
      navLink?: React.CSSProperties;
      cardTitle?: React.CSSProperties;
      disclaimer?: React.CSSProperties;
      label?: React.CSSProperties;
    }
  }
  
  // Update the Typography's variant prop options
  declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
      navLink: true;
      cardTitle: true;
      disclaimer: true;
      label: true;
    }
  }
