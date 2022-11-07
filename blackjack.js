let messageEl = document.querySelector('#message-el');
let cardsEl = document.querySelector('#cards-el');
let sumEl = document.querySelector('#sum-el');

let cards = []
let sum = 0
let message = ''
let isAlive = false
let hasBlackjack = false

// player details

let player = {
  Name: 'Player1 ',
  Chips: 200
}

let playerEl = document.querySelector('#player-el');
playerEl.textContent = player.Name + ' $' + player.Chips

// getRandomCards() Function

function getRandomCards() {
  let randomNumbers = Math.floor(Math.random() * 13) + 1
  if (randomNumbers > 10) {
      return 10
  } else if (randomNumbers === 1) {
      return 11
  } else {
      return randomNumbers
  }
}

// StartGame() function

function startGame() {
  isAlive = true
  let firstCard = getRandomCards()
  let secondCard = getRandomCards()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
  
}

// renderGame() function

function renderGame() {
  cardsEl.textContent = 'Cards: '
  for (i = 0; i < cards.length; i++) {
      cardsEl.textContent += cards[i] + ' '
  }

  sumEl.textContent = 'Sum: ' + sum
  if (sum <= 20) {
      message = 'Do you want to draw a card?'
  } else if (sum === 21) {
      message = 'Congrats! you got a BlackJack!'
      hasBlackjack = true
  } else {
      message = 'You\re out of the game!'
      isAlive = false
  }

  messageEl.textContent = message
}

// newCards() function

function newCard() {
  if (isAlive === true && hasBlackjack === false) {
      let card = getRandomCards()
      cards.push(card)
      sum += card
      renderGame()
  }
}