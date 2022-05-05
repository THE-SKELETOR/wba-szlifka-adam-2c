$(document).ready(function(){
    $("button").click(function(){
        $("#text").stop();
        $("#text").fadeToggle(500);
    });
});