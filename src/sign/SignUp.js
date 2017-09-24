import React from 'react';
import SignUpForm from './SignUpForm';

class SignUp extends React.Component {
    render() {
        return (
            <div className= "row">
                <div>
                    <SignUpForm/>
                </div>
            </div>
        );
    }
}

export default SignUp;