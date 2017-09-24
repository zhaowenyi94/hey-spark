import React, { Component } from 'react';
import './App.css';
import IdeaPanel from "./IdeaPanel";
import LeaveIdea from "./LeaveIdea";

class App extends Component {

  render() {
    return (
      <div className="App">
          <LeaveIdea/>
          <IdeaPanel/>
      </div>
    );
  }
}

export default App;
