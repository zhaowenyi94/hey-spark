import React, { Component } from '../../node_modules/react';
import './App.css';
import IdeaPanel from "./IdeaPanel";
import LeaveIdea from "./LeaveIdea";
import TitleBar from "./title-bar/TitleBar";

class App extends Component {

  render() {
    return (
      <div className="App">
          <div><TitleBar/></div>
          <div><LeaveIdea/></div>
          <div className="thePanel"><IdeaPanel/></div>
      </div>
    );
  }
}

export default App;
