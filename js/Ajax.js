"option strict"

function loaded() {
    $.getJSON("http://localhost:49997/Majors/List")
        .done(function(resp) {
            console.log(resp);
            display(resp.Data);
        });
}

function display(majors) {
    var tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for (var major of majors) {
        var row = "";
        row += "<tr>";
        row += "<td>" + major.Id + "</td>";
        row += "<td>" + major.Description + "</td>";
        row += "<td>" + major.MinSat + "</td>";
        row += "</tr>";
        tbody.innerHTML += row;
    }
}