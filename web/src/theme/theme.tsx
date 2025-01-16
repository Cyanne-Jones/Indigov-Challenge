'use client'
import { createTheme, ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#330072',
    },
    secondary: {
      main: '#f5b27e',
    },
  },
};

export const theme = createTheme(themeOptions);