"option strict"

var students = [
    { id: 0, name: "John", gpa: 3.5, sat: 1400, year: "FR" }
];

function loaded() {
    display();
}

function add() {
    var id = document.getElementById("pId").value;
    var name = document.getElementById("pName").value;
    var gpa = document.getElementById("pGPA").value;
    var sat = document.getElementById("pSAT").value;
    var year = document.getElementById("pYear").value;
    var stud = {
        id: id, name: name, gpa: gpa, sat: sat, year: year
    };
    students.push(stud);
    display();
}

function display() {
    var tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for (var student of students) {
        var row = "";
        row += "<tr>";
        row += "<td>" + student.id + "</td>";
        row += "<td>" + student.name + "</td>";
        row += "<td>" + student.gpa + "</td>";
        row += "<td>" + student.sat + "</td>";
        row += "<td>" + student.year + "</td>";
        row += "</tr>";
        tbody.innerHTML += row;

    }
}