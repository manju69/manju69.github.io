
$(document).ready(function(){
  var width = $("#width").val();
  var growAmount = $("#growthAmount").val();
  var growRate = $("#growthRate").val();
  var numberCircles = 1;

  $("#width").change( function(e){
      width = e.target.value;
  });
  $("#growthAmount").change( function(e){
      growAmount = e.target.value;
  });
  $("#growthRate").change( function(e){
      growRate = e.target.value;
  });
  $("#numberCircles").change( function(e){
      numberCircles = e.target.value;
  });

  let countTotal = 0;

  /**create new div element with associated property */
  $("#start").click(function(){
      for(let i = 0; i<numberCircles; i++){
          addCircle();
      }
  });

  const addCircle = () => {
      countTotal++;
      const count = countTotal;
      var newCircle =  document.createElement("div");
      newCircle.setAttribute("class", "circle");
      newCircle.style.width = width;
      newCircle.style.height = width;
      newCircle.style.left= 50 + (Math.random()*50 -25) +"vw";
      newCircle.style.top = 200 + (Math.random()*100) +"px";
      newCircle.style.backgroundColor = "rgb("+Math.floor(Math.random()*255)+","+ Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
      newCircle.setAttribute("id","circle"+count);
      $("body").append(newCircle);
      newCircle.onclick= function(){
          $("#circle"+count).hide();
      };
      setInterval(function(){
          $("#circle"+count).height($("#circle"+count).height()+parseInt(growAmount));
          $("#circle"+count).width($("#circle"+count).width()+parseInt(growAmount));
      },growRate);
  }


  /** change opacity when mouse enters and leaves in circle */
  $(".circle").mouseleave(function(){

  });

  $(".circle").mouseenter(function(){

  });


});



