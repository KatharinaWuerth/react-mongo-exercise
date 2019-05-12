import React from 'react';
import Card from './Card';

export default function Cardlist(props) {
  const { cards, onClickCardList } = props;

  return (
    <ul style={{ listStyle: 'none', padding: '0' }}>
      {cards.map(card => (
        <Card
          card={card}
          key={card._id}
          toggleOnClick={() => onClickCardList(card)}
        />
      ))}
    </ul>
  );
}
