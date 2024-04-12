let box = document.querySelector("#img-box");
let reactIcon = document.querySelector("#react-icon");
let line1 = document.querySelector("#line1");
let laptopKeyboard = document.querySelector("#laptop-keyboard");

let animeBtn = document.querySelector("#anime-btn");
animeBtn.addEventListener("click", ()=>{
    setTimeout(() => {
        animateBox()
    }, 1000);
});
function animateBox() {
  box.style.width = "7vw";
  box.style.height = "10vw";
  box.style.border = "4px solid white";
  box.style.scale = "1";
  line1.style.opacity = 1;
  line1.style.width = "2vw";
  setTimeout(() => {
    box.style.rotate = "-90deg";
    reactIcon.style.rotate = "90deg";
    reactIcon.style.scale = "1.2";
    line1.style.height = "2vh";
    line1.style.bottom = "40%";
    line1.style.borderRadius = "0";
  }, 1000);
  setTimeout(() => {
    box.style.scale = "0.8";
    laptopKeyboard.style.width = "9vw";
    laptopKeyboard.style.opacity = 1;
  }, 2000);
  setTimeout(() => {
    box.style.rotate = "-180deg";
    reactIcon.style.rotate = "180deg";
    laptopKeyboard.style.width = "0vw";
    laptopKeyboard.style.opacity = 0;
    line1.style.height = "0.6vh";
    line1.style.bottom = "43%";
    line1.style.borderRadius = "20px";
  }, 3000);
  setTimeout(() => {
    box.style.scale = "2";
    box.style.width = "6vw";
    box.style.height = "6vw";
    box.style.border = "4px solid transparent";
    line1.style.width = "0vw";
    line1.style.bottom = "41%";
    line1.style.opacity = "0";
    reactIcon.style.scale = "1";
  }, 4000);
  setTimeout(() => {
    box.style.rotate = "0deg";
    reactIcon.style.rotate = "0deg";
  }, 5000);
  setTimeout(() => {
      animateBox()
  }, 6000);
}
