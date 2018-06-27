"option strict"

function get() {
    var id = document.getElementById("iId").value;
    $.getJSON("http://localhost:49997/Majors/Get/" + id)
        .done(function (resp) {
            console.log(resp);
            load(resp.Data);
        });
}

//function to load data from an existing user into the forms
function load(major) {
        document.getElementById("pId").value = major.Id;
        document.getElementById("pDescription").value = major.Description;
        document.getElementById("pMinSat").value = major.MinSat;
}

function remove() {
    var major = {
        Id: document.getElementById("pId").value,
        Description: document.getElementById("pDescription").value,
        MinSat: document.getElementById("pMinSat").value
    };

    $.post("http://localhost:49997/Majors/Remove/", major)
        .done(function (resp) {
            console.log(resp);
        });
}