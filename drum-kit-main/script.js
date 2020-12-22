let numberOfDrumBtn = document.querySelectorAll(".drum");
console.log(numberOfDrumBtn) // select all button

for (var i = 0; i < numberOfDrumBtn.length; i++) {
  numberOfDrumBtn[i].addEventListener("click", function () {
    let buttonValue = this.value;
    console.log(buttonValue) //tom-w, tom-a, tom-s, tom-d...
    new Audio("sounds/"+buttonValue+".mp3").play();
  });
}
document.addEventListener("keypress", function (event) {
  entryKey = event.key; // w, a, s, d, j, k, l
  console.log(entryKey)
  new Audio("sounds/tom-"+entryKey+".mp3").play(); // tom-(w, a, s, d, j, k, l)
  let activeButton = document.querySelector("." + entryKey);
  activeButton.classList.add("pressed");
  setTimeout(()=>{activeButton.classList.remove("pressed");}, 100);
});

////////////////////////////////////
/////// ANOTHER SOLUTION ///////////
////////////////////////////////////

// const playSound = (e) => {
//   let pressedKey;
//   let pressedDrum;
//   let audio;

//   if (e.type === 'click') {
//     pressedKey = e.currentTarget.innerText;
//     console.log(pressedKey)
//   } else {
//     pressedKey = e.key;
//   }

//   if ('wasdjkl'.includes(pressedKey)) {
//     pressedDrum = document.querySelector(`.${pressedKey}.drum`);
//     pressedDrum.classList.add('pressed');
//     setTimeout(() => {
//       pressedDrum.classList.remove('pressed');
//     }, 100);
//     audio = new Audio(`./sounds/tom-${pressedKey}.mp3`);
//     audio.play();
//   }
// }
// document.querySelectorAll(".drum").forEach(element => element.addEventListener("click", playSound));
// document.addEventListener("keydown", playSound);
