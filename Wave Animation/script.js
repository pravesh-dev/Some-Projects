function createCircle(count){
    let circleWidth = 5;
    let circleHeight = 5;
    let zInd = 99; 
    for(let i = 0; i < count; i++){
        let circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.width = circleWidth + 'vw';
        circle.style.height = circleHeight + 'vw';
        circle.style.zIndex = zInd;

        circleWidth += 2;
        circleHeight += 2;
        zInd -= 1;
        document.body.appendChild(circle)
    }
}
createCircle(15)

let circles = document.querySelectorAll('.circle');
let changeTop = window.innerHeight/2;

document.addEventListener('mousemove', (e)=>{
        gsap.to(circles, {
            top: e.clientY + 'px',
            // left: e.clientX + 'px',
            stagger: 0.06,
        })
        if(e.clientY < changeTop){
            gsap.to(circles, {
                border: '2px solid #b70000',
                // background: 'red',
                stagger: 0.06
            })
        }
        else if(e.clientY > changeTop){
            gsap.to(circles, {
                border: '2px solid #00007f',
                // background: 'blue',
                stagger: 0.06
            })
        }
        else{
            gsap.to(circles, {
                border: '2px solid transparent',
                stagger: 0.06
            })
        }
})