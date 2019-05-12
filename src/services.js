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

export function setLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

export function getLocal(name) {
  try {
    return JSON.parse(localStorage.getItem(name));
  } catch (error) {
    console.log(error);
  }
}
