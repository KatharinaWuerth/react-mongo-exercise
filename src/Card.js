import React from 'react';
import Tag from './Tag';

export default function Card(props) {
  const { card, toggleOnClick } = props;
  return (
    <li>
      {card.title}
      <p>{card.description}</p>
      <div>
        {card.tags.map(tag => (
          <Tag tag={tag} />
        ))}
      </div>
      <button onClick={toggleOnClick}>
        {card.isBookmarked ? 'bookmarked' : 'bookmark'}
      </button>
    </li>
  );
}
