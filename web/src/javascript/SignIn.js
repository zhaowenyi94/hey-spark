import React from 'react';
import SignInForm from './SignInForm';

class SignIn extends React.Component {
    render() {
        return (
            <div className= "row">
                <div>
                    <SignInForm/>
                </div>
            </div>
        );
    }
}

export default SignIn;