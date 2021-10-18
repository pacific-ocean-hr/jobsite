import React from 'react';
import { ThemeProvider } from 'styled-components';
import moment from 'moment';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle, theme } from './Theme';
import Jobs from './components/Jobs/Jobs';
import NavBar from './components/NavBar/NavBar';
import Blog from './components/Blog/Blog';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Jobs />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
        </Switch>
      </Router>
      <h6 style={{ textAlign: 'center' }}>
        {moment().format('dddd, MMMM Do YYYY, h:mm:ss a')}
      </h6>
    </div>
  </ThemeProvider>
);

export default App;
