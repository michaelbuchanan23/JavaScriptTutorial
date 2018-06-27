"option strict"

function get() {
    var id = document.getElementById("iId").value;
    $.getJSON("http://localhost:49997/Majors/Get/" + id)
        .done(function (resp) {
            console.log(resp);
            display(resp.Data);
        });
}

function display(major) {
    document.getElementById("pId").textContent = "";
    document.getElementById("pDescription").textContent = "";
    document.getElementById("pMinSat").textContent = "";
    if (major == null) {
        document.getElementById("pId").textContent = "ID DOESN'T EXIST";
        document.getElementById("pDescription").textContent = "";
        document.getElementById("pMinSat").textContent = "";
    } else {
        document.getElementById("pId").textContent = major.Id;
        document.getElementById("pDescription").textContent = major.Description;
        document.getElementById("pMinSat").textContent = major.MinSat;
    }
}