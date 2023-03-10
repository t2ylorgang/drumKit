// This detects when you click on a drum button; then it calls the makeSound() and buttonAnimation() functions with the required argument.
var numberOfDrumButtons = document.querySelectorAll(".drum").length

for (var i = 0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// This detects when you press the key on the keyboard; then it calls the makeSound() and buttonAnimation() functions with the required argument.
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        default:
            console.log(buttonInnerHTML)
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    // Below code uses setTimeout function to remove the pressed class after 0.1 seconds to create a "flash" effect.
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

// Below is a more advanced way of doing the above with forEach and arrow functions.
// let buttons = document.querySelectorAll("button");

// let clickEvent = () => {
//     alert("I got clicked!");
// }

// buttons.forEach((item) => item.addEventListener("click", clickEvent));