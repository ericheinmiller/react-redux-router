import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../views/home';
import Contact from '../views/contact';
import About from '../views/about';
import NoMatch from '../views/noMatch';

export default () => {
  return (
    <div>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};
