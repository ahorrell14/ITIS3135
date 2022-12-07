$(document).ready(function () {

    //jquery plugin to change color
    $("#active").css("background-color", "honeydew");
    //Ajax to load json from nav_list
    $("#nav_list li").click(function () {
        //find title of json file
        var title = $(this).children("a").attr("title");
        var filename = title + ".json";
        //begin ajax
        $.ajax({
            url: "json_files/" + filename,
            dataType: "json",

            success: function (data) {
                //clear show podcasts area
                $("#show_podcasts").html("");

                $.each(data, function() {
                    $.each(this, function (key, value) {
                        //Add information to show podcasts area
                        $("#show_podcasts").append(
                            "<img src=" + value.image + ">" +
                            "<h1>" + value.title + "</h1>" +
                            "<h2>" + "Hosted by " + value.host + "</h2>" +
                            "<h3>" + value.description + "</h3>"
                        );

                    });
                });
            }
        });
    });
});