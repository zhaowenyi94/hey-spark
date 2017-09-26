import React, {Component} from 'react'
import './CommentItem.css'
import FaThumbsUp from "react-icons/lib/fa/thumbs-up"

class IdeaItem extends Component {

    // constructor(props) {
    //     super()
    //     this.state = {}
    // }
    //
    // componentDidMount() {
    //
    // }

    render() {
        return (
            <div className="comment-item">
                <div className="comment-item-thumbnail">
                    {this.props.content}
                </div>
                <div className="comment-item-footer">
                    Author: Han            Date: 09/24/17
                </div>
            </div>
        )
    }
}

export default IdeaItem;