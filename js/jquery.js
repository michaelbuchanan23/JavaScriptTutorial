"option strict"

$().ready(function () {
    $("#inpbox")
        .val("Mike")    //.val() is saying to read the value out of the input box -- val is used for inputs
                        //.val([data]) is saying to put [data] into the input box
        .css("color", "red")
        .css("font-weight", "bold");

    $("button").click(function () {
        var txt = $("#inpbox").val(); //reading the value of the input box
        $("label").text(txt);   //.text() is used for text like labels rather than val for inputs
    });
});

//adds the color red and bold to the inbox
