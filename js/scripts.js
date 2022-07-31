// all the resources
const cardArray = [
  {
    name: "pizza",
    img: "../images/pizza.png"
  },
  {
    name: "cheeseburger",
    img: "../images/cheeseburger.png"
  },
  {
    name: "fries",
    img: "../images/fries.png"
  },
  {
    name: "hotdog",
    img: "../images/hotdog.png"
  },
  {
    name: "milkshake",
    img: "../images/milkshake.png"
  },
  {
    name: "ice-cream",
    img: "../images/ice-cream.png"
  },
  {
    name: "pizza",
    img: "../images/pizza.png"
  },
  {
    name: "cheeseburger",
    img: "../images/cheeseburger.png"
  },
  {
    name: "fries",
    img: "../images/fries.png"
  },
  {
    name: "hotdog",
    img: "../images/hotdog.png"
  },
  {
    name: "milkshake",
    img: "../images/milkshake.png"
  },
  {
    name: "ice-cream",
    img: "../images/ice-cream.png"
  }
];

// sord the array randomly
cardArray.sort(() => 0.5 - Math.random());

// getting the grid element
const grid = document.getElementById("grid");

// getting the result span to display the score
const resultDisplay = document.getElementById("result");

// choosen cards will store in this array
let choosenCards = [];

// choosen cards ids will store in this array
let choosenCardIds = [];

// result will store in this array
const result = [];

// creating the board function
const createBoard = () => {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "../images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", focusClick);
    grid.appendChild(card);
  }
};

// initializing the game
createBoard();

// when click happens
function focusClick() {
  const cardId = this.getAttribute("data-id");
  choosenCards.push(cardArray[cardId].name);
  choosenCardIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (choosenCardIds.length == 2) {
    setTimeout(checkMatch, 100);
  }
}

// check if matches
function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  let optionOne = choosenCardIds[0];
  let optionTwo = choosenCardIds[1];
  if (optionOne == optionTwo) {
    alert("you clicked the same card!");
  }

  if (choosenCards[0] == choosenCards[1]) {
    alert("you won!!");
    cards[optionOne].setAttribute("src", "../images/white.png");
    cards[optionOne].removeEventListener("click", focusClick);
    cards[optionTwo].setAttribute("src", "../images/white.png");
    cards[optionTwo].removeEventListener("click", focusClick);
    result.push(optionOne);
    resultDisplay.textContent = result.length;
  } else {
    alert("you lose!, try again");
    cards[optionOne].setAttribute("src", "../images/blank.png");
    cards[optionTwo].setAttribute("src", "../images/blank.png");
  }

  choosenCards = [];
  choosenCardIds = [];

  if (result.length === cards.length / 2) {
    alert("congratulation! you won!");
  }
}
