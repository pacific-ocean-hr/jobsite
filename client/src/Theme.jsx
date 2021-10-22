import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
  background: white;
  color: black;
  }
  * {
  font-family:${({ theme }) => theme.fontFamily};
  }
  .App {
    margin: 0 auto;
    max-width: 1280px;
  }
  .mainButton {
    background-color: ${({ theme }) => theme.color.teal};
    border: ${({ theme }) => `1px solid ${theme.color.purple}`};
    border-radius: 5px;
    color: ${({ theme }) => theme.color.white};
    font-size: 14px;
    padding: 10px 20px;
    text-transform: uppercase;
    &:hover {
      background-color: ${({ theme }) => theme.color.green};
      border: ${({ theme }) => `1px solid ${theme.color.purple}`};
      color: ${({ theme }) => theme.color.purple};
    }
  }
  .card {
    box-shadow: 1px 1px 2px rgb(121, 148, 150, .2);
    margin-bottom: 12px;
    font-size: 14px;
    border-radius: 8px;
    display: grid;
    background-color: white;
    padding: 12px;
  }
  .bigCard {
    background-color: white;
    border-radius: 6px;
    box-shadow: 1px 1px 2px rgb(121, 148, 150, .2);
    padding: 12px;
  }
`;

export const theme = {
  color: {
    black: '#14080E',
    purple: '#49475B',
    teal: '#799496',
    green: '#ACC196',
    yellow: '#E9EB9E',
    white: '#FFFFFF',
  },
  fontFamily: 'Rubik, sans-serif',
  fontSize: {
    text: '12px',
    button: '16px',
    large: '18px',
  },
};

// eslint-disable-next-line react/prop-types
const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
