export function getCards() {
  return fetch('/cards').then(res => res.json());
}

export function postCard(card) {
  return fetch('/cards', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(card)
  }).then(res => res.json());
}
