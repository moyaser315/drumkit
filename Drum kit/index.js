function handleClick() {
  alert("i got cicked");
}
function makeSound(key)
{
  switch (key) {
    case "w":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;

  }
}
/*button animation */
function buttonAnimation(action)
{
  var addAnimation = document.querySelector("."+action);
  addAnimation.classList.add("pressed");
}


/*loop for excuting functions */
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  /////detect button press
  document.querySelectorAll(".drum")[i].addEventListener("click",
    function() {
      var playButton = this.innerHTML;
      makeSound(playButton);
      buttonAnimation(playButton);
      setTimeout(function(){document.querySelector("."+playButton).classList.remove("pressed")},100);
      
    }
  )
  /////detect key strokes
  document.addEventListener("keydown",function(event){
    var keyWord = event.key;
    makeSound(keyWord);
    buttonAnimation(keyWord);
    setTimeout(function(){document.querySelector("."+keyWord).classList.remove("pressed")},100);
    
  })
}
