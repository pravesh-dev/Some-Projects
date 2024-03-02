let bar = document.querySelector("#front-bar");
const nextBtn = document.querySelector("#next-btn");
const previousBtn = document.querySelector("#previous-btn");
const steps = document.querySelectorAll(".steps");
const stepCounts = document.querySelectorAll(".step-count");
let currentIndex = 1;

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > steps.length) {
    currentIndex = steps.length;
  }
  updateSteps();
});
previousBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 1) {
    currentIndex = 1;
  }
  updateSteps();
});

const updateSteps = () => {
  steps.forEach((step, index) => {
    if (index < currentIndex) {
      step.classList.add("completed-steps");
      setTimeout(() => {
        step.innerHTML = `<i class="ri-check-line"></i>`;
      }, 380);
    } else {
      step.classList.remove("completed-steps");
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
