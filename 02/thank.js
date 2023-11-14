const toTxt = document.getElementById("toTxt");

const urlParams = new URLSearchParams(window.location.search);

const value = urlParams.get("rating");

toTxt.innerText = "You selected " + value + " out of 5";

console.log("You selected " + value + " out of 5");
