let container = document.querySelector('#heroContent');
let canvas = document.querySelector('#myCanvas');

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let context = canvas.getContext('2d');

let dots = [];
let colors = ['#DAF5FF', '#FFE2FE', '#3B3923', '#9A031E', '#BEA7E5']

for(let i = 0; i < 50; i++){
    dots.push({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        size: Math.floor(Math.random() * 3 + 3),
        // color: colors[Math.floor(Math.random() * colors.length)],
        color: '#fff',
    })
}
function drawDots(){
    dots.forEach(dot => {
        // context.fillStyle = dot.color;
        context.fillStyle = 'transparent';
        context.beginPath();
        context.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        context.fill();
    });
}
drawDots();

container.addEventListener('mousemove', (e)=>{
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawDots()
    let mouse = {
        x: e.clientX - container.getBoundingClientRect().left,
        y: e.clientY - container.getBoundingClientRect().top,
    }
    dots.forEach(dot => {
        let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
        if(distance < 300){
            context.strokeStyle = dot.color;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(dot.x, dot.y);
            context.lineTo(mouse.x, mouse.y);
            context.stroke()
        }
    });
    document.querySelector('#spider').style.top = e.clientY + 'px';
    document.querySelector('#spider').style.left = e.clientX + 'px';
    // gsap.to("#spider", {
    //     top: e.clientY + 'px',
    //     left: e.clientX + 'px',
    // })
});
container.addEventListener('mouseleave', (e)=>{
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();
})