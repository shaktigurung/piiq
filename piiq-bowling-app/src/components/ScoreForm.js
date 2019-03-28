import React, { Component } from 'react';
import BowlingGame from 'bowling';

export default class ScoreForm extends Component {
  
  state = {
    frames: [],
    score: ''
 }

//onChange method
 onChange = (e) => {
  const frames = e.target.value;
  this.setState({
    frames 
  })
 }
//onSubmit method
 onSubmit = (e) => {
   e.preventDefault();
   const value = this.state.frames;
   const pattern = (/[0-9]/);
   //validation for input value to be number only
   const newValue = value.match(pattern);
   //check if the value is number or not
   if(isNaN(newValue)) {
     throw 'Enter numbers only';
   }
   let newscore = BowlingGame(value);
   this.setState({
     score: newscore,
     frames: []
   });
 }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}> 
          <input 
          type="text" 
          name="frames" 
          value= {this.state.frames}  
          onChange= {this.onChange}
          placeholder= "Please enter frame scores"
          style={{width:"150px"}}
          />
          <input type="submit" value="submit" style={{marginLeft:"20px"}}/>
        </form>
        <p> Total score: {this.state.score}</p>
      </div>
    )
  }
}


