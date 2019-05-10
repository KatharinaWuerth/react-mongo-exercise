import React from 'react';

export default function Card({ card }) {
  return <li key={card._id}>{card.title}</li>;
}
