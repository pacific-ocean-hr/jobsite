import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './Theme.jsx';
import moment from 'moment';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from './components/Signin.jsx';
import Jobs from './components/Jobs/Jobs';
import NavBar from './components/NavBar/NavBar';
import Notes from './components/Notes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className='App'>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <Jobs />
            </Route>
          </Switch>
        </Router>
        <h6 style={{ textAlign: 'center' }}>
          {moment().format('dddd, MMMM Do YYYY, h:mm:ss a')}
        </h6>
        <Notes></Notes>
      </div>
    </ThemeProvider>
  );
};

export default App;
