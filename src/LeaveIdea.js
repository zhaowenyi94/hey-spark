import React, {Component} from 'react'
import './LeaveIdea.css'

class LeaveIdea extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form className="form">
                <h3>Leave your idea here and get inspired by others!</h3>

                <div className="form-group">
                    <textarea className="form-control" value="" placeholder="What is your idea buddy?" id="contact-message" rows="1"></textarea>
                </div>

                <button id="contact-send" className="btn btn-primary btn-lg btn-block">Submit</button>
            </form>
        )
    }
}

export default LeaveIdea;