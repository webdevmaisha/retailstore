import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Header from './Components/header/header';
import HomePage from './Pages/homepage/homepage';
import ShopPage from './Pages/shop/shop';
import SignInAndSignUpPage from './Pages/sign-in-sign-up/sign-in-sign-up';
import { auth, createUserProfileDocument } from './firebase/firbase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { connect } from 'react-redux';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const matchSateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const matchDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(matchSateToProps, matchDispatchToProps)(App);
