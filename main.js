
let drums = document.querySelectorAll("ellipse");
const kick = document.querySelector(".kick");
const snare = document.querySelector(".snare");
const hihat = document.querySelector(".hihat");
const first_tom = document.querySelector(".first_tom");
const second_tom = document.querySelector(".second_tom");
const third_tom = document.querySelector(".third_tom");
const crash = document.querySelector(".crash");
const ride = document.querySelector(".ride");


function changeColor(){
    for(let drum of drums){
        drum.style.opacity = "0.0"
    }
}


// KICK
document.addEventListener("keydown", (e)=>{
    setTimeout(changeColor, 200)
    
    if(e.code == "Space"){
    (new Audio('sounds/kicks/big-ol-yamaha-kick.wav')).play();
    kick.style.opacity = "0.4";
    }
    
});
// SNARE
document.addEventListener("keydown", (e)=>{
    if(e.code == "KeyC"){
    (new Audio('sounds/snares/acoustic_snare.wav')).play();
    snare.style.opacity = "0.4";
    }
    
});
// TOM-1
document.addEventListener("keydown", (e)=>{
    if(e.code == "KeyV"){
        (new Audio('sounds/toms/ambient_tom_1.wav')).play();
        first_tom.style.opacity = "0.4";
    }
    
});
// TOM-2
document.addEventListener("keydown", (e)=>{
    if(e.code == "KeyB"){
        (new Audio('sounds/toms/ambient_tom_2.wav')).play();
        second_tom.style.opacity = "0.4";
    }
   
});
// TOM-3
document.addEventListener("keydown", (e)=>{
    if(e.code == "KeyN"){
        (new Audio('sounds/toms/ambient_tom_3.wav')).play();
        third_tom.style.opacity = "0.4"
    }
    
});
// HI-HAT
document.addEventListener("keydown", (e)=>{
    if(e.code == "ShiftRight"){
    (new Audio('sounds/hats/chh.wav')).play();
    hihat.style.opacity = "0.4"
    }
  
});
// CRASH
document.addEventListener("keydown", (e)=>{
    if(e.code == "Enter"){
    (new Audio('sounds/Chrash/18_inch_crash.wav')).play();
    crash.style.opacity = "0.4";
    }
    
});
// RIDE
document.addEventListener("keydown", (e)=>{
    if(e.code == "ArrowLeft"){
    (new Audio('sounds/rides/CYMRIDE11.wav')).play();
    ride.style.opacity = "0.4";
    }
  
});
