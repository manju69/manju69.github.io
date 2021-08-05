$(document).ready(function(){
    var win = true;
    $("#start").click(reset);
    function reset(e){
        win = true;
        $("#status").html("Get Started!").css("color", "green");
        $(".boundary").each(function(){
            $(this).removeClass("youlose");
        });
        $("#maze div.boundary").mouseover(loose);
        $("#end").mouseover(end);
    }
    function loose(){
        win = false;
        $("#status").html("Sorry, you lost, :[").css("color", "red");
        $("#maze div.boundary").each(function(){
            $(this).addClass("youlose");
        });
    }

    function end(){
        $("#status").html("Game End!!").css("color", "green");
            let status  = (win)?"You win! :]":"Sorry, You lost :[";
            alert(status);
            $("#maze div.boundary").off("mouseover");
            $("#end").off("mouseover");
    }
});