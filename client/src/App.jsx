import React from "react";
import Theme from "./Theme";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signup from "./components/Signup.jsx";
import Signin from "./components/Signin.jsx";


const App = () => {
  return (
    <Theme>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/signup">
              <Signup/>
            </Route>
            <Route exact path="/signin">
              <Signin />
            </Route>
          </Switch>
        </Router>
      </div>
    </Theme>
  );
};
export default App;
