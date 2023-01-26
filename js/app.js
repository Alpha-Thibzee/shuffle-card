console.log('script loaded');
let cardBack = document.querySelector('.cardBack');


class Cards {

    name;
    color;
    value;
    rank;
    image;

    constructor(name, color, value, rank, image) {

        this.name = name;
        this.color = color;
        this.value = value;
        this.rank = rank;
        this.image = image;  

    }

}

class Deck {

    cards = [];
    colors = ["c","d","h","s"];
    values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

    constructor() {
        for (const color of this.colors) {
            for(let i = 0; i < this.values.length; i++) {
                this.cards.push(new Cards(this.values[i]+color, color, this.values[i], i , `assets/cards/${this.values[i]}${color}.gif`));
            }
        }

    }

}

deck = new Deck();
let i = 0;

// for (const card of deck.cards) {
    

//     let p = document.createElement("p");
//     let img = document.createElement("img");
//     let divCard = document.createElement("div");
//     let sectionCard = document.querySelector(".card-parent");
//     p.innerHTML = "Nom de l'image : "+card.name;
//     img.src = card.image;
//     sectionCard.appendChild(divCard);
//     sectionCard.classList.add("d-flex", "justify-content-center", "align-items-center", "container", "row", "mx-auto");
//     divCard.classList.add("card", "mb-3", "col-2");
//     img.classList.add("card-img-top");
//     p.classList.add("text-center");
    
//     divCard.appendChild(img);

//     divCard.appendChild(p);
   
    
// }

function shuffle(array) {

    for (let i = deck.cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck.cards[i], deck.cards[j]] = [deck.cards[j], deck.cards[i]];
    }

    console.log(deck.cards);
    

}


let cardNbr = deck.cards.length;
function drawCard(){
   
    console.log("Nombre de cartes : "+cardNbr);
    if(cardNbr === 0){
        return;
    }
  
    

    let p = document.createElement("p");
    let img = document.createElement("img");
    let divCard = document.createElement("div");
    let sectionCard = document.querySelector(".card-parent");
    p.innerHTML = "Nom de l'image : "+deck.cards[i].name;
    img.src = deck.cards[i].image;
    sectionCard.appendChild(divCard);
    sectionCard.classList.add("d-flex", "justify-content-center", "align-items-center", "container", "row", "mx-auto", "unselectable");
    divCard.classList.add("card", "mb-3", "col-2", "unselectable");
    img.classList.add("card-img-top", "unselectable");
    p.classList.add("text-center" , "unselectable");

    
    divCard.appendChild(img);

    divCard.appendChild(p);

    i ++;
    cardNbr --;
    let cardDisplay = document.querySelector(".cardNbr");
  
    cardDisplay.innerHTML = "Nombre de cartes : "+cardNbr;
}

shuffle(deck.cards);

cardBack.addEventListener("click", ()=> drawCard());