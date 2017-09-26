import React, {Component} from '../../../../node_modules/react'
import '../../css/LeaveIdea.css'

class LeaveIdea extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        console.log('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form className="leave-form">
                <h3>Share your idea here and get inspired by others!</h3>

                <div className="leave-form-group">
                    <textarea className="leave-form-control" value={this.state.value} placeholder="What is your idea buddy?" id="contact-message" rows="1" onChange={this.handleChange}></textarea>
                </div>

                <input type="submit" value="Send" id="contact-send" className="btn btn-primary btn-lg btn-block"></input>
            </form>
        )
    }
}

export default LeaveIdea;