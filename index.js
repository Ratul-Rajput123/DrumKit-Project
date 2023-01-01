
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  // button press by mouse
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var soundButton = this.innerHTML;

    makeSound(soundButton);
    buttonAnimation(soundButton);
    
    })
    // keyboard press
    document.addEventListener("keydown",function(event){
      makeSound(event.key);
      buttonAnimation(event.key);
    

  });
}
function makeSound(key){
  switch(key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kickbass = new Audio("sounds/kickbass.mp3");
      kickbass.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(soundButton);
  }
}
function buttonAnimation(currentkey){


  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
   activeButton.classList.remove("pressed");
  },100)

}