"use strict"
console.log("check  if goat goat works");

// global variable: querySelector returns the first element in the document that matches


const duckProductContainer = document.querySelector("section");
//console.log(duckProductContainer);
const image1 = document.querySelector("section img:nth-child(1)");
console.log(image1);
const image2 = document.querySelector("section img:nth-child(2)");
console.log(image2);
const image3 = document.querySelector("section img:nth-child(3)");
console.log(image3);
const resultsButton = document.querySelector("section")
console.log(resultsButton);

let clicks = 0;
const maxClicksAllowed = 5;

let allDuckProducts = [];

function getRandomNumber() {
    return Math.floor(Math.random()*allDuckProducts.length);
console.log()
}
Math.random(15)

function DuckProduct(productName, src){
    this.productName = productName;
    this.src = src;
    this.clicks = 0;
    this.views = 0;
    allDuckProducts.push(this);
    //console.log(allDuckProducts);
}


 //need to generate numbers to reference the product we want to render
 function renderDuckProducts () {
    let product1 = getRandomNumber();
    let product2 = getRandomNumber();
    let product3 = getRandomNumber();

    // ensure 3 different products are shown at a time

    while(product1 === product2 || product2 === product3 || product1 === product3) {
        product2 = getRandomNumber();
        product3 = getRandomNumber();
        console.log(product1);
        console.log(product2);
        console.log(product3);

   }
    //    while(product1 === product3 || product2 === product3){
    //     product3 = getRandomNumber();
    // }

 // use these random numbers set the attributes of the 3 images in the document
 console.log(image1);
 
    image1.src = allDuckProducts[product1].src;
   
    image2.src = allDuckProducts[product2].src;
    image3.src = allDuckProducts[product3].src;
    image1.alt = allDuckProducts[product1].productName;
    image2.alt = allDuckProducts[product2].productName;
    image3.alt = allDuckProducts[product3].productName;

    allDuckProducts[product1].views++;
    allDuckProducts[product2].views++;
    allDuckProducts[product3].views++;

}

// counting clicks

function handleDuckProductClick(event) {
        if (event.target === duckProductContainer) {
            alert("Please click on an image");
        } else {
            clicks++;
            let clickedDuckProduct = event.target.alt;
            for(let i = 0; i < allDuckProducts.length; i++) {
                if(clickedDuckProduct === allDuckProducts[i].name) {
                allDuckProducts[i].clicks++;
                break;
                }
            }
            if (clicks === maxClicksAllowed) {
                duckProductContainer.removeEventListener("click", handleDuckProductClick);
                duckProductContainer.className = "no Voting";
                resultsButton.addEventListner("click", renderResults);
                resultsButton.className = "clciks-allowed";
            } else {
                renderDuckProducts();

            }
    }
}

function renderResults () {
    //console.log("your results are in heree")

    let ul = document.querySelector("ul");
    for (let i = 0; i < allDuckProducts.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${allDuckProducts[i].name} had ${allDuckProducts[i].views} views and was clicket ${allDuckProducts[i].clicks} times`;
        ul.appendChild(li);
    }
}

const newDuckRange = [
    "bag",
    "banana",
    "bathroom",
    "boots",
    "breakfast",
    "bubblegum",
    "chair",
    "cthulhu",
    "dog-duck",
    "dragon",
    "pen",
    "pet-sweep",
    "scissors",
    "shark",
    "sweep",
    "tauntaun",
    "unicorn",
    "water-can",
    "wine-glass"
];

//new products

for (let i = 0; i < newDuckRange.length; i++) {
//console.log(`assets/images/`+ newDuckRange[i] +`.jpg`);
   new DuckProduct(newDuckRange[i], `assets/images/`+ newDuckRange[i] +`.jpg`);

}
    
renderDuckProducts();

duckProductContainer.addEventListener("click", handleDuckProductClick);


// chart day