$(document).ready(function (){

    //jquery plugin to change color
    $("#active").css("background-color", "honeydew");

    //jquery plugin
    //Preload image
    $("img").each(function() {
        var img = new Image();
        img.src = $(this).attr("href");
    });

    //jquery bxSlider plugin
    $(".slider").bxSlider({
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        adaptiveHeight: true
    });

    //jquery plugin to change bxSlider color
    $(".slider div").css("background-color", "darkseagreen");

});
