import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './routes/home.js';
import Team from './routes/ourTeam.js';
import Program from './routes/ourProgram.js';
import Contact from './routes/contact.js';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/team" component={Team}/>
      <Route path="/program" component={Program}/>
      <Route path="/contact" component={Contact}/>
    </Switch>
  </main>
);

export default Routes;
