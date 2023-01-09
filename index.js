// Detecting Button Presses

var btns = document.querySelectorAll(".drum");
for (var i = 0; i < btns.length; i++) {
   document.querySelectorAll(".drum")[i].addEventListener("mousedown", function () {
      var buttonInnerHTML = this.innerHTML;
      playSound(buttonInnerHTML);
      document.querySelector("." + buttonInnerHTML).classList.add("pressed");
   });
   document.querySelectorAll(".drum")[i].addEventListener("mouseup", function () {
      var buttonInnerHTML = this.innerHTML;
      document.querySelector("." + buttonInnerHTML).classList.remove("pressed");
   });
}

// Detecting keypresses

document.addEventListener("keydown", function (e) {
   var keyValue = e.key;
   playSound(keyValue);
   document.querySelector("." + e.key).classList.add("pressed");
})

document.addEventListener("keyup", function (e) {
   document.querySelector("." + e.key).classList.remove("pressed");
})


// Function to produce the sounds

function playSound(key) {
   switch (key) {
      case "w":
         var audio = new Audio("./sounds/tom-1.mp3");
         audio.play();
         break;
      case "a":
         var audio = new Audio("./sounds/tom-2.mp3");
         audio.play();
         break;
      case "s":
         var audio = new Audio("./sounds/tom-3.mp3");
         audio.play();
         break;
      case "d":
         var audio = new Audio("./sounds/tom-4.mp3");
         audio.play();
         break;
      case "j":
         var audio = new Audio("./sounds/snare.mp3");
         audio.play();
         break;
      case "k":
         var audio = new Audio("./sounds/crash.mp3");
         audio.play();
         break;
      case "l":
         var audio = new Audio("./sounds/kick-bass.mp3");
         audio.play();
         break;
      default:
         console.log(key);
   }  
}