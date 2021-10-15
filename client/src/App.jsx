import Theme from './Theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from './components/Signin.jsx';

const App = () => {
  return (
    <Theme>
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Signin />
            </Route>
          </Switch>
        </Router>
      </div>
    </Theme>
  );
};
export default App;
