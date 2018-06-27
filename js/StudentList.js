"option strict"

$().ready(function () {

    // loaded()
    // $("body")
    //     .css("font-size", "1.5em")
    //     .css("background-color", "silver")
    //     .css("padding", "25px");
    // $("#hId")
    //     .css("color", "red")
    //     .css("font-weight", "bold");

    // $("#hDescription")
    //     .css("color", "white")
    //     .css("font-weight", "bold")
    //     .css("font-style", "italic");

    // $("#hMinSat")
    //     .css("color", "blue")
    //     .css("font-weight", "bold");
});

function loaded() {
    $.getJSON("http://localhost:49997/Students/List")
        .done(function (resp) {
            console.log(resp);
            display(resp.Data);
        });
}

function display(students) {
    var tbody = $("tbody");
    tbody.html("");
    for (var student of students) {
        var tr = $("<tr></tr>");
        tr.append($("<td>" + student.Id + "</td>"));
        tr.append($("<td>" + student.Name + "</td>"));
        tr.append($("<td>" + student.SAT + "</td>"));
        tr.append($("<td>" + student.major.Description + "</td>"));
        tr.append($("<td>" + student.major.MinSat + "</td>"));
        tbody.append(tr);
    }
}

//pre jQuery styling of display function
// function display(majors) {
//     var tbody = document.getElementById("tbody");
//     tbody.innerHTML = "";
//     for (var major of majors) {
//         var row = "";
//         row += "<tr>";
//         row += "<td>" + major.Id + "</td>";
//         row += "<td>" + major.Description + "</td>";
//         row += "<td>" + major.MinSat + "</td>";
//         row += "</tr>";
//         tbody.innerHTML += row;
//     }
// }