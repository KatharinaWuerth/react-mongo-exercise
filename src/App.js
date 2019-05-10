import React, { Component } from 'react';
import { getCards } from './services';
import CardList from './CardList';

export default class App extends Component {
  state = {
    cards: []
  };

  componentDidMount() {
    getCards()
      .then(data => this.setState({ cards: data }))
      .catch(error => console.log(error));
  }

  render() {
    const { cards } = this.state;

    return (
      <main>
        <h1>Cards</h1>
        <CardList cards={cards} />
      </main>
    );
  }
}
