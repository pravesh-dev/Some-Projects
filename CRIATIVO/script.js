let navItems = document.querySelectorAll(".nav-hover");
navItems.forEach((items) => {
  let targetBox = items.getAttribute("data-nav-target");
  let targetId = document.getElementById(targetBox);
  items.addEventListener("mouseover", (item) => {
    targetId.style.display = "flex";
  });
  items.addEventListener("mouseleave", (item) => {
    targetId.style.display = "none";
  });
  targetId.addEventListener("mouseover", () => {
    targetId.style.display = "flex";
  });
  targetId.addEventListener("mouseleave", () => {
    targetId.style.display = "none";
  });
});

const parallax2 = document.getElementById("parallax2");

const parallax1Images = [
  "images/parallex1.jpg",
  "images/parallex2.jpg",
  "images/parallex3.jpg",
  "images/parallex4.jpg",
];

function changeParallax1Image(index) {
  const parallax1Img = document.querySelector("#parallex-img img");
  parallax1Img.src = parallax1Images[index];
}

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: "#parallax2",
  start: "top 100%",
  end: "bottom 130%",
  onEnter: () => changeParallax1Image(1),
  onEnterBack: () => changeParallax1Image(0),
});
ScrollTrigger.create({
  trigger: "#our-team",
  start: "top 100%",
  end: "bottom 200%",
  onEnter: () => changeParallax1Image(2),
  onEnterBack: () => changeParallax1Image(1),
});
ScrollTrigger.create({
  trigger: "#testimonials",
  start: "top 100%",
  end: "bottom 200%",
  onEnter: () => changeParallax1Image(3),
  onEnterBack: () => changeParallax1Image(2),
});
