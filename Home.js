$(document).ready(function() {

    //change background of active tab using jQuery Plugin
    $("#active").css("background-color", "honeydew");

    //Using jquery plugin each to preload each image
    //Preload image
    $("img").each(function() {
        var img = new Image();
        img.src = $(this).attr("href");
    });

    //using jquery plugin to hide text
    //Hide text until fadeIn
    $(".information").hide();

    //using jquery plugin to fade in text
    //fade in first text
    $("#firstFade").fadeIn(3000, function (){
        //fade in second text
        $("#secondFade").fadeIn(3000);
    });
});