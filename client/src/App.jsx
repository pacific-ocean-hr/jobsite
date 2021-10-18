import React from 'react';
import Theme from './Theme';
import moment from 'moment';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from './components/Signin.jsx';
import Jobs from './components/Jobs/Jobs';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <Theme>
      <div className='App'>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <Jobs />
            </Route>
          </Switch>
        </Router>
        <h6 style={{ fontFamily: 'Sans-serif', textAlign: 'center' }}>
          {moment().format('dddd, MMMM Do YYYY, h:mm:ss a')}
        </h6>
      </div>
    </Theme>
  );
};

export default App;
