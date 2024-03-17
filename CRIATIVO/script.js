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

function heroSectionAnime() {
  gsap.from(
    "#hero-content-left h2, #hero-content-left h1, #hero-content-left > span",
    {
      y: 200,
      opacity: 0,
      duration: 1.5,
    }
  );
  gsap.from("#hero-content-left p", {
    y: 150,
    opacity: 0,
    delay: 0.6,
    duration: 1,
  });
  gsap.from("#play-box", {
    scale: 0,
    duration: 1,
    delay: 1,
  });
  gsap.from("#play-right", {
    x: -100,
    duration: 1,
    delay: 1,
    opacity: 0,
  });
}
function servicesAnime() {
  gsap.from("#service-left h4, #service-left h3, #service-left span", {
    y: 120,
    duration: 2.5,
    scrollTrigger: {
      trigger: "#our-services",
      scroller: "#main",
      start: "top 61%",
      end: "top 60%",
      scrub: 4,
    },
  });
  gsap.from("#service-left p", {
    y: 100,
    duration: 1.5,
    delay: 2,
    scrollTrigger: {
      trigger: "#our-services",
      scroller: "#main",
      start: "top 51%",
      end: "top 50%",
      scrub: 4,
    },
  });
  gsap.from(".service-box-wrapper", {
    scale: 0.8,
    stagger: 1,
    duration: 5,
    scrollTrigger: {
      trigger: "#our-services",
      scroller: "#main",
      start: "top 61%",
      end: "top 60%",
      scrub: 4,
    },
  });
}
function aboutAnime() {
  gsap.from("#about-right h4, #about-right > h3, #about-right span", {
    y: 120,
    duration: 2.5,
    scrollTrigger: {
      trigger: "#aboutUs",
      scroller: "#main",
      start: "top 61%",
      end: "top 60%",
      scrub: 4,
    },
  });
  gsap.from("#about-right > p", {
    y: 100,
    duration: 1.5,
    delay: 2,
    scrollTrigger: {
      trigger: "#aboutUs",
      scroller: "#main",
      start: "top 51%",
      end: "top 50%",
      scrub: 4,
    },
  });
  gsap.from("#about-bottom", {
    y: 100,
    duration: 1.5,
    delay: 2,
    scrollTrigger: {
      trigger: "#aboutUs",
      scroller: "#main",
      start: "top 51%",
      end: "top 50%",
      scrub: 4,
    },
  });
}
function changeParallaxCount(count, elementId) {
  let countElement = document.querySelector(`#${elementId}`);
  let currentCount = 0;
  function updateCount() {
    countElement.innerHTML = currentCount + "<span>+</span>";
    currentCount++;

    if (currentCount <= count) {
      setTimeout(updateCount, 10);
    }
  }
  updateCount();
}
let countElementsInfo = [
  {
    count: 150,
    elemId: "project-count",
  },
  {
    count: 75,
    elemId: "costumer-count",
  },
  {
    count: 20,
    elemId: "award-count",
  },
  {
    count: 45,
    elemId: "member-count",
  },
];
countElementsInfo.forEach((info) => {
  ScrollTrigger.create({
    trigger: "#parallax1",
    start: "top 71%",
    end: "bottom 70%",
    onEnter: () => changeParallaxCount(info.count, info.elemId),
  });
});

heroSectionAnime();
servicesAnime();
aboutAnime();
