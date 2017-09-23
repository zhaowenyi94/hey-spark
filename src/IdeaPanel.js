import React, {Component} from 'react'
import './IdeaPanel.css'
import IdeaItem from "./IdeaItem";

class IdeaPanel extends Component {

    render() {
        return (
            <div className="IdeaPanel">
                IdeaPanel Works!
                <div>
                    <IdeaItem createTime="1" title="Idea1"/>
                    <IdeaItem createTime="2"/>
                    <IdeaItem createTime="3"/>
                </div>
            </div>
        )
    }
}

export default IdeaPanel;
