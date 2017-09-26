import React, {Component} from 'react'
import './CommentPanel.css'
import CommentItem from "./CommentItem";
import TitleItem from "./TitleItem";
class CommentPanel extends Component {


    render() {
        return (
            <div className="CommentPanel">
                <div className="idea-title">
                    <TitleItem title="Building a monitor web app for dog ownerDeveloping an App for on-campus social event"/>
                </div>
                <div className="comment-content-title">
                    <p>Content:</p>
                </div>

                <div className="idea-content">
                    <p>pite the fact that, as Shakespeare said, "the pen is mightier than the sword," the pen itself is not enough to make an effective writer. In fact, though we may all like to think of ourselves as the next Shakespeare, inspiration alone is not the key to effective essay writing. You see, the conventions of English essays are more formulaic than you might think – and, in many ways, it can be as simple as counting to five.</p>
                    <p>{this.props.content}</p>
                </div>
                <div className="comment-title">
                    <p>Comments:</p>
                </div>
                <div className="comment">
                    <CommentItem content="That is so interesting!"/>
                </div>

            </div>
        )
    }
}

export default CommentPanel;