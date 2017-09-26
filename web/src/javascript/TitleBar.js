import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import notice from './notice.svg';
import activity from './activity.svg';
import mail from './mail.svg';
import Profile from './profile';
import './TitleBar.css';

class TitleBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            IsLogIn : true
        }
    }


  render() {
      let info = <Link to= "/signin"><button className="log-in-button">Sign In</button></Link>;
      if (this.state.IsLogIn){
            info = <Profile/>;
        }
      return (
        <div className="header">
            <span className = "title">Hay Spark!</span>
            <span className = "search"></span>
            <span className = "profile">{info}</span>
            <span className = "panel">
                <span className = "dropdown">
                    <img src={mail} className="icon"/>
                    <div className="dropdown-content">
                        <div>You have no new messages</div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </span>
                <span className = "dropdown">
                    <img src={notice} className="icon"/>
                    <div className="dropdown-content">
                        <div>You have no new notifications</div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </span>
                <span className = "dropdown">
                    <img src={activity} className="icon"/>
                      <div className="dropdown-content">
                        <div>You have no tasks to do</div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </span>
            </span>
        </div>
    );
  }
}

export default TitleBar;