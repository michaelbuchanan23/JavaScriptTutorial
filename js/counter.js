"option strict"

var theNumber = 0;

var inputCtrl = document.getElementById("value");

function add() {
    var inputCtrl = document.getElementById("value");
    theNumber++;
    inputCtrl.value = theNumber;
}

function sub() {
    var inputCtrl = document.getElementById("value");
    theNumber--;
    inputCtrl.value = theNumber;
}