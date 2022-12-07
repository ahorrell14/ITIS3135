$(document).ready(function() {

    //using jquery plugin
    //change background of active tab
    $("#active").css("background-color", "honeydew");

    //Regular expression for email id
    var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

    //Focus on first name
    $("#fname").focus();

    //using jquery plugin each to preload image
    //Preload image
    $("img").each(function() {
        var img = new Image();
        img.src = $(this).attr("href");
    });

    //Using jQuery to validate name and email
    //Executed when submit button is clicked
    $("#newsForm").submit(function(evt) {
        //Valid variable
        var isValid = true;
        //Name validations
        var first = $("#fname").val().trim();
        var last = $("#lname").val().trim();
        //Validate first name
        //If input is empty
        if (first == ""){
            $("#fname").next().text("This field is required.");
            isValid = false;
        } else {
            $("#fname").next().text("");
        }
        //assign name with no spaces
        $("#fname").val(first);
        //Validate last name
        //If input is empty
        if (last == ""){
            $("#lname").next().text("This field is required.");
            isValid = false;
        } else {
            $("#lname").next().text("");
        }
        //assign name with no spaces
        $("#lname").val(last);
        //Email validations
        var email1 = $("#email1").val().trim();
        var email2 = $("#email2").val().trim();

        //Validate first email
        //If input is empty
        if (email1 == ""){
            $("#email1").next().text("This field is required.");
            isValid = false;
            //Validate if email is in correct format
        } else if (!emailPattern.test(email1)){
            $("#email1").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email1").next().text("");
        }
        //Assign email1 with no spaces
        $("#email1").val(email1);
        //Validate second email
        //If input is empty
        if (email2 == ""){
            $("#email2").next().text("This field is required.");
            isValid = false;
            //If first email does not equal second email
        } else if (email1 != email2){
            $("#email2").next().text("This email must equal initial entered email.");
            isValid = false;
            //Validate if email is in correct format
        } else if (!emailPattern.test(email2)){
            $("#email2").next().text("Must be a valid email address.");
        } else {
            $("#email2").next().text("");
        }
        //Submit form only if isValid is true
        if (isValid == false){
            evt.preventDefault();
        }
    });
});