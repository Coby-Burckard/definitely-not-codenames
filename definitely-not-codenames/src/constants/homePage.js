const cards = [
  {
    word: 'Tower',
    color: 'BLUE',
    touched: false,
  },
  {
    word: 'King',
    color: 'RED',
    touched: false,
  },
  {
    word: 'Stick',
    color: 'WHITE',
    touched: false,
  },
  {
    word: 'Trip',
    color: 'WHITE',
    touched: false,
  },
  {
    word: 'New York',
    color: 'RED',
    touched: false,
  },
  {
    word: 'Straw',
    color: 'BLACK',
    touched: false,
  },
  {
    word: 'Watch',
    color: 'BLUE',
    touched: false,
  },
  {
    word: 'Sock',
    color: 'RED',
    touched: false,
  },
  {
    word: 'Octopus',
    color: 'BLUE',
    touched: false,
  },
  {
    word: 'Nut',
    color: 'BLUE',
    touched: false,
  },
  {
    word: 'Mercury',
    color: 'RED',
    touched: false,
  },
  {
    word: 'Poison',
    color: 'WHITE',
    touched: false,
  },
  {
    word: 'Grace',
    color: 'WHITE',
    touched: false,
  },
  {
    word: 'Play',
    color: 'BLUE',
    touched: false,
  },
  {
    word: 'Hook',
    color: 'RED',
    touched: false,
  },
  {
    word: 'Hood',
    color: 'RED',
    touched: false,
  },
  {
    word: 'Doctor',
    color: 'BLUE',
    touched: false,
  },
  {
    word: 'Chest',
    color: 'WHITE',
    touched: false,
  },
  {
    word: 'Date',
    color: 'RED',
    touched: false,
  },
  {
    word: 'Centaur',
    color: 'WHITE',
    touched: false,
  },
  {
    word: 'Cricket',
    color: 'BLUE',
    touched: false,
  },
  {
    word: 'Marble',
    color: 'RED',
    touched: false,
  },
  {
    word: 'Teacher',
    color: 'BLUE',
    touched: false,
  },
  {
    word: 'Teacher',
    color: 'BLUE',
    touched: false,
  },
  {
    word: 'Teacher',
    color: 'BLUE',
    touched: false,
  },
];

const modifiedCards = cards.map((card) => {
  const newCard = {...card};
  newCard.word = '';
  if (Math.random() < 0.33) {
    newCard.touched = true;
  }

  return newCard;
});
export default modifiedCards;
