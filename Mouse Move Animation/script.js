document.addEventListener("mousemove", (e)=>{
    let xPos = e.offsetX;
    let yPos = e.offsetY;

    let Elem = document.createElement('span');
    Elem.style.left = xPos + "px";
    Elem.style.top = yPos + "px";
    let size = Math.random() * 6;
    Elem.style.width = size + "rem";
    Elem.style.height = size + "rem";
    document.body.appendChild(Elem);
    setTimeout(() => {
        Elem.remove();
    }, 3000);
})