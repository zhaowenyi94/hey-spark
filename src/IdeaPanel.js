import React, {Component} from 'react'
import './IdeaPanel.css'
import IdeaItem from "./IdeaItem";

class IdeaPanel extends Component {


    render() {
        return (
            <div className="IdeaPanel">
                    <IdeaItem author="1" title="Idea1"/>
                    <IdeaItem author="2"/>
                    <IdeaItem author="3"/>
            </div>
        )
    }
}

export default IdeaPanel;
