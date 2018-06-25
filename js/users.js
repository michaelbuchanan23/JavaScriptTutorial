"option explicit"

var users = [
    { id: 1, username: "sa", password: "sa", lastname: "admin", isAdmin: true, active: true },
    { id: 2, username: "aa", password: "aa", lastname: "Amos", isAdmin: false, active: true },
    { id: 3, username: "bb", password: "bb", lastname: "Badin", isAdmin: true, active: false },
    { id: 4, username: "cc", password: "cc", lastname: "Cory", isAdmin: false, active: false },
    { id: 5, username: "dd", password: "dd", lastname: "Dugan", isAdmin: true, active: true }
];

function loaded() {
    var tbody = document.getElementById("tbody");
    for (var idx = 0; idx < users.length; idx++) {
        var user = users[idx];
        var row = "";
        row += "<tr>";
        row += "<td>" + user.id + "</td>";
        row += "<td>" + user.username + "</td>";
        row += "<td>" + user.password + "</td>";
        row += "<td>" + user.lastname + "</td>";
        row += "<td>" + ((user.isAdmin) ? 'Y': 'N') + "</td>"; //this is a ternary operator
        row += "<td>" + ((user.active) ? 'Y': 'N') + "</td>";
        row += "</tr>";
        tbody.innerHTML += row;
    }
    //Greg said we could also use for(var user of users)
    // users.forEach(table); //I couldn't get this function to work and Greg used the above
}

// function table() {
//     var str = "<tr><td>" + users.id + "</td><td>" + users.username + "</td><td>" + users.password + "</td><td>" + users.lastname + "</td><td>" + users.isAdmin + "</td><td>" + users.active + "</td></tr>";
//     tbody.innerHtml += str;
// }