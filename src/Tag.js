import React from 'react';

export default function Tag({ tags }) {
  return <p>{tags.join(', ')}</p>;
}
