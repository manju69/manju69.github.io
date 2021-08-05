var win = true;
$(function () {
  $("#start").click(reset);
  $("#maze").mouseover(
    function(){
      $("#maze div.boundary").on();
      $("#end").on();
    },
    function(){
      $("#maze div.boundary").off();
      $("#end").off();
    }
    );
});

  function looseCase() {
    win = false;
    $("#status").html("Sorry, you lost").css("color", "red");
    $(".boundary").each(function () {
      $(this).addClass("youlose");
    });
  }

  function reset() {
    win = true;
    $("#status").html("Game Started!").css("color", "green");
    $(".boundary").each(function () {
      $(this).removeClass("youlose");
    });
    $("#maze div.boundary").on("mouseover", looseCase);
    $("#end").on("mouseover", end);
  }
  function end() {
    $("#status").html("Game End!").css("color", "blue");
    let currentStatus = (win == true) ? "You win! :]" : "Sorry, you lost! :[";
    alert(currentStatus);
    $(this).off();
    $("#maze div.boundary").off();
    return true;
  }
