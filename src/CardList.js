import React from 'react';
import Card from './Card';

export default function Cardlist({ cards }) {
  return (
    <ul>
      {cards.map(card => (
        <Card card={card} key={card._id} />
      ))}
    </ul>
  );
}
