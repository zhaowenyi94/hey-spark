import React, {Component} from '../../../../node_modules/react'
import './TitleItem.css'

class TitleItem extends Component {

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
                <div className="ideas-item-thumbnail">
                    {this.props.title}
                </div>
                <div className="ideas-item-footer">
                    <div className="ideas-item-footer">
                        <span className="ideas-item-rating-label">Likes: 593</span>
                        <div className="ideas-item-info">
                            <div className="ideas-item-author"><b>Author:</b> <span>1</span></div>
                            <div className="ideas-item-date"><b>Date:</b> <span>09/24/17</span></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TitleItem;