import React from 'react';
import './sign-in-sign-up.scss';

import SignIn from '../../Components/sign-in/sign-in';
import SignUp from '../../Components/sign-up/sign-up';

const SignInAndSignUpPage = () => (
  <div className='sign-in-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);
export default SignInAndSignUpPage;
