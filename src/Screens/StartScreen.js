import React from 'react';
import InitialInput from './InitialInput';

class StartScreen extends React.Component {

  state = {
    exercises: [
      {
        suit: 'Aces',
        exercise: 'Push-ups'
      },
      {
        suit: 'Clubs',
        exercise: 'Crunches',
      },
      {
        suit: 'Hearts',
        exercise: 'Squats',
      },
      {
        suit: 'Diamonds',
        exercise: 'Lunges'
      }
    ]
  }

  handleChange = (e, index) => {
    let arr = [...this.state.exercises];
    arr[index].exercise = e.target.value;
    this.setState({
      exercises: [...arr]
    });
    e.preventDefault();
  }

  render() {
    const exercises = [this.state.exercises[0].exercise, this.state.exercises[1].exercise, this.state.exercises[2].exercise, this.state.exercises[3].exercise]
    return (
      <div>
        <h1>Please enter exercises for each suit.</h1>
        <InitialInput suit='Aces' value={this.state.exercises[0].exercise} changed={this.handleChange} index={0} />
        <InitialInput suit='Clubs' value={this.state.exercises[1].exercise} changed={this.handleChange} index={1} />
        <InitialInput suit='Hearts' value={this.state.exercises[2].exercise} changed={this.handleChange} index={2} />
        <InitialInput suit='Diamonds' value={this.state.exercises[3].exercise} changed={this.handleChange} index={3} />
        <button onClick={() => this.props.start(exercises)}>Start Workout!</button>
      </div>
    )
  }
}

export default StartScreen;