"option strict"

var theNumber = 0;
var inputCtrl = null;

function loaded() {
    inputCtrl = document.getElementById("value");
    inputCtrl.value = theNumber;
    inputCtrl.style.color = "red";
    inputCtrl.style.fontWeight = "bold";
    inputCtrl.style.fontStyle = "italic";
}

function display() {
    //store the new number value
    inputCtrl.value = theNumber;
    
    //figure out even or odd
    //protip-- isEven = theNumber %2 == 0; //this will return a 1 or 0 which can be interpreted as true or false
    var isEven;
    if (theNumber % 2 === 0) {
        isEven = true;
    }
    else {
        isEven = false;
    }

    //protip -- inputCtrl.style.color = (isEven)? "red" : "black";
    //if isEven is true then red, else black
    //isEven?inputCtrl.style.color="red": inputCtrl.style.color="black";
    if (isEven) {
        inputCtrl.style.color = "red";
    } else {
        inputCtrl.style.color = "black";
    }

    //make numbers divisible by 3 bold
    var isDivisibleBy3 = theNumber % 3 == 0;
    inputCtrl.style.fontWeight = (isDivisibleBy3) ? "bold" : "normal";

    //make numbers divisible by 7 italicized
    //var isDivisibleBy7 = theNumber % 7 == 0;
    inputCtrl.style.fontStyle = (theNumber % 7 == 0) ? "italic" : "normal";
}

function add() {
    theNumber++;
    display();
}

function sub() {
    theNumber--;
    display();
}