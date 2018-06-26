"option strict"

var technologies = [
    { id: 0, name: "Windows", difficulty: "Medium" }
];

function loaded() {
    display();
}

function add() {
    var id = document.getElementById("pId").value;
    var name = document.getElementById("pName").value;
    var difficulty = document.getElementById("pDifficulty").value;
    var tech = {
        id: id, name: name, difficulty: difficulty
    };
    technologies.push(tech);
    display();
}

function display() {
    var tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for (var technology of technologies) {
        var row = "";
        row += "<tr>";
        row += "<td>" + technology.id + "</td>";
        row += "<td>" + technology.name + "</td>";
        row += "<td>" + technology.difficulty + "</td>";
        row += "<td>" + "<button value='Change' onclick='changepop();' class='btn btn-dark btn-sm'>Change</button>" + "</td>";
        row += "</tr>";
        tbody.innerHTML += row;
    }
}

function edit() {
    var id = document.getElementById("pId").value;
    var name = document.getElementById("pName").value;
    var difficulty = document.getElementById("pDifficulty").value;
    var tech = {
        id: id, name: name, difficulty: difficulty
    };
    var arrIndex = technologies.indexOf(id);

    for (var technology of technologies)
        if (technology.id == id) {
            technologies[arrIndex] = tech;
        }
    display();
}

function changepop() {
    //fill out edit where tech id = tech id in the table
    pId.innerHTML = id;
    pName.innerHTML = name;
    pDifficulty.innerHTML = difficulty;
}