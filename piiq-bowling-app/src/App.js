import React, { Component } from 'react';
import './App.css';
import  ScoreForm from './components/ScoreForm';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h2> Please Enter each frame score separated by comma (,) </h2>
        <ScoreForm />
      </div>
    );
  }
}

export default App;
