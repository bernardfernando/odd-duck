"use strict"
console.log("check  if goat goat works");

// global variable: querySelector returns the first element in the document that matches


const duckProductContainer = document.querySelector("section");
const image1 = document.querySelector("section img:nth-child(1)");
const image2 = document.querySelector("section img:nth-child(2)");
const image3 = document.querySelector("section img:nth-child(3)");
const resultsButton = document.querySelector("#butt1");
const chartButton = document.querySelector("#butt2");
const chartButton2 = document.querySelector("butt3");



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
     }
    

 // use these random numbers set the attributes of the 3 images in the document
 
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
function renderResults () {
    //console.log("your results are in heree")

    let ul = document.querySelector("ul");
    for (let i = 0; i < allDuckProducts.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${allDuckProducts[i].productName} had ${allDuckProducts[i].views} views and was clicket ${allDuckProducts[i].clicks} times`;
        ul.appendChild(li);
    }
}


function handleDuckProductClick(event) {
        if (event.target === duckProductContainer || !event.target.alt ) {
            alert("Please click on an image");

        } else {
            clicks++;
            let clickedDuckProduct = event.target.alt;
            
            for(let i = 0; i < allDuckProducts.length; i++) {
                if(clickedDuckProduct === allDuckProducts[i].productName) {
                allDuckProducts[i].clicks++;
                break;
                }
            }
            if (clicks === maxClicksAllowed) {
                duckProductContainer.removeEventListener("click", handleDuckProductClick);
                duckProductContainer.className = "no Voting";
                resultsButton.addEventListener("click", renderResults);
                chartButton.addEventListener("click", renderChart);
                chartButton2.addEventListener("click",renderChart2);
                resultsButton.className = "clicks-allowed";

            } else {
                renderDuckProducts();

            }
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


// chart day 27 June 2023

function renderChart () {
        const productNames = [];
        const productViews = [];
        const productClicks = [];

        for (let i = 0; i<allDuckProducts.length; i++){
            productNames.push(allDuckProducts[i].productName);
            productViews.push(allDuckProducts[i].views); 
            productClicks.push(allDuckProducts[i].clicks);
        }
    console.log(productNames);
    console.log(productViews);
    console.log(productClicks);

// use function now


    const data = {
        labels:productNames,
        datasets: [
            {
                label:"clicks",
                data: productClicks,
                backgroundColor: ["#f7f7f7"],
                borderColor: ["#074e67"],
                borderWidth:1
            },
            
            {
                label:productViews,
                data:productViews,  // changed from productViews
                backgroundColor: ["#D36B00"],
                borderColor: ["#42032C"],
                borderWidth: 1,
            }

        ]
    };

    const config = {
        type: "bar",
        data: data
    };

    const productSurveyChart = document.getElementById("myChart");
    const productChart = new Chart(productSurveyChart, config);

////lical storage function invoking goes here
setLocalStorage();

};

function setLocalStorage() {

    localStorage.setItem("duck-pro-duct", JSON.stringify(allDuckProducts))
}

function checkLocalStorage() {
    const localDuckProDuct = JSON.parse(localStorage.getItem("duck-pro-duct"))
    console.log(localDuckProDuct);
    if (localDuckProDuct) {
        allDuckProduct = localDuckProDuct;
    } else {
        for (let i = 0; i < newDuckRange.length; i++) {
            //console.log(`assets/images/`+ newDuckRange[i] +`.jpg`);
               new DuckProduct(newDuckRange[i], `assets/images/`+ newDuckRange[i] +`.jpg`);
            
            }
    }
}

checkLocalStorage ()
renderduckProducts()



/*
function renderChart2() {

    const productNames2 = [];
    const productClicks2 = [];
    const productViews2 = [];

    for (let k=0; k<allDuckProducts.length; k++) {
        productNames2.push(allDuckProducts[k].productName);
        productClicks2.push(allDuckProducts[k].clicks)
        productViews2.push(allDuckProducts[k].views);
    }

    const data2 = {
        label: productNames2,
        datasets: [
            {
            label:"Clicks",
            data:productClicks2,
            backgroundColor: ["#f7f7f7"],
            borderColor: ["#074e67"],
            borderWidth:1
            },
            {
            label: "Views",
            data: productViews2,
            backgroundColor: ["#D36B00"],
            borderColor: ["#42032C"],
            borderWidth: 1,

            }
        ]
    };


    const config2 = {
        type:"pie",
        data: data2
    };


    const newChart = document.getElementById("myChart2");
    const productChart2 = new Chart(newChart, config2)

};*/
