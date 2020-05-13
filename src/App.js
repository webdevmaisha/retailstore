import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './Pages/homepage/homepage';
import ShopPage from './Pages/shop/shop';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
