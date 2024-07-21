let coordinates = [];

function circleIntersect(x0, y0, r0, x1, y1, r1) {
  return Math.hypot(x0 - x1, y0 - y1) <= r0 + r1;
}

function checkIfIntersecting() {
  const firstCircle = coordinates[0];
  const secondCircle = coordinates[1];
  const x1 = firstCircle.x;
  const y1 = firstCircle.y;
  const r1 = firstCircle.radius;
  const x2 = secondCircle.x;
  const y2 = secondCircle.y;
  const r2 = secondCircle.radius;
  return circleIntersect(x1, y1, r1, x2, y2, r2);
}
window.addEventListener("click", (e) => {
  let totalCircles = document.querySelectorAll(".circle");

  if (totalCircles.length === 2) {
    totalCircles.forEach((circle) =>{
        document.body.removeChild(circle)
        coordinates.shift()
    });
  }

  let x = e.clientX;
  let y = e.clientY;
  console.log("x: ", x, "y: ",y)
  let radius = Math.floor(Math.random() * (80 - 30) + 30);
  
  coordinates.push({ x, y, radius });

  let circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.width = radius * 2 + "px";
  circle.style.height = radius * 2 + "px";
  circle.style.top = y + "px";
  circle.style.left = x + "px";

  document.body.appendChild(circle);

  if (coordinates.length === 2) {
      const response = checkIfIntersecting();
      console.log('Intersecting: ',response);
    }
});