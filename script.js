const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = friends.join(", ");
console.log(string);

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

const cardToRemove = "Карточка-3";
const indexToRemove = cards.indexOf(cardToRemove);
if (indexToRemove !== -1) {
  cards.splice(indexToRemove, 1);
}
console.log(cards);

const cardToInsert = "Карточка-6";
const insertIndex = 2;
cards.splice(insertIndex, 0, cardToInsert);
console.log(cards);

const cardToUpdate = "Карточка-4";
const newCard = "Оновлена карточка-4";
const indexToUpdate = cards.indexOf(cardToUpdate);
if (indexToUpdate !== -1) {
  cards[indexToUpdate] = newCard;
}
console.log(cards);
