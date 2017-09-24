import React from 'react';
import './form.css';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            act:'login',
            Redirect: false
        }
    }


    onChange = this.onChange.bind(this);
    onSubmit = this.onSubmit.bind(this);

    onChange(e) {

        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        this.setState({ Redirect: true });
        console.log(this.state);
    }

    render() {
        if (this.state.Redirect) {
            return (
                <Redirect to="/"/>
            )
        }
        return (

            <form onSubmit={this.onSubmit} className="form">
                <h1 className="form-heading"> Welcome to</h1>
                <h1 className="form-heading"> Hay Spark!</h1>

                <div className = 'form-group'>
                    <label className= 'control-label'>Email</label><br/>
                    <input value= {this.state.email} onChange={this.onChange}   type = 'text' name = 'email' className="form-control"/>
                </div>
                <div className = 'form-group'>
                    <label className= 'control-label'>Password</label><br/>
                    <input value= {this.state.password} onChange={this.onChange}   type = 'password' name = 'password' className="form-control"/>
                </div>
                <div className='form-group'>
                        <button className = 'button'>
                            Sign in
                        </button>
                </div>
                <div className="sign-up-note"> Do not have an account? Sign Up <a href={"#" + 'signup'}>Here</a></div>
            </form>
        );
    }
}

export default SignInForm;