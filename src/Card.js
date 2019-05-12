import React from 'react';
import Tag from './Tag';

export default function Card(props) {
  const { card, toggleOnClick } = props;

  return (
    <li
      style={{
        border: 'solid',
        borderRadius: '10px',
        padding: '10px',
        marginBottom: '20px'
      }}
    >
      {card.title}
      <p>{card.description}</p>
      <div>
        {card.tags.map(tag => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
      <button style={{ border: 'solid 0.3px' }} onClick={toggleOnClick}>
        {card.isBookmarked ? 'bookmarked' : 'bookmark'}
      </button>
    </li>
  );
}
