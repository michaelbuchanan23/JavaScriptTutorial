"option strict"

function create() {

    //creating our major instance from the data that is passed in
    //note that when using check boxes it is .checked and not .value
    var major = {
        //Greg makes this a 0 because it will create the id number for us as a primary key with the controller
        Id: 0,
        Description: document.getElementById("pDescription").value,
        MinSat: document.getElementById("pMinSat").value,
    };

    //creating the major based on the information we put in the major variable above
    $.post("http://localhost:49997/Majors/Create/", major)
        .done(function (resp) {
            console.log(resp);
        });
}