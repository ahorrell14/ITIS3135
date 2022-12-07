$(document).ready(function () {
    //change background of active tab using jQuery Plugin
    $("#active").css("background-color", "honeydew");
    //Ajax to load information
    $.ajax({
        type: "get",
        //URL to json file
        url: "json_files/aboutUs.json",
        dataType: "json",
        success: function(data) {
            //clear id
            $("#bio").html("");
            $.each(data, function(){
                $.each(this, function(key, value) {
                    //Add elements to id "bio"
                    $("#bio").append(
                        //Add first name
                        "<h1>" + value.first_name + "</h1>" +
                        //Add image
                        "<img src=" + value.image + ">" +
                        //Add position
                        "<h2>" + value.position + "</h2>" +
                        //Add favorite genre
                        "<h3>" + "Favorite genre: " + value.fav_genre + "</h3>" + "<br>" +
                        //Add extra information
                        "<h3>" + "Information about me: " + value.bio + "</h3>"
                    );
                });
            });
        }
    });
});