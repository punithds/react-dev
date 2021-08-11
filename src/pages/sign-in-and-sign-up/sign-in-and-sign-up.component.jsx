import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.components';
import "./sign-in-sign-up.styles.scss"

export const SignInAndSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
        </div>
    )
}
