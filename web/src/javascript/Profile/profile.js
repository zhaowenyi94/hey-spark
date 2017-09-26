import React from '../../../../node_modules/react';
import '../../css/profile.css';
import '../../css/TitleBar.css';
import user from '../../../rc/user.svg';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
            <span className = "dropdown">
                <img src={user} className="icon"/>
                <div className="infor">
                        <div className="photo-plate"><img src={user} className="photo"/></div>
                        <div className="name"><span>wuhan</span></div>
                        <div className="status"><span>skills</span><span className="data">6</span></div>
                        <div className="status"><span>ideas</span><span className="data">7</span></div>
                        <div className="status"><span>working</span><span className="data">6</span></div>
                </div>
            </span>
            </div>
        );
    }
}

export default Profile;