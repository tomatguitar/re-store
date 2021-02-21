import React from 'react';
import { HomePage, CartPage } from '../pages';
import { Switch, Route } from 'react-router-dom';

import './app.css';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/cart" component={CartPage} />
    </Switch>
  );
};

export default App;
