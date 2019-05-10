export function getCards() {
  fetch('/cards').then(res => res.json());
}
