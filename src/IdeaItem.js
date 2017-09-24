import React, {Component} from 'react'
import './IdeaItem.css'
import FaThumbsUp from "react-icons/lib/fa/thumbs-up"
import ReadMore from "./ReadMore"
class IdeaItem extends Component {

    constructor(props) {
        super(props);
        this.state = {numOfLikes: parseInt(this.props.likes)};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(event){
        console.log(event.target);
        this.setState({numOfLikes:event.target.value})
    }
    handleClick() {
        this.setState({
            numOfLikes: this.state.numOfLikes+1
        });
    }

    render() {
        var num = this.state.numOfLikes;
        return (
            <div className="idea-item">
                <div className="idea-item-thumbnail">
                    {this.props.title}
                </div>
                <ReadMore minHeight="52px" animation="1.2s ease">
                    {this.props.content}
                </ReadMore>
                <div className="idea-item-footer">
                    <div className="idea-item-footer">
                        <span className="idea-item-rating-label">Likes: </span>
                        <span className="idea-item-rating">{num}</span>
                        <button onClick={this.handleClick} onChange={this.handleChange} className="button button2"><FaThumbsUp /></button>
                        <div className="idea-item-info">
                            <div className="idea-item-author"><b>Author:</b> <span>{this.props.author}</span></div>
                            <div className="idea-item-date"><b>Date:</b> <span>{this.props.date}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IdeaItem;