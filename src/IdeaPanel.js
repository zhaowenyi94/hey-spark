import React, {Component} from 'react'
import './IdeaPanel.css'
import IdeaItem from "./IdeaItem";

class IdeaPanel extends Component {


    render() {
        return (
            <div className="idea-panel">
                <div className="idea-col">
                    <IdeaItem likes="100" author="1" content="Since 911 in 2001, our nation has paid huge attention to prevent further terrorist action, and that result in the inspection on personal calls, SMS and more. In my opinion, these action violate the user privacy and should be noticed to the customer and gained the permission of them.
" title="Building a monitor web app for dog owner"/>
                    <IdeaItem author="2" content="Since 911 in 2001, our nation has paid huge attention to prevent further terrorist action, and that result in the inspection on personal calls, SMS and more. In my opinion, these action violate the user privacy and should be noticed to the customer and gained the permission of them.
"  title="Developing an App for on-campus social event"/>
                    <IdeaItem likes="100" author="1" content="Since 911 in 2001, our nation has paid huge attention to prevent further terrorist action, and that result in the inspection on personal calls, SMS and more. In my opinion, these action violate the user privacy and should be noticed to the customer and gained the permission of them.
" title="Building a monitor web app for dog owner"/>
                    <IdeaItem author="2" content="Since 911 in 2001, our nation has paid huge attention to prevent further terrorist action, and that result in the inspection on personal calls, SMS and more. In my opinion, these action violate the user privacy and should be noticed to the customer and gained the permission of them.
" title="Developing an App for on-campus social event"/>
                </div>
                <div className="idea-col">
                    <IdeaItem author="3" content="Since 911 in 2001, our nation has paid huge attention to prevent further terrorist action, and that result in the inspection on personal calls, SMS and more. In my opinion, these action violate the user privacy and should be noticed to the customer and gained the permission of them.
" title="Personal cooking planer, making our life easier "/>
                    <IdeaItem author="4" content="Since 911 in 2001, our nation has paid huge attention to prevent further terrorist action, and that result in the inspection on personal calls, SMS and more. In my opinion, these action violate the user privacy and should be noticed to the customer and gained the permission of them.
" title="Attending RoboCap, want to join?"/>
                    <IdeaItem author="3" content="Since 911 in 2001, our nation has paid huge attention to prevent further terrorist action, and that result in the inspection on personal calls, SMS and more. In my opinion, these action violate the user privacy and should be noticed to the customer and gained the permission of them.
" title="Personal cooking planer, making our life easier "/>
                    <IdeaItem author="4" content="Since 911 in 2001, our nation has paid huge attention to prevent further terrorist action, and that result in the inspection on personal calls, SMS and more. In my opinion, these action violate the user privacy and should be noticed to the customer and gained the permission of them.
" title="Attending RoboCap, want to join?"/>
                </div>

            </div>

        )
    }
}

export default IdeaPanel;
