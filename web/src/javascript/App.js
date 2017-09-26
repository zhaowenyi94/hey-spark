import React, { Component } from '../../../node_modules/react';
import '../css/App.css';
import IdeaPanel from "./Idea/IdeaPanel";
import LeaveIdea from "./Idea/LeaveIdea";
import TitleBar from "./Title/TitleBar";

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
