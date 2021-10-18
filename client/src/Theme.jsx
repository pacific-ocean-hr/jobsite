import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    black: '#14080E',
    purple: '#49475B',
    teal: '#799496',
    green: '#ACC196',
    yellow: '#E9EB9E',
    white: '#FFFFFF'
  },
  font: {
    primary: 'Roboto',
    secondary: 'sans-serif',
  },
  fontSize: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
