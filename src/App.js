import React, { Component } from 'react';
import { getCards, postCard } from './services';
import CardList from './CardList';
import Form from './Form';

export default class App extends Component {
  state = {
    cards: []
  };

  componentDidMount() {
    getCards()
      .then(data => this.setState({ cards: data }))
      .catch(error => console.log(error));
  }

  handleCreate(card) {
    postCard(card)
      .then(card => this.setState({ cards: [...this.state.cards, card] }))
      .catch(err => console.log(err));
  }

  render() {
    const { cards } = this.state;

    return (
      <main>
        <h1>Cards</h1>
        <Form onCreate={card => this.handleCreate(card)} />
        <CardList cards={cards} />
      </main>
    );
  }
}
