import React from 'react';
import './App.css';
import deck from './deck';
import StartScreen from './Screens/StartScreen';

class App extends React.Component {

  state = {
    currentCard: {},
    cardsLeft: [],
    cardsDrawn: [],
    recentSuits: [],
    start: true
  }

  componentDidMount() {
    this.setState({
      recentSuits: ['empty', 'nothing']
    });
  }

  startWorkout = arr => {
    let modifiedDeck = [...deck];
    for (let i = 0; i < modifiedDeck.length; i++) {
      switch (modifiedDeck[i].suit) {
        case 'spades':
          modifiedDeck[i].exercise = arr[0];
          break;
        case 'clubs':
          modifiedDeck[i].exercise = arr[1];
          break;
        case 'hearts':
          modifiedDeck[i].exercise = arr[2];
          break;
        case 'diamonds':
          modifiedDeck[i].exercise = arr[3];
          break;
        default:
          break;
      }
    }
    this.setState({
      cardsLeft: [...modifiedDeck],
      start: false
    })
  }

  selectCard = () => {
    let card;
    let cardIndex = Math.floor(this.state.cardsLeft.length * Math.random());
    console.log(cardIndex);
    let arrLeft = [...this.state.cardsLeft];
    let arrRecent = [...this.state.recentSuits];
    if (arrLeft[cardIndex].suit !== arrRecent[0] || arrRecent[0] !== arrRecent[1]) {
      card = { ...arrLeft[cardIndex] };
      let arrDrawn = [...this.state.cardsDrawn, { ...card }];
      arrRecent.push(card.suit);
      arrRecent.splice(0, 1);
      arrLeft.splice(cardIndex, 1);
      console.log(arrLeft.length);
      this.setState({
        currentCard: { ...card },
        cardsLeft: [...arrLeft],
        cardsDrawn: [...arrDrawn],
        recentSuits: [...arrRecent]
      });
      console.log(arrRecent[0] + ' ' + arrRecent[1]);
    } else {
      console.log(arrLeft[cardIndex].suit);
      console.log('retry');
      this.selectCard();
    }
  }

  render() {
    let firstCard = <h1>Current Card: {this.state.currentCard.number} of {this.state.currentCard.suit}</h1>;
    if (this.state.cardsLeft.length > 51) {
      firstCard = null;
    }
    let newCard = <button onClick={this.selectCard}>NEW CARD</button>
    let completed = null;
    if (this.state.cardsDrawn.length === 52) {
      newCard = null;
      completed = <h1>Workout complete!</h1>
    }
    if (this.state.start) {
      return (
        <StartScreen start={this.startWorkout} />
      );
    } else {
      return (
        <div className="App">
          {firstCard}
          <h2>{this.state.currentCard.value} {this.state.currentCard.exercise}</h2>
          {newCard}
          <h3>{this.state.cardsDrawn.length}/52</h3>
          {completed}
        </div>
      );
    }
  }
}

export default App;
