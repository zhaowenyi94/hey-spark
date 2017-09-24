import React, {Component} from 'react'
import './IdeaPanel.css'
import IdeaItem from "./IdeaItem";

class IdeaPanel extends Component {


    render() {
        return (
            <div className="IdeaPanel">
                    <IdeaItem author="1" title="Thinking about building a web app for dog owner to monitor their dog's health"/>
                    <IdeaItem author="2" title="What about developing an application for making friends on-campus"/>
                    <IdeaItem author="3" title="A web"/>
            </div>
        )
    }
}

export default IdeaPanel;
