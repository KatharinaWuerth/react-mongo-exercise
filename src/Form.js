import React from 'react';

export default function Form({ onCreate }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const tags = form.tags.value
      .split(', ')
      .map(value => value.trim())
      .filter(value => value); //Filter schmeißt alles raus, was false ist; leerer String wäre falsy und würde damit nicht angezeigt werden // geht auch: .filter(Boolean)
    const card = { title, description, tags };
    onCreate(card);
  }

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column' }}
      onSubmit={handleSubmit}
    >
      {'Title'}
      <label>
        <input
          style={{ margin: '10px' }}
          type="text"
          name="title"
          placeholder="Title"
        />
      </label>
      {'Description'}
      <label>
        <input
          style={{ margin: '10px' }}
          type="text"
          name="description"
          placeholder="Description"
        />
      </label>
      {'Tags'}
      <label>
        <input
          style={{ margin: '10px' }}
          type="text"
          name="tags"
          placeholder="tag1, tag2, tag3"
        />
      </label>
      <button style={{ border: 'solid 0.3px', marginBottom: '10px' }}>
        Submit
      </button>
    </form>
  );
}
