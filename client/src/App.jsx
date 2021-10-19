import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import moment from 'moment';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import jwt from 'jwt-decode';
import { GlobalStyle, theme } from './Theme';
import Jobs from './components/Jobs/Jobs';
import NavBar from './components/NavBar/NavBar';
import Blog from './components/Blog/Blog';
import Signup from './components/Auth/Signup';
import Signin from './components/Auth/Signin';

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = document.cookie;
    if (token) {
      setUser(jwt(token.slice(6)));
    }
  }, [document.cookie]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Router>
          <NavBar user={user} />
          <Switch>
            <Route exact path="/">
              <Jobs />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route exact path="/signup">
              <Signup setUser={setUser} />
            </Route>
            <Route exact path="/signin">
              <Signin setUser={setUser} />
            </Route>
          </Switch>
        </Router>
        <h6 style={{ textAlign: 'center' }}>
          {moment().format('dddd, MMMM Do YYYY, h:mm:ss a')}
        </h6>
      </div>
    </ThemeProvider>
  );
};

export default App;
