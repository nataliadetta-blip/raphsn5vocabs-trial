let index = 0;
const front = document.getElementById("front");
const back = document.getElementById("back");
const card = document.querySelector(".card");

function showCard() {
  front.textContent = vocab[index].jp;
  back.textContent = vocab[index].en;
}

function flipCard() {
  card.classList.toggle("flipped");
}

function nextCard() {
  card.classList.remove("flipped");
  index = (index + 1) % vocab.length;
  showCard();
}

function prevCard() {
  card.classList.remove("flipped");
  index = (index - 1 + vocab.length) % vocab.length;
  showCard();
}

function shuffleCards() {
  vocab.sort(() => Math.random() - 0.5);
  index = 0;
  showCard();
}

showCard();
