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