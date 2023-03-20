const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);
let nodeClicked = (document.querySelectorAll('div.clicked'));
// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
  
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

let clickCount = 0;
let noClicking = false;
let card1 = null;
let card2 = null;

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked

  if(noClicking){
    return;
  }

  if (event.target.classList.contains("clicked")){
    return;
  }

  let clickedCard = event.target;
  console.log("you just clicked", clickedCard);

  if(!card1 || !card2){
    clickedCard.classList.add('clicked');
    card1 = card1 || clickedCard;
    // if card1 can be converted to true, return card1. else return clickedCard. (card 1 is always null until it is the clickedCard)
    card2 = clickedCard === card1 ? null : clickedCard;
    // if (clickedCard === card1){
    //           card2 = null;
    //         }
    //         else{
    //          card2 = clickedCard
    //         }
  }

  if(card1 && card2){
    let cardClass1 = card1.className;
    let cardClass2 = card2.className;

    if(cardClass1 === cardClass2){
      clickCount += 2;
      card1.removeEventListener("click", handleCardClick);
      card2.removeEventListener("click", handleCardClick);
      card1 = null;
      card2 = null;
      noClicking = false;
    }
    else{
      setTimeout(function() {
        card1.classList.remove("clicked");
        card2.classList.remove("clicked");
        card1 = null;
        card2 = null;
        noClicking = false;
      }, 1000);
    }
  }
  if (clickCount === COLORS.length) {
    alert("game over!");
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);


// if(showingCards.item(1) === showingCards.item(2)){
//   const matching = 
//   matching.classList.add('matching');
//   clickCount = 0;
//   console.log('They Matched!')
// }
// else if(showingCards.item(1) !== showingCards.item(2)){

// }


// if( clickedNode.length !== 2 && clickedNode.length <= 2){
//   clickedCard.classList.add('clicked')
//   console.log(document.querySelectorAll('div.clicked'));
//   return
// }

// if(clickedNode.length === 2){
//   for(let i=0; i<clickedNode.length; i++){
//     if(clickedNode[0] === clickedNode[1] && clickedNode[0] !== undefined && clickedNode[1] !== undefined){
//       clickedNode[1].classList.add('matching');
//       console.log(clickedNode);
//       clickedNode[1].classList.remove('clicked');
//       console.log(clickedNode);
//       clickedNode[0].classList.add('matching');
//       console.log(clickedNode);
//       clickedNode[0].classList.remove('clicked');
//       console.log(clickedNode);
//     }
//     else if(clickedNode[i] !== clickedNode[i+1] && clickedNode[i+1] !== undefined && clickedNode[i] !== undefined){
//       clickedNode[i+1].classList.remove('clicked');
//       clickedNode[i].classList.remove('clicked');
//       console.log(document.querySelectorAll('div.clicked'))
//       return
//     } // this works.
//     else if(clickedNode[i] === undefined || clickedNode [i+1] === undefined){
//       return
//     }
//   }
// }


// let clickedCardList = document.querySelectorAll('div.clicked');


// if (clickCount < 2){
//   clickedCard.classList.add("clicked")
//   clickCount ++;
//   console.log(clickCount)
//   console.log(document.querySelectorAll("div.clicked"))
// }

// for(i=0; i <(document.querySelectorAll('div.clicked')).length; i++){
//   if((document.querySelectorAll('div.clicked'))[i] === (document.querySelectorAll('div.clicked'))[i+1]){
//     clickedCard.classList.add("matching")
//     clickCount = 0;
//     console.log(clickCount)
//     console.log('matching')
//   }
//   else if(((document.querySelectorAll('div.clicked'))[i] !== (document.querySelectorAll('div.clicked'))[i+1]) && (document.querySelectorAll('div.clicked'))[i+1] !== undefined){
//     clickedCard.classList.remove('clicked');
//     clickCount = 0;
//     console.log(clickCount)
//     console.log('not matching')
//   }
//   else{

//   }

  // for(i=0; i<document.querySelectorAll("div.clicked").length; i++){
  //   if(document.querySelectorAll("div.clicked")[i] === document.querySelectorAll("div.clicked")[i+1] && document.querySelectorAll('div.clicked')[i+1] !== undefined){
  //     console.log(document.querySelector("div.clicked"))
  //     clickCount = 0;
  //     console.log(clickCount);
  //     return
  //   }

  //   else if(document.querySelectorAll("div.clicked")[i] !== document.querySelectorAll("div.clicked")[i+1] && document.querySelectorAll("div.clicked")[i+1] !== undefined){
  //     console.log('im in the else if')
  //     // for(let div of document.querySelectorAll("div.clicked")){
  //     //   div.classList.remove('clicked');
  //     // }
  //     // clickCount = 0
  //     // console.log(clickCount);
  //     return
  //   }

  //   else if(document.querySelectorAll("div.clicked")[i+1] === undefined){
  //     console.log('im in the else if #2')
  //   }

  //   else{
  //     console.log('nothing')
  //   }
  // }