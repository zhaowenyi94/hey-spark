import React from '../../../../node_modules/react';
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