const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();

    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};


let container = document.querySelector("#container");
let prevMouseX = null;
let prevImg = null;
let images = [
    '/images/alex-shuper-O62Zz_YBEj4-unsplash.jpg',
    '/images/alex-shuper-OycvR_0rW8E-unsplash.jpg',
    '/images/alex-shuper-SNliMkZHVig-unsplash.jpg',
    '/images/alex-shuper-U7MRVBu0raM-unsplash.jpg',
    '/images/alex-shuper-Zs8VlSx03eY-unsplash.jpg',
    '/images/alex-shuper-jBAcX9rZF4s-unsplash.jpg',
    '/images/alex-shuper-916Ds_B9lnc-unsplash.jpg',
    '/images/alex-shuper-GTd4wfHitAA-unsplash.jpg'

]

container.addEventListener(
  "mousemove",
  throttleFunction((dets) => {
    let box = document.createElement('div');
    box.classList.add('box');
    let mouseX = dets.clientX - container.getBoundingClientRect().left;
    let mouseY = dets.clientY - container.getBoundingClientRect().top;


    if(prevMouseX !== null){
        if(mouseX > prevMouseX){
            box.style.rotate = '9deg'
        }
        else if(mouseX < prevMouseX){
            box.style.rotate = '-9deg'
        }
        else{
            console.log('not moving')
        }
    }

    prevMouseX = mouseX;

    box.style.left = mouseX + 'px'
    box.style.top = mouseY + 'px'

    let img = document.createElement('img');
    let imgSrc = images[Math.floor(Math.random() * images.length)];
    if(prevImg === imgSrc){
        imgSrc = images[Math.floor(Math.random() * images.length)];
    }
    prevImg = imgSrc;
    img.classList.add('img')
    img.setAttribute('src', imgSrc);
    box.appendChild(img)
    container.appendChild(box);

    gsap.to(img, {
        y: 0,
        duration: 0.5,
    })
    gsap.to(img, {
        y: '100%',
        delay: 0.7,
        duration: 0.6,
    })

    setTimeout(() => {
        box.remove();
    }, 1500);
  }, 300)
);
