"use strict";

window.onload = function() {
	document.getElementById("hello").onclick = sayHi;
	document.getElementById("funfact").onclick = funfact;
};

function sayHi() {
	alert("Hi! I am Borui Li!");
}

function funfact() {
	document.getElementById("myFact").innerHTML = "I Like to";
}