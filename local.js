"use strict";
console.log("dont cry for me Argentina");

let darkMode = false;
let lightMode = false;

document.getElementById("darkButton").addEventListener("click",enterDarkMode);
document.getElementById("lightButton").addEventListener("click",enterLightMode);

function enterDarkMode () {
    let body = document.body;
    let welcome = document.getElementById("welcome");
    let button = document.getElementById("darkButton");
    body.classList.remove("light");
    welcome.classList.remove("light");
    body.classList.add("dark");
    welcome.classList.add("dark")
    button.setAttribute("checked","checked");
    darkMode = true;
    saveMode();
}

function enterLightMode () {
    let body = document.body;
    let welcome = document.getElementById("welcome");
    let button = document.getElementById("lightButton");
    body.classList.remove("dark");
    welcome.classList.remove("dark");
    body.classList.add("light");
    welcome.classList.add("light");
    button.setAttribute("checked","checked");
    lightMode = true;
    saveMode();
}    

function saveMode () {
    let mode = JSON.stringify(darkMode);
    localStorage.setItem("darkMode", mode);
}

function pageLoad () {
    let storeMode = JSON.parse(localStorage.getItem("darkMode"))

if(storedMode === null) {
    console.log("null");
    return;   
} else if (storeMode === "false") {
    console.log("light");
    enterLightMode()
} else if (storeMode) {
    console.log("dark")
    enterDarkMode()
}

}