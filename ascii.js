"use strict";
var interval = null;
var delay = 250;
var time = 0;
var animationType = "EXERCISE";
var textArea;
var ANIMATIONS = [];

window.onload = function(){
   
    textArea = document.getElementById("text-area");
    document.getElementById("start").onclick = startAnimation;
    document.getElementById("animation").onchange = chooseAnimation;
    document.getElementById("stop").onclick = stopAnimation;
    document.getElementById("fontsize").onchange = chooseFontsize;
    document.getElementById("turbo").onchange = chooseTurbo;};

function startAnimation(){
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("animation").disabled = true;
    clearInterval(interval);
    interval = setInterval(playAnimation,delay);
}
function playAnimation(){
    textArea.value = ANIMATIONS[animationType].split("=====\n")[time];
    time++;
    time = time %  ANIMATIONS[animationType].split("=====\n").length;
}

function chooseAnimation(e){
    animationType = e.target.value;
}

function stopAnimation(){
    clearInterval(interval);
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("animation").disabled = false;
    time = 0;
}

function chooseFontsize(e){
    let fontSize= 0;
    switch(e.target.value){
        case "Tiny":
            fontSize = 7;
            break;
        case "Small":
            fontSize = 10;
            break;
        case "Medium":
            fontSize = 12;
            break;
        case "Large":
            fontSize = 16;
            break;
        case "Extra Large":
            fontSize = 24;
            break;
        case "XXL":
            fontSize = 32;
            break;
        default:
            fontSize = 12;
    }
    textArea.setAttribute("style","font-size:"+fontSize+"pt;");
}

function chooseTurbo(e){
   delay= (e.target.checked)? 50: 250;
    clearInterval(interval);
    interval = setInterval(playAnimation,delay);
}