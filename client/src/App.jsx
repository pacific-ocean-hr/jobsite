import React from 'react';
import Theme from './Theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from './components/Signin.jsx';
import Jobs from './components/Jobs/Jobs';

const App = () => {
  return (
    <Theme>
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Jobs />
            </Route>
          </Switch>
        </Router>
      </div>
    </Theme>
  );
};
export default App;
