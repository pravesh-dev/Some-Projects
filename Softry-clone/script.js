function locomotiveScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

locomotiveScroll();

const countdown = () => {
  let days = 0;
  let hours = 4;
  let minutes = 37;
  let seconds = 56;

  const interval = setInterval(() => {
    if (seconds > 0) {
      seconds--;
    } else {
      if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else {
        if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          if (days > 0) {
            days--;
            hours = 23;
            minutes = 59;
            seconds = 59;
          } else {
            clearInterval(interval);
          }
        }
      }
    }

    updateDisplay(days, hours, minutes, seconds);
  }, 1000);
};

const updateDisplay = (days, hours, minutes, seconds) => {
  const spans = document.querySelectorAll("#timer > span");
  spans[0].textContent = days;
  spans[1].textContent = hours.toString().padStart(2, '0');
  spans[2].textContent = minutes.toString().padStart(2, '0');
  spans[3].textContent = seconds.toString().padStart(2, '0');
};

countdown();

let tl = gsap.timeline();

tl.from('#second-section',{
  scale: 0.7,
  y: 500,
  scrollTrigger: {
    trigger: '#first-section',
    scroller: '#main',
    start: '90% 50%',
    end: '90% 15%',
    scrub: 6,
  }
})
tl.from('#third-section',{
  scale: 0.7,
  y: 500,
  scrollTrigger: {
    trigger: '#second-section',
    scroller: '#main',
    start: '10% 50%',
    end: '10% 15%',
    scrub: 6,
  }
})
tl.from('#fourth-section',{
  scale: 0.7,
  y: 500,
  scrollTrigger: {
    trigger: '#third-section',
    scroller: '#main',
    start: '0% 50%',
    end: '0% 15%',
    scrub: 6,
  }
})
tl.from('#activeCard',{
  x: -100,
  scrollTrigger: {
    trigger: '#fourth-section',
    scroller: '#main',
    start: '-70% 50%',
    end: '-70% 35%',
    scrub: 6,
  }
})
let tl2 = gsap.timeline();
tl2.from('.sixth-section-imgs',{
  scale: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '#sixth-section',
    scroller: '#main',
    start: '0% 50%',
    end: '0% 35%',
    scrub: 6,
  }
}, 'a')
tl2.from('.sixth-section-anime',{
  y: 200,
  opacity: 0,
  scrollTrigger: {
    trigger: '#sixth-section',
    scroller: '#main',
    start: '0% 50%',
    end: '0% 35%',
    scrub: 6,
  }
}, 'a')

  // section2-card-hover
  let serviceCards = document.querySelectorAll(".section2-cards");
  document.querySelector('.learn-more-btns').style.visibility = 'visible';
  serviceCards.forEach(cards => {
    cards.addEventListener("mouseover", (e)=>{
      serviceCards.forEach(items => {
        items.classList.remove('section2-card-hover');
        items.querySelector('.learn-more-btns').style.visibility = 'hidden';
      });
      cards.classList.add('section2-card-hover');
      cards.querySelector('.learn-more-btns').style.visibility = 'visible';
    })
  });
  let planCards = document.querySelectorAll(".section-5-cards");
  planCards.forEach(cards => {
    cards.addEventListener("click", (e)=>{
      planCards.forEach(items => {
        items.classList.remove('active-plan-grid-box');
      });
      cards.classList.add('active-plan-grid-box');
    })
  });

