import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Theme from './Theme';
import Jobs from './components/Jobs/Jobs';
import Blog from './components/Blog/Blog';
import NavBar from './components/NavBar/NavBar';

const App = () => (
  <Theme>
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
    </div>
  </Theme>
);

export default App;
