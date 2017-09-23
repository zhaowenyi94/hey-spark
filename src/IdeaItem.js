import React, {Component} from 'react'

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
            <div>
                this is a new idea!
                <div>
                    Title: {this.props.title}
                </div>
                <div>
                    Create time: {this.props.createTime}
                </div>
                <div>
                    Likes: {this.props.likes}
                </div>
                <div>
                    Founder: {this.props.founder}
                </div>
                <div>
                    Heat: {this.props.heat}
                </div>


            </div>
        )
    }
}

export default IdeaItem;