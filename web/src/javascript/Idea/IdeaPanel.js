import React, {Component} from '../../../../node_modules/react'
import '../../css/IdeaPanel.css'
import IdeaItem from "./IdeaItem";

class IdeaPanel extends Component {


    render() {
        return (
            <div className="idea-panel">
                <div className="idea-col">
                    <IdeaItem likes="593" author="1" date="09/24/17"content="Check on your dog while you're at work - know when it's barking, talk to your dog remotely and see live video. It is a must-have for any dog owner.
" title="Building a monitor web app for dog owner"/>
                    <IdeaItem likes="21" author="2" date="09/13/17" content="Students are free to plan social events as long as they conform to College policies and to faculty regulations regarding student conduct. The Student Life Committee oversees social events sponsored by student organizations according to Faculty Regulations. Panhellenic Council, Interfraternity Council, officers of residential units, and officers of other student organizations are responsible to the Student Life Committee for the social conduct at all events they sponsor (Faculty Regulations). Any individual or organization who violates the College rules of conduct shall be subject to disciplinary action by the Conduct Council (Faculty Regulations)."  title="Developing an App for on-campus social event"/>
                    <IdeaItem likes="70" author="1" date="08/14/17" content="Check on your dog while you're at work - know when it's barking, talk to your dog remotely and see live video. It is a must-have for any dog owner.
" title="Building a monitor web app for dog owner"/>
                    <IdeaItem likes="61" author="2" date="07/11/17" content="Students are free to plan social events as long as they conform to College policies and to faculty regulations regarding student conduct. The Student Life Committee oversees social events sponsored by student organizations according to Faculty Regulations. Panhellenic Council, Interfraternity Council, officers of residential units, and officers of other student organizations are responsible to the Student Life Committee for the social conduct at all events they sponsor (Faculty Regulations). Any individual or organization who violates the College rules of conduct shall be subject to disciplinary action by the Conduct Council (Faculty Regulations)." title="Developing an App for on-campus social event"/>
                </div>
                <div className="idea-col">
                    <IdeaItem likes="10" author="3" date="11/19/16" content="Pepperplate is the only app for serious cooks - it has all the tools you need to cook weeknight dinners or host a dinner party for 12. Manage your recipes, create menus, shop with ease and cook like a pro.
" title="Personal cooking planer, making our life easier "/>
                    <IdeaItem likes="22" author="4" date="01/01/15" content="Mechanization is becoming the way of 21st century life, and with it, the field of robotics is booming. Robots in all their different shapes, sizes, and levels of complexity are vital to our everyday lives—everything from the car you drive to the energy it runs on is dependent in some way on the power of robotics and mechanical engineering. At our robotics camps for kids and teens, you'll work in teams, experiment, and create in small classes with a guaranteed maximum of 8 students per instructor. View summer robotics classes below or jump to all engineering summer camps." title="Attending RoboCap, want to join?"/>
                    <IdeaItem likes="9" author="3" date="09/13/12" content="Pepperplate is the only app for serious cooks - it has all the tools you need to cook weeknight dinners or host a dinner party for 12. Manage your recipes, create menus, shop with ease and cook like a pro." title="Personal cooking planer, making our life easier "/>
                    <IdeaItem likes="10" author="4" date="01/14/11" content="Mechanization is becoming the way of 21st century life, and with it, the field of robotics is booming. Robots in all their different shapes, sizes, and levels of complexity are vital to our everyday lives—everything from the car you drive to the energy it runs on is dependent in some way on the power of robotics and mechanical engineering. At our robotics camps for kids and teens, you'll work in teams, experiment, and create in small classes with a guaranteed maximum of 8 students per instructor. View summer robotics classes below or jump to all engineering summer camps." title="Attending RoboCap, want to join?"/>
                </div>

            </div>

        )
    }
}

export default IdeaPanel;
