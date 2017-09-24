import React from 'react';
import './form.css';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            tags: '',
            act: 'register',
            Redirect: false
        }
    }





    onChange = this.onChange.bind(this);
    onSubmit = this.onSubmit.bind(this);

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        this.setState({ Redirect: false });
        console.log(this.state);
    }

    render() {
        if (this.state.Redirect) {
            return (
                <Redirect to="/"/>
            )
        }
        return (
            <form action="http://127.0.0.1:3030/login" method="POST" onSubmit={this.onSubmit} className="form">
                <h1 className="form-heading"> Welcome to</h1>
                <h1 className="form-heading"> Hay Spark!</h1>
                <div className = 'form-group'>
                    <label className= 'control-label'>Username*</label><br/>
                    <input value= {this.state.username} onChange={this.onChange}   type = 'text' name = 'username' className="form-control" required=""/>
                </div>

                <div className = 'form-group'>
                    <label className= 'control-label'>Email*</label><br/>
                    <input value= {this.state.email} onChange={this.onChange}   type = 'text' name = 'email' className="form-control"/>
                </div>
                <div className = 'form-group'>
                    <label className= 'control-label'>Password*</label><br/>
                    <input value= {this.state.password} onChange={this.onChange}   type = 'password' name = 'password' className="form-control"/>
                </div>
                <div className = 'form-group'>
                    <label className= 'control-label'>Password Confirmation*</label>
                    <input value= {this.state.passwordConfirmation} onChange={this.onChange}   type = 'password' name = 'passwordConfirmation' className="form-control"/>
                </div>
                <div className = 'form-group'>
                    <label className= 'control-label'>tags(seperated with space)</label>
                    <input value= {this.state.tags} onChange={this.onChange}   type = 'text' name = 'tags' className="form-control"/>
                </div>
                {/*<div className = 'form-group'>*/}
                    {/*<label className= 'control-label'>self introduction</label>*/}
                    {/*<textarea value= {this.state.bio} onChange={this.onChange}  type = 'text' name = 'bio' className="form-control" />*/}
                {/*</div>*/}
                <div className="note"> * Required Information</div>
                <div className='form-group'>
                    <button className = 'button'>
                        Sign up
                    </button>
                </div>
            </form>
        );
    }
}

export default SignUpForm;