const quizform = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-answers-btn");
const outputEl = document.querySelector(".output");

const correctAnswers = [
  "60°",
  "right angled",
  "greater than third side",
  "12, 16, 20",
  "Equilateral triangle",
  "180°",
  "30°",
  "a + b + c",
  "no",
  "3",
];

function calculateScore() {
  const formResults = new FormData(quizform);
  let score = 0,
    index = 0;
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  // console.log("The score is "+score);
  outputEl.innerText = "The score is " + score;
}

submitBtn.addEventListener("click", calculateScore);