let letterContainer = document.querySelector("#letter-container");
let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"
];
letters.forEach(element => {
    let h3 = document.createElement("h3");
    h3.innerHTML = element;
    letterContainer.appendChild(h3);
});
let allLetters = letterContainer.querySelectorAll("h3");
let inputBox = document.querySelector("#msgInput")

function setActiveElem(elem){
  gsap.to(elem, {
    y: -12,
    scale: 4,
    duration: 0.2,
  });
  elem.style.background = "linear-gradient(to right, #fff, #A231FB)";
  elem.style.backgroundClip = "text";
  elem.style.color = "transparent";
}
function removeActiveElem(elem){
  gsap.to(elem, {
    y: 0,
    scale: 1,
    duration: 0.2,
  });
  elem.style.background = "transparent";
  elem.style.backgroundClip = "none";
  elem.style.color = "#F8FFA7";
}
inputBox.addEventListener("keypress", (e) => {
  allLetters.forEach((elem) => {
    if (e.key.toLowerCase() === elem.innerHTML.toLowerCase()) {
      setActiveElem(elem);
    } else {
      removeActiveElem(elem);
    }
  });
});
inputBox.addEventListener("blur", ()=>{
  allLetters.forEach((elem)=>{
    removeActiveElem(elem);
  })
})