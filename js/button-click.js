"option strict" //can't declare variables without using var
console.log("Wired up properly"); //tells us if everything is connected properly to the button-click.html page

function add() {
    var op1Ctrl = document.getElementById("op1");
    var op2Ctrl = document.getElementById("op2");
    var op1Value = op1Ctrl.value; //using ".value" here gets the input the user types in
    var op2Value = op2Ctrl.value;
    var labelCtrl = document.getElementById("answer");

    //using Number function to turn our strings into numbers -- i.e., parse
    labelCtrl.textContent = Number(op1Value) + Number(op2Value); //".textContent" here puts the input above in this variable
}

function subtract() {
    var op1Ctrl = document.getElementById("op1");
    var op2Ctrl = document.getElementById("op2");
    var op1Value = op1Ctrl.value;
    var op2Value = op2Ctrl.value;
    var labelCtrl = document.getElementById("answer");

    //using Number function to turn our strings into numbers -- i.e., parse
    labelCtrl.textContent = Number(op1Value) - Number(op2Value);
}

function multiply() {
    var op1Ctrl = document.getElementById("op1");
    var op2Ctrl = document.getElementById("op2");
    var op1Value = op1Ctrl.value;
    var op2Value = op2Ctrl.value;
    var labelCtrl = document.getElementById("answer");

    //using Number function to turn our strings into numbers -- i.e., parse
    labelCtrl.textContent = Number(op1Value) * Number(op2Value);
}

function divide() {
    var op1Ctrl = document.getElementById("op1");
    var op2Ctrl = document.getElementById("op2");
    var op1Value = op1Ctrl.value;
    var op2Value = op2Ctrl.value;
    var labelCtrl = document.getElementById("answer");

    //using Number function to turn our strings into numbers -- i.e., parse
    labelCtrl.textContent = Number(op1Value) / Number(op2Value);
}

function clicked() {
    var inputCtrl = document.getElementById("thetext"); //gets access to thetext input box
    var inputValue = inputCtrl.value;   //gets value that user typed in
    var labelCtrl = document.getElementById("thelabel");    //get access to thelabel label control
    labelCtrl.textContent = inputValue; //puts the user inputted value into the label
}