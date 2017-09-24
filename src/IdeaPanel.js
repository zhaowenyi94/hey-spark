import React, {Component} from 'react'
import './IdeaPanel.css'
import IdeaItem from "./IdeaItem";

class IdeaPanel extends Component {


    render() {
        return (
            <div className="IdeaPanel">
                <div className="idea-col">
                    <IdeaItem author="1" title="Building a monitor web app for dog ownerDeveloping an App for on-campus social event"/>
                    <IdeaItem author="2" title="Developing an App for on-campus social event"/>
                </div>
                <div className="idea-col">
                    <IdeaItem author="3" title="Personal cooking planer, making our life easier "/>
                    <IdeaItem author="4" title="Attending RoboCap, want to join?"/>
                </div>
            </div>
        )
    }
}

export default IdeaPanel;
