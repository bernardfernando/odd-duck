"use strict";
console.log("Meow");

const catForm = document.getElementById("catForm");
const catList = document.getElementById("catList");

const allCats = [];

function Cat(name) {
  this.name = name;
  this.render = function () {
    const listItem = document.createElement("li");
    listItem.textContent = this.name;
    catList.appendChild(listItem);
  };
}
