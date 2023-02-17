// // TODO: create variable to select all cards in your html
const cards = document.querySelectorAll(".card");


// // TODO: create variables, one to check state of card 
// // (flipped = true or flipped = false)
var isFlipped = false;

// // create variables for each of the cards you'll be comparing
var firstCard;
var secondCard;


// // TODO: use forEach to loop through all of cards 
cards.forEach(function (card){
  // and use call back function to flip over cards
  card.addEventListener("click", flip);
})


// //TODO:Create function to flip card to check card value
function flip(){
    // console.log("card is flipped")
    // console.log(this)
    this.classList.add("flip")
    //    console.log(this);
    if (!isFlipped){
        isFlipped = true
        firstCard = this
    } else{
        secondCard = this;
      checkCards();
    }
}
    //    checkCards();


// //TODO:create function that checks wether the match was a success or fail
function checkCards() {
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
}
// //TODO:  create success function 
  function success() {
    console.log("success");
    firstCard.removeEventListener("click", flip)
    secondCard.removeEventListener("click", flip)
     reset();
  }




//  //TODO: create fail function 
function fail() {
  //   console.log("Failed");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 500);
}
// //TODO: create function to reset state of cards
function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

// //TODO:  create function to shuffle cards
(function shuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
})();