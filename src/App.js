import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './Components/header/header';
import HomePage from './Pages/homepage/homepage';
import ShopPage from './Pages/shop/shop';
import SignInAndSignUpPage from './Pages/sign-in-sign-up/sign-in-sign-up';
import { auth } from './firebase/firbase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
