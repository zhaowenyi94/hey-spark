import React, {Component} from 'react'
import '../../css/CommentItem.css'

class IdeaItem extends Component {

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