import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import Registration from './components/Registration/Registration';
import Copyright from './components/copyright/Copyright';
import HomePage from './components/Home/HomePage';


const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/register" exact component={Registration} />
        <Redirect to="/" />
      </Switch>
      <Copyright />
    </>
  );
}

export default withRouter(App);
