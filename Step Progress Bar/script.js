let bar = document.querySelector("#front-bar");
const nextBtn = document.querySelector("#next-btn");
const previousBtn = document.querySelector("#previous-btn");
const steps = document.querySelectorAll(".steps");
let currentIndex = 1;

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > steps.length) {
    currentIndex = steps.length;
  }
  updateSteps();
  showStepCount();
});
previousBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 1) {
    currentIndex = 1;
  }
  updateSteps();
  showStepCount();
});

const updateSteps = () => {
  steps.forEach((step, index) => {
    if (index < currentIndex) {
      step.classList.add("completed-steps");
      step.nextElementSibling.classList.add("checked");
      setTimeout(() => {
        step.innerHTML = `<i class="ri-check-line"></i>`;
      }, 380);
    } else {
      step.classList.remove("completed-steps");
      step.nextElementSibling.classList.remove("checked");
      step.innerHTML = `<i class="ri-close-fill"></i>`;
    }
  });
  let completedSteps = document.querySelectorAll(".completed-steps");
  bar.style.width =
    ((completedSteps.length - 1) / (steps.length - 1)) * 100 + "%";

  if (currentIndex === 1) {
    previousBtn.disabled = true;
  } else if (currentIndex === steps.length) {
    nextBtn.disabled = true;
  } else {
    previousBtn.disabled = false;
    nextBtn.disabled = false;
  }
};
updateSteps();
