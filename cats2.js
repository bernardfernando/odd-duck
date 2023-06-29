"use strict";
console.log("mew meow");

if (localStorage.cats) {
  const catsFromLs = JSON.parse(localStorage.getItem("cats"));
  for (let i = 0; i < catsFromLs.length; i++) {
    let newCat = new Cat(catsFromLs[i].name);
    allCats.push(newCat);
  }
}

catForm.addEvenListener("submit", handCatSubmit);
