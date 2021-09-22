console.log("page loaded...");

var newName = document.querySelector(".card-body h1");

function edit() {
    newName.innerText = "Christian Dean Demesa";
}

var Todd = document.querySelector("#Todd");
var ToddIcons = document.querySelector("#ToddIcons");
var requestNumber = document.querySelector(".requestNumber");
var requestCount = 2;
var connectNumber = document.querySelector(".connectNumber");
var connectCount = 418;

function acceptTodd() {
    Todd.remove();
    ToddIcons.remove();
    requestCount--;
    requestNumber.innerText = requestCount;
    connectCount++;
    connectNumber.innerText = connectCount;
}

function denyTodd() {
    Todd.remove();
    ToddIcons.remove();
    requestCount--;
    requestNumber.innerText = requestCount;
}

var Phil = document.querySelector("#Phil")
var PhilIcons = document.querySelector("#PhilIcons")

function acceptPhil() {
    Phil.remove();
    PhilIcons.remove();
    requestCount--;
    requestNumber.innerText = requestCount;
    connectCount++;
    connectNumber.innerText = connectCount;
}

function denyPhil() {
    Phil.remove();
    PhilIcons.remove();
    requestCount--;
    requestNumber.innerText = requestCount;
}