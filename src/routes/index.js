import React from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from "./privateRoute"
import HomeContainer from "../containers/homeContainer"
import LoginContainer from "../containers/loginContainer"
// import RegisterContainer from "../containers/registerContainer"

function Routes({ authenticated }) {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" authenticated={authenticated}>
          <HomeContainer />
        </PrivateRoute>

        <Route path="/login">
          <LoginContainer />
        </Route>

{/*        <Route path="/register">
          <RegisterContainer />
        </Route>
  */}
      </Switch>
    </Router>
  )
}

export default Routes;
