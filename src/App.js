import React, { Component } from 'react';
import { getCards, postCard, setLocal, getLocal, patchCard } from './services';
import CardList from './CardList';
import Form from './Form';

//gebe den key 'cards' bei getLocal hinzu, damit er weiß, was genau er von dem localStorage holen soll
export default class App extends Component {
  state = {
    cards: getLocal('cards') || []
  };

  //muss setLocal mit setState in eine {} schreiben, da setState zu langsam ist (asynchron)
  //und setLocal sonst schon vorher auf den leeren Array zugreifen würde
  componentDidMount() {
    getCards()
      .then(data => {
        this.setState({ cards: data });
        setLocal('cards', this.state.cards);
      })
      .catch(error => console.log(error));
  }

  handleCreate(card) {
    postCard(card)
      .then(card => {
        this.setState({ cards: [...this.state.cards, card] });
        setLocal('cards', this.state.cards);
      })
      .catch(err => console.log(err));
  }

  // besser das hier, als wie bei mir das setLocal in handleCreate & componentDidMoundt mit reinschreiben
  //componentDidUpdate(prevProps, prevState) {
  //  const {} = this.state;
  //  if(prevState.cards !== cards) {
  //  setLocal('cards', cards)
  //}
  //}

  // hier arrow function für das binding
  //bessere Namen für die Funtionen ausdenken, die auch wirklich das ausdrücken, was passiert
  handleOnClick = card => {
    card.isBookmarked = !card.isBookmarked;
    const index = this.state.cards.indexOf(card);
    patchCard(card)
      .then(card => {
        this.setState({
          cards: [
            ...this.state.cards.slice(0, index),
            card,
            ...this.state.cards.slice(index + 1)
          ]
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { cards } = this.state;

    //bräuchte bei onCreate= danach keien arrow function: this.handleCreate --> ich ich in der Form ja schon alles mitgegeben habe
    return (
      <main>
        <h1>Cards</h1>
        <Form onCreate={card => this.handleCreate(card)} />
        <CardList cards={cards} onClickCardList={this.handleOnClick} />
      </main>
    );
  }
}
