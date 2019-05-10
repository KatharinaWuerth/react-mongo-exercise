import React from 'react';

export default function Form({ onCreate }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const tags = form.tags.value.split(', ');
    const card = { title, description, tags };
    onCreate(card);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {'Title'}
        <input type="text" name="title" placeholder="Title" />
      </label>
      {'Description'}
      <label>
        <input type="text" name="description" placeholder="Description" />
      </label>
      {'Tags'}
      <label>
        <input type="text" name="tags" placeholder="tag1, tag2, tag3" />
      </label>
      <button>Submit</button>
    </form>
  );
}
