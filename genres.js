$(document).ready(function (){

    //jquery plugin to change color
    $("#active").css("background-color", "honeydew");

    //jquery plugin
    //Preload image
    $("img").each(function() {
        var img = new Image();
        img.src = $(this).attr("href");
    });

    //jquery widget for accordion
    $("#accordion").accordion({
        event: "click",
        heightStyle: "content",
        collapsible: true
    });

});

