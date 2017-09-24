import React, {Component} from 'react'
import './IdeaPanel.css'
import IdeaItem from "./IdeaItem";

class IdeaPanel extends Component {


    render() {
        return (
            <div className="idea-panel">
                <div className="idea-col">
                    <IdeaItem likes="593" author="1" date="09/24/17"content="Since 911 in 2001, our nation has paid huge attention to prevent further terrorist action, and that result in the inspection on personal calls, SMS and more. In my opinion, these action violate the user privacy and should be noticed to the customer and gained the permission of them.
" title="Building a monitor web app for dog owner"/>
                    <IdeaItem likes="21" author="2" date="09/13/17" content="Since 911 in 2001, our nation has paid huge attention to prevent further terrorist action, and that result in the inspection on personal calls, SMS and more. In my opinion, these action violate the user privacy and should be noticed to the customer and gained the permission of them.
"  title="Developing an App for on-campus social event"/>
                    <IdeaItem likes="70" author="1" date="08/14/17" content="Since 911 in 2001, our nation has paid huge attention to prevent further terrorist action, and that result in the inspection on personal calls, SMS and more. In my opinion, these action violate the user privacy and should be noticed to the customer and gained the permission of them.
" title="Building a monitor web app for dog owner"/>
                    <IdeaItem likes="61" author="2" date="07/11/17" content="Since 911 in 2001, our nation has paid huge attention to prevent further terrorist action, and that result in the inspection on personal calls, SMS and more. In my opinion, these action violate the user privacy and should be noticed to the customer and gained the permission of them.
" title="Developing an App for on-campus social event"/>
                </div>
                <div className="idea-col">
                    <IdeaItem likes="10" author="3" date="11/19/16" content="Since 911 in 2001, our nation has paid huge attention to prevent further terrorist action, and that result in the inspection on personal calls, SMS and more. In my opinion, these action violate the user privacy and should be noticed to the customer and gained the permission of them.
" title="Personal cooking planer, making our life easier "/>
                    <IdeaItem likes="22" author="4" date="01/01/15" content="Since 911 in 2001, our nation has paid huge attention to prevent further terrorist action, and that result in the inspection on personal calls, SMS and more. In my opinion, these action violate the user privacy and should be noticed to the customer and gained the permission of them.
" title="Attending RoboCap, want to join?"/>
                    <IdeaItem likes="9" author="3" date="09/13/12" content="Since 911 in 2001, our nation has paid huge attention to prevent further terrorist action, and that result in the inspection on personal calls, SMS and more. In my opinion, these action violate the user privacy and should be noticed to the customer and gained the permission of them.
" title="Personal cooking planer, making our life easier "/>
                    <IdeaItem likes="10" author="4" date="01/14/11" content="Since 911 in 2001, our nation has paid huge attention to prevent further terrorist action, and that result in the inspection on personal calls, SMS and more. In my opinion, these action violate the user privacy and should be noticed to the customer and gained the permission of them.
" title="Attending RoboCap, want to join?"/>
                </div>

            </div>

        )
    }
}

export default IdeaPanel;
