function cityChange() {
    alert("Loading weather report...");
}
function switchTemp(temp) {
    for(var i=1; i<9; i++) {
        var tempID = document.querySelector(".temp" + i);
        var oldTemp = parseInt(tempID.innerText);
        if(temp.value == "celsius") {
            tempID.innerText = FtoC(oldTemp);
        }
        else {
            tempID.innerText = CtoF(oldTemp);
        }
    }
}
function FtoC(newTemp) {
    return Math.round(5/9 * (newTemp-32)) + "\xB0";
}
function CtoF(newTemp) {
    return Math.round(9/5 * newTemp + 32) + "\xB0";
}
var cookieBox = document.querySelector(".footer");
function removeCookie() {
    cookieBox.remove();
}