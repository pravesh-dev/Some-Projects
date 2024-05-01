let box = document.querySelector('#box');

window.addEventListener('mousemove', (e)=>{
    let xPos = gsap.utils.mapRange(
        0,
        window.innerWidth,
        400 + box.getBoundingClientRect().width/2,
        window.innerWidth - (400 + box.getBoundingClientRect().width/2),
        e.clientX
    )
    let yPos = gsap.utils.mapRange(
        0,
        window.innerHeight,
        150 + box.getBoundingClientRect().height/2,
        window.innerHeight - (150 + box.getBoundingClientRect().height/2),
        e.clientY
    )

    gsap.to(box, {
        left: xPos,
        top: yPos
    })
});